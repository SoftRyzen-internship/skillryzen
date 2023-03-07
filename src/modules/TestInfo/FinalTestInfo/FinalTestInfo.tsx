import { useTranslation } from 'react-i18next';
import { useThemeContext } from 'context/themeContext';
import { AuthButton } from 'ui-kit';
import { IThemeContext } from 'modules/common/types';

import s from './FinalTestInfo.module.scss';

const objectTheme = {
  dark: {
    title: s.titleDark,
    icon: s.iconDark,
    iconThumb: s.iconThumbDark,
    subtitle: s.subtitleDark,
    text: s.textDark,
    textRight: s.textRightDark,
    recText: s.recTextDark,
    recomendationsWrapper: s.recomendationsWrapperDark,
  },
  light: {
    title: s.titleLight,
    icon: s.iconLight,
    iconThumb: s.iconThumbLight,
    subtitle: s.subtitleLight,
    text: s.textLight,
    textRight: s.textRightLight,
    recText: s.recTextLight,
    recomendationsWrapper: s.recomendationsWrapperLight,
  },
};

interface ListInfoJS {
  topics: string;
  time: string;
  questions: number;
  learners: number;
  author: string;
  icons: {
    [key: string]: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  };
}

interface IconProps {
  alt: string;
  width: string;
  height: string;
}

interface Props {
  image: string;
  imageProps: IconProps;
  title?: string;
  subtitle?: string;
  listInfo?: ListInfoJS;
  correctAnswers?: number;
  totalQuestions?: number;
  timeSpent?: string;
  iconAnswers?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  iconTime?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  theWorstTopic?: string;
  theBestTopic?: string;
  onClickBtn: () => void;
  textBtn?: string;
  finishTest?: boolean;
  test: string;
}

export const FinalTestInfo = ({
  image,
  imageProps,
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
  finishTest,
  test,
}: Props) => {
  const { t } = useTranslation();
  const { theme }: IThemeContext = useThemeContext();

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
      <h2 className={objectTheme[theme].title}>{t('finalTestInfo.title')}</h2>
      {subtitle && (
        <p className={objectTheme[theme].subtitle}>
          {t('finalTestInfo.subtitle')}
        </p>
      )}
      {listInfo ? (
        <ul className={s.list}>
          <li className={s.item}>
            <div className={s.iconWrapper}>
              <div className={objectTheme[theme].iconThumb}>
                {theme === 'dark' ? (
                  <listInfo.icons.BAR />
                ) : (
                  <listInfo.icons.BAR_LIGHT />
                )}
              </div>
              <p className={objectTheme[theme].text}>
                {t('finalTestInfo.list.topics')}
              </p>
            </div>
            <p
              className={objectTheme[theme].textRight}
            >{`${listInfo.topics}`}</p>
          </li>
          <li className={s.item}>
            <div className={s.iconWrapper}>
              <div className={objectTheme[theme].iconThumb}>
                <listInfo.icons.CLOCK className={objectTheme[theme].icon} />
              </div>
              <p className={objectTheme[theme].text}>
                {t('finalTestInfo.list.time')}
              </p>
            </div>
            <p className={objectTheme[theme].textRight}>{`${listInfo.time}`}</p>
          </li>
          <li className={s.item}>
            <div className={s.iconWrapper}>
              <div className={objectTheme[theme].iconThumb}>
                <listInfo.icons.QUESTION className={objectTheme[theme].icon} />
              </div>
              <p className={objectTheme[theme].text}>
                {t('finalTestInfo.list.questions')}
              </p>
            </div>
            <p
              className={objectTheme[theme].textRight}
            >{`${listInfo.questions}`}</p>
          </li>
          <li className={s.item}>
            <div className={s.iconWrapper}>
              <div className={objectTheme[theme].iconThumb}>
                <listInfo.icons.USERS className={objectTheme[theme].icon} />
              </div>
              <p className={objectTheme[theme].text}>
                {t('finalTestInfo.list.learners')}
              </p>
            </div>
            <p
              className={objectTheme[theme].textRight}
            >{`${listInfo.learners}`}</p>
          </li>
          <li className={s.item}>
            <div className={s.iconWrapper}>
              <div className={objectTheme[theme].iconThumb}>
                <listInfo.icons.USER className={objectTheme[theme].icon} />
              </div>
              <p className={objectTheme[theme].text}>
                {t('finalTestInfo.list.author')}
              </p>
            </div>
            <p
              className={objectTheme[theme].textRight}
            >{`${listInfo.author}`}</p>
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
                <div className={objectTheme[theme].iconThumb}>
                  <IconAnswers className={objectTheme[theme].icon} />
                </div>
                <p className={objectTheme[theme].text}>
                  {t('finalTestInfo.correctAnswers')}
                </p>
              </div>
              <p className={objectTheme[theme].textRight}>
                {`${correctAnswers}`}
                <span className={s.textGrey}>/{`${totalQuestions}`}</span>
              </p>
            </li>
            <li className={s.item}>
              <div className={s.iconWrapper}>
                <div className={objectTheme[theme].iconThumb}>
                  <IconTime className={objectTheme[theme].icon} />
                </div>
                <p className={objectTheme[theme].text}>
                  {t('finalTestInfo.timeSpent')}
                </p>
              </div>
              <p className={objectTheme[theme].textRight}>
                {`${timeSpent}`} {t('finalTestInfo.min')}
              </p>
            </li>
          </ul>
          {theWorstTopic && theBestTopic && (
            <div className={objectTheme[theme].recomendationsWrapper}>
              <p className={objectTheme[theme].recText}>
                {t('finalTestInfo.recomendations')}:
              </p>
              <p className={s.recTextSmall}>
                {t('finalTestInfo.worstTopic')} {`${test}`} -{' '}
                {`${theWorstTopic}`} {t('finalTestInfo.section')}
              </p>
              <p className={s.recTextSmall}>
                {t('finalTestInfo.bestTopic')} {`${test}`} - {`${theBestTopic}`}{' '}
                {t('finalTestInfo.section')}
              </p>
            </div>
          )}
        </>
      )}
      <AuthButton
        type='button'
        text={
          finishTest ? t('finalTestInfo.endTest') : t('finalTestInfo.startTest')
        }
        onClick={onClickBtn}
        size='large'
        color='blue'
        className={!(theWorstTopic && theBestTopic) && finishTest ? s.btn : ''}
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
  imageProps={{ alt: 'Java Script', width: '120', height: '120' }}
  title='FullStack - Final Test'
  subtitle='JavaScript is a programming language that is one of the core
    technologies of the World Wide Web, alongside HTML and CSS.'
  listInfo={listInfoJS}
  onClickBtn={handleClickBtn}
  textBtn='Start test'
  test='JS'
/> */

// PROPS For End Test

{
  /* <FinalTestInfo
  image={IMGS.JAVA_SCRIPT}
  imageProps={{ alt: 'Java Script', width: '120', height: '120' }}
  title='FullStack - Final Test'
  correctAnswers={15}
  totalQuestions={50}
  timeSpent={20}
  iconAnswers={ICONS.CHECK_SMALL}
  iconTime={ICONS.CLOCK}
  // theWorstTopic='“Asynchrony”' // для фінального тесту не передавати!
  // theBestTopic='"Lorem lorem lorem"' // для фінального тесту не передавати!
  onClickBtn={handleClickBtn}
  textBtn='Start test'
  test='JS'
  finishTest
/> */
}
