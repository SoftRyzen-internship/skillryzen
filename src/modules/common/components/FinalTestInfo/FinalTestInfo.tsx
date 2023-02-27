import React from 'react';
import { AuthButton } from '../../../../ui-kit/Buttons/AuthBtn/AuthButton';
import s from './FinalTestInfo.module.scss';

interface IListInfoJS {
  topics: string;
  time: string;
  questions: number;
  learners: number;
  author: string;
  icons: string[];
}

interface IIconProps {
  alt: string;
  width: string;
  height: string;
}

interface IProps {
  image: string;
  imageProps: IIconProps;
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
  image,
  imageProps,
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
  const { alt, width, height } = imageProps;
  return (
    <div className={s.container}>
      <div className={s.imageThumb}>
        {' '}
        <img
          className={s.image}
          src={image}
          alt={alt}
          width={width}
          height={height}
        />
      </div>
      <h2 className={s.title}>{title}</h2>
      {subtitle && <p className={s.subtitle}>{subtitle}</p>}
      {listInfo ? (
        <ul className={s.list}>
          <li className={s.item}>
            <div className={s.iconWrapper}>
              {' '}
              <img className={s.icon} src='/' alt='' />
              <p className={s.text}>Теми</p>
            </div>
            <p className={s.textRight}>{`${listInfo.topics}`}</p>
          </li>
          <li className={s.item}>
            <div className={s.iconWrapper}>
              {' '}
              <img className={s.icon} src='/' alt='' />
              <p className={s.text}>Час проходження</p>
            </div>
            <p className={s.textRight}>{`${listInfo.time}`}</p>
          </li>
          <li className={s.item}>
            <div className={s.iconWrapper}>
              {' '}
              <img className={s.icon} src='/' alt='' />
              <p className={s.text}>Питання</p>
            </div>
            <p className={s.textRight}>{`${listInfo.questions}`}</p>
          </li>
          <li className={s.item}>
            <div className={s.iconWrapper}>
              {' '}
              <img className={s.icon} src='/' alt='' />
              <p className={s.text}>Learners</p>
            </div>
            <p className={s.textRight}>{`${listInfo.learners}`}</p>
          </li>
          <li className={s.item}>
            <div className={s.iconWrapper}>
              {' '}
              <img className={s.icon} src='/' alt='' />
              <p className={s.text}>Author</p>
            </div>
            <p className={s.textRight}>{`${listInfo.author}`}</p>
          </li>
        </ul>
      ) : (
        ''
      )}

      {finishTest && (
        <>
          <ul className={s.list}>
            <li className={s.item}>
              <div className={s.iconWrapper}>
                {' '}
                <img className={s.icon} src='/' alt='' />
                <p className={s.text}>Correct answers</p>
              </div>
              <p className={s.textRight}>
                {`${correctAnswers}`}
                <span className={s.textGrey}>/{`${totalQuestions}`}</span>
              </p>
            </li>
            <li className={s.item}>
              <div className={s.iconWrapper}>
                <img className={s.icon} src='/' alt='' />
                <p className={s.text}>Time spent</p>
              </div>

              <p className={s.textRight}>{`${timeSpent}`} min</p>
            </li>
          </ul>
          <div className={s.recomendationsWrapper}>
            <p className={s.recText}>Recomendations:</p>
            <p className={s.recTextSmall}>
              The worst topic in {`${test}`} - {`${theWorstTopic}`}
            </p>
            <p className={s.recTextSmall}>
              The best topic in {`${test}`} - {`${theBestTopic}`}
            </p>
          </div>
        </>
      )}

      <AuthButton
        type='button'
        text={textBtn}
        onClick={onClickBtn}
        size='large'
        color='blue'
      />
    </div>
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
//   image={IMGS.JAVA_SCRIPT}
//   imageProps={{ alt: 'Java Script', width: '146', height: '146' }}
//   title='FullStack - Final Test'
//   subtitle='JavaScript is a programming language that is one of the core
//     technologies of the World Wide Web, alongside HTML and CSS.'
//   listInfo={listInfoJS}
//   onClickBtn={handleClickBtn}
//   textBtn='Start test'
//   test='JS'
// />

// PROPS For End Test
// <FinalTestInfo
//   image={IMGS.JAVA_SCRIPT}
//   imageProps={{ alt: 'Java Script', width: '146', height: '146' }}
//   title='FullStack - Final Test'
//   correctAnswers={15}
//   totalQuestions={50}
//   timeSpent={20}
//   theWorstTopic='“Asynchrony” section.'
//   theBestTopic='"Lorem lorem lorem" section.'
//   onClickBtn={handleClickBtn}
//   textBtn='Start test'
//   test='JS'
//   finishTest
// />
