import React from 'react';

interface IListInfoJS {
  topics: string;
  time: string;
  questions: number;
  learners: number;
  author: string;
}

interface IIconProps {
  alt: string;
  width: string;
  height: string;
}

interface IProps {
  icon: string;
  iconProps: IIconProps;
  title: string;
  subtitle?: string;
  listInfo?: IListInfoJS;
  correctAnswers?: number;
  totalQuestions?: number;
  timeSpent?: number;
  theWorstTopic?: string;
  theBestTopic?: string;
  onClickBtn: () => void;
  textBtn: string;
  finishTest?: boolean;
  test: string;
}

export const FinalTestInfo = ({
  icon,
  iconProps,
  title,
  subtitle,
  listInfo,
  correctAnswers,
  totalQuestions,
  timeSpent,
  theWorstTopic,
  theBestTopic,
  onClickBtn,
  textBtn,
  finishTest,
  test,
}: IProps) => {
  const { alt, width, height } = iconProps;
  return (
    <>
      <img src={icon} alt={alt} width={width} height={height} />
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      {listInfo ? (
        <ul>
          <li>
            <p>Теми</p>
            <p>{`${listInfo.topics}`}</p>
          </li>
          <li>
            <p>Час проходження</p>
            <p>{`${listInfo.time}`}</p>
          </li>
          <li>
            <p>Питання</p>
            <p>{`${listInfo.questions}`}</p>
          </li>
          <li>
            <p>Learners</p>
            <p>{`${listInfo.learners}`}</p>
          </li>
          <li>
            <p>Author</p>
            <p>{`${listInfo.author}`}</p>
          </li>
        </ul>
      ) : (
        ''
      )}

      {finishTest && (
        <>
          <ul>
            <li>
              <p>Correct answers</p>
              <p>
                {`${correctAnswers}`}/{`${totalQuestions}`}
              </p>
            </li>
            <li>
              <p>Time spent</p>
              <p>{`${timeSpent}`} min</p>
            </li>
          </ul>
          <div>
            <p>Recomendations:</p>
            <p>
              The worst topic in {`${test}`} - {`${theWorstTopic}`}
            </p>
            <p>
              The best topic in {`${test}`} - {`${theBestTopic}`}
            </p>
          </div>
        </>
      )}

      <button type='button' onClick={onClickBtn}>
        {textBtn}
      </button>
    </>
  );
};

// Приклад використання в компоненті

// const listInfoJS = {
//   topics: 'HTML, CSS, JavaScript, React',
//   time: '2:00:00',
//   questions: 50,
//   learners: 200,
//   author: 'GoIT',
// };

// const [isClickBtn, setIsClickBtn] = useState(false);
// const handleClickBtn = () => {
//   setIsClickBtn(true);
// };

// PROPS For Start Test
// <FinalTestInfo
//   icon={IMGS.JAVA_SCRIPT}
//   iconProps={{ alt: 'Java Script', width: '146', height: '146' }}
//   title='FullStack - Final Test'
//   subtitle='JavaScript is a programming language that is one of the core
//     technologies of the World Wide Web, alongside HTML and CSS.'
//   listInfo={listInfoJS}
//   onClickBtn={handleClickBtn}
//   textBtn='Start test'
//   test = 'JS';
// />;

// PROPS For End Test
// <FinalTestInfo
//   icon={IMGS.JAVA_SCRIPT}
//   iconProps={{ alt: 'Java Script', width: '146', height: '146' }}
//   title='FullStack - Final Test'
//   correctAnswers={15}
//   totalQuestions={50}
//   timeSpent={20}
//   theWorstTopic='The worst topic in JS - “Asynchrony” section.'
//   theBestTopic='The best topic in JS - "Lorem lorem lorem" section.'
//   onClickBtn={handleClickBtn}
//   textBtn='Start test'
//   test='JS'
//   finishTest
// />;
