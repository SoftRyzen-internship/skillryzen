import React from 'react';
import { useTranslation } from 'react-i18next';
import { AuthButton } from 'ui-kit';
import s from './FinalTestInfo.module.scss';

interface IListInfoJS {
  topics: string;
  time: string;
  questions: number;
  learners: number;
  author: string;
  icons: {
    [key: string]: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  };
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
  iconAnswers?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  iconTime?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
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
  iconAnswers: IconAnswers,
  iconTime: IconTime,
  theWorstTopic,
  theBestTopic,
  onClickBtn,
  textBtn,
  finishTest,
  test,
}: IProps) => {
  const { t } = useTranslation();

  const { alt, width, height } = imageProps;
  return (
    <div className={s.container}>
      <div className={s.imageThumb}>
        <img
          className={s.image}
          src={image}
          alt={alt}
          width={width}
          height={height}
        />
      </div>
      <h2 className={s.title}>{t('finalTestInfo.title')}</h2>
      {subtitle && <p className={s.subtitle}>{t('finalTestInfo.subtitle')}</p>}
      {listInfo ? (
        <ul className={s.list}>
          <li className={s.item}>
            <div className={s.iconWrapper}>
              <div className={s.iconThumb}>
                <listInfo.icons.BAR className={s.icon} />
              </div>
              <p className={s.text}>{t('finalTestInfo.list.topics')}</p>
            </div>
            <p className={s.textRight}>{`${listInfo.topics}`}</p>
          </li>
          <li className={s.item}>
            <div className={s.iconWrapper}>
              <div className={s.iconThumb}>
                <listInfo.icons.CLOCK className={s.icon} />
              </div>
              <p className={s.text}>{t('finalTestInfo.list.time')}</p>
            </div>
            <p className={s.textRight}>{`${listInfo.time}`}</p>
          </li>
          <li className={s.item}>
            <div className={s.iconWrapper}>
              <div className={s.iconThumb}>
                <listInfo.icons.QUESTION className={s.icon} />
              </div>
              <p className={s.text}>{t('finalTestInfo.list.questions')}</p>
            </div>
            <p className={s.textRight}>{`${listInfo.questions}`}</p>
          </li>
          <li className={s.item}>
            <div className={s.iconWrapper}>
              <div className={s.iconThumb}>
                <listInfo.icons.GROUP className={s.icon} />
              </div>
              <p className={s.text}>{t('finalTestInfo.list.learners')}</p>
            </div>
            <p className={s.textRight}>{`${listInfo.learners}`}</p>
          </li>
          <li className={s.item}>
            <div className={s.iconWrapper}>
              <div className={s.iconThumb}>
                <listInfo.icons.USERS className={s.icon} />
              </div>
              <p className={s.text}>{t('finalTestInfo.list.author')}</p>
            </div>
            <p className={s.textRight}>{`${listInfo.author}`}</p>
          </li>
        </ul>
      ) : (
        ''
      )}

      {finishTest && (
        <>
          <ul className={s.recList}>
            <li className={s.item}>
              <div className={s.iconWrapper}>
                <div className={s.iconThumb}>
                  <IconAnswers className={s.icon} />
                </div>
                <p className={s.text}>{t('finalTestInfo.correctAnswers')}</p>
              </div>
              <p className={s.textRight}>
                {`${correctAnswers}`}
                <span className={s.textGrey}>/{`${totalQuestions}`}</span>
              </p>
            </li>
            <li className={s.item}>
              <div className={s.iconWrapper}>
                <div className={s.iconThumb}>
                  <IconTime className={s.icon} />
                </div>
                <p className={s.text}>{t('finalTestInfo.timeSpent')}</p>
              </div>
              <p className={s.textRight}>
                {`${timeSpent}`} {t('finalTestInfo.min')}
              </p>
            </li>
          </ul>
          <div className={s.recomendationsWrapper}>
            <p className={s.recText}>{t('finalTestInfo.recomendations')}:</p>
            <p className={s.recTextSmall}>
              {t('finalTestInfo.worstTopic')} {`${test}`} - {`${theWorstTopic}`}{' '}
              {t('finalTestInfo.section')}
            </p>
            <p className={s.recTextSmall}>
              {t('finalTestInfo.bestTopic')} {`${test}`} - {`${theBestTopic}`}{' '}
              {t('finalTestInfo.section')}
            </p>
          </div>
        </>
      )}

      <AuthButton
        type='button'
        text={t('finalTestInfo.startTest')}
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
// icons: {
//   BAR: ICONS.BAR_ONE_LINE,
//   CLOCK: ICONS.CLOCK,
//   QUESTION: ICONS.QUESTION_CIRCLE,
//   GROUP: ICONS.USERS,
//   USERS: ICONS.USER,
// },
// };

// const [isClickBtn, setIsClickBtn] = useState(false);
// const handleClickBtn = () => {
//   setIsClickBtn(true);
// };

// PROPS For Start Test
/* <FinalTestInfo
  image={IMGS.JAVA_SCRIPT}
  imageProps={{ alt: 'Java Script', width: '146', height: '146' }}
  title='FullStack - Final Test'
  subtitle='JavaScript is a programming language that is one of the core
    technologies of the World Wide Web, alongside HTML and CSS.'
  listInfo={listInfoJS}
  onClickBtn={handleClickBtn}
  textBtn='Start test'
  test='JS'
/> */

// PROPS For End Test

// <FinalTestInfo
//   image={IMGS.JAVA_SCRIPT}
//   imageProps={{ alt: 'Java Script', width: '146', height: '146' }}
//   title='FullStack - Final Test'
//   correctAnswers={15}
//   totalQuestions={50}
//   timeSpent={20}
//   iconAnswers={ICONS.CHECK_SMALL}
//   iconTime={ICONS.CLOCK}
//   theWorstTopic='“Asynchrony”'
//   theBestTopic='"Lorem lorem lorem"'
//   onClickBtn={handleClickBtn}
//   textBtn='Start test'
//   test='JS'
//   finishTest
// />
