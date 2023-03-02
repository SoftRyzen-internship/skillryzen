import { useTranslation } from 'react-i18next';
import { useThemeContext } from 'context/themeContext';
import { AuthButton } from 'ui-kit';
import { IThemeContext } from 'modules/common/types';

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
  title?: string;
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
}: IProps) => {
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
      <h2 className={theme === 'dark' ? s.titleDark : s.titleLight}>
        {t('finalTestInfo.title')}
      </h2>
      {subtitle && (
        <p className={theme === 'dark' ? s.subtitleDark : s.subtitleLight}>
          {t('finalTestInfo.subtitle')}
        </p>
      )}
      {listInfo ? (
        <ul className={s.list}>
          <li className={s.item}>
            <div className={s.iconWrapper}>
              <div
                className={
                  theme === 'dark' ? s.iconThumbDark : s.iconThumbLight
                }
              >
                {theme === 'dark' ? (
                  <listInfo.icons.BAR />
                ) : (
                  <listInfo.icons.BAR_LIGHT />
                )}
              </div>
              <p className={theme === 'dark' ? s.textDark : s.textLight}>
                {t('finalTestInfo.list.topics')}
              </p>
            </div>
            <p
              className={theme === 'dark' ? s.textRightDark : s.textRightLight}
            >{`${listInfo.topics}`}</p>
          </li>
          <li className={s.item}>
            <div className={s.iconWrapper}>
              <div
                className={
                  theme === 'dark' ? s.iconThumbDark : s.iconThumbLight
                }
              >
                <listInfo.icons.CLOCK
                  className={theme === 'dark' ? s.iconDark : s.iconLight}
                />
              </div>
              <p className={theme === 'dark' ? s.textDark : s.textLight}>
                {t('finalTestInfo.list.time')}
              </p>
            </div>
            <p
              className={theme === 'dark' ? s.textRightDark : s.textRightLight}
            >{`${listInfo.time}`}</p>
          </li>
          <li className={s.item}>
            <div className={s.iconWrapper}>
              <div
                className={
                  theme === 'dark' ? s.iconThumbDark : s.iconThumbLight
                }
              >
                <listInfo.icons.QUESTION
                  className={theme === 'dark' ? s.iconDark : s.iconLight}
                />
              </div>
              <p className={theme === 'dark' ? s.textDark : s.textLight}>
                {t('finalTestInfo.list.questions')}
              </p>
            </div>
            <p
              className={theme === 'dark' ? s.textRightDark : s.textRightLight}
            >{`${listInfo.questions}`}</p>
          </li>
          <li className={s.item}>
            <div className={s.iconWrapper}>
              <div
                className={
                  theme === 'dark' ? s.iconThumbDark : s.iconThumbLight
                }
              >
                <listInfo.icons.USERS
                  className={theme === 'dark' ? s.iconDark : s.iconLight}
                />
              </div>
              <p className={theme === 'dark' ? s.textDark : s.textLight}>
                {t('finalTestInfo.list.learners')}
              </p>
            </div>
            <p
              className={theme === 'dark' ? s.textRightDark : s.textRightLight}
            >{`${listInfo.learners}`}</p>
          </li>
          <li className={s.item}>
            <div className={s.iconWrapper}>
              <div
                className={
                  theme === 'dark' ? s.iconThumbDark : s.iconThumbLight
                }
              >
                <listInfo.icons.USER
                  className={theme === 'dark' ? s.iconDark : s.iconLight}
                />
              </div>
              <p className={theme === 'dark' ? s.textDark : s.textLight}>
                {t('finalTestInfo.list.author')}
              </p>
            </div>
            <p
              className={theme === 'dark' ? s.textRightDark : s.textRightLight}
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
                <div
                  className={
                    theme === 'dark' ? s.iconThumbDark : s.iconThumbLight
                  }
                >
                  <IconAnswers
                    className={theme === 'dark' ? s.iconDark : s.iconLight}
                  />
                </div>
                <p className={theme === 'dark' ? s.textDark : s.textLight}>
                  {t('finalTestInfo.correctAnswers')}
                </p>
              </div>
              <p
                className={
                  theme === 'dark' ? s.textRightDark : s.textRightLight
                }
              >
                {`${correctAnswers}`}
                <span className={s.textGrey}>/{`${totalQuestions}`}</span>
              </p>
            </li>
            <li className={s.item}>
              <div className={s.iconWrapper}>
                <div
                  className={
                    theme === 'dark' ? s.iconThumbDark : s.iconThumbLight
                  }
                >
                  <IconTime
                    className={theme === 'dark' ? s.iconDark : s.iconLight}
                  />
                </div>
                <p className={theme === 'dark' ? s.textDark : s.textLight}>
                  {t('finalTestInfo.timeSpent')}
                </p>
              </div>
              <p
                className={
                  theme === 'dark' ? s.textRightDark : s.textRightLight
                }
              >
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

// <FinalTestInfo
//   image={IMGS.JAVA_SCRIPT}
//   imageProps={{ alt: 'Java Script', width: '120', height: '120' }}
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
