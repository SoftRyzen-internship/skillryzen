import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useThemeContext } from 'context/themeContext';
import { convertTime } from 'utils/convertTime';
import { IThemeContext } from 'constans/types';
import { ICONS } from 'ui-kit/icons';
import { MainButton } from 'ui-kit';

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

interface ListInfo {
  topics: string[];
  time: number;
  questions: number;
  learners: number;
  author: string;
  icons: {
    [key: string]: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  };
}

interface ImageProps {
  alt: string;
  width: string;
  height: string;
}

interface Props {
  image?: string;
  imageProps?: ImageProps;
  title?: string;
  subtitle?: string;
  listInfo?: ListInfo;
  correctAnswers?: number;
  totalQuestions?: number;
  timeSpent?: string;
  isPassed?: boolean;
  iconAnswers?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  iconTime?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  theWorstTopic?: string;
  theBestTopic?: string;
  onClickBtn: () => void;
  textBtn?: string;
  finishTest?: boolean;
  test?: string;
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
  isPassed,
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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={finishTest ? s.containerFinish : s.containerStart}>
      <div className={s.imageThumb}>
        <img
          className={s.image}
          src={image}
          alt={alt}
          width={width}
          height={height}
        />
      </div>
      <h2 className={objectTheme[theme].title}>{title}</h2>
      {subtitle && <p className={objectTheme[theme].subtitle}>{subtitle}</p>}
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
            >{listInfo.topics.join(', ')}</p>
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
            <p className={objectTheme[theme].textRight}>
              {convertTime(listInfo.time / 1000)}
            </p>
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
          {/* <li className={s.item}>
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
          </li> */}
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
          {isPassed ? (
            <div className={s.resultIsPassed}>
              <ICONS.TEST_PASSED />
              <p className={s.noticePassed}>{t('finalTestInfo.passedTest')}</p>
            </div>
          ) : (
            <div className={s.resultIsPassed}>
              <ICONS.TEST_FAILED />
              <p className={s.noticeFailed}>{t('finalTestInfo.failedTest')}</p>
            </div>
          )}
          {theWorstTopic && theBestTopic && (
            <div className={objectTheme[theme].recomendationsWrapper}>
              <p className={objectTheme[theme].recText}>
                {t('finalTestInfo.recomendations')}:
              </p>
              <p className={s.recTextSmall}>
                {t('finalTestInfo.worstTopic')} {`${test}`} -
                {`${theWorstTopic}`} {t('finalTestInfo.section')}
              </p>
              <p className={s.recTextSmall}>
                {t('finalTestInfo.bestTopic')} {`${test}`} - {`${theBestTopic}`}
                {t('finalTestInfo.section')}
              </p>
            </div>
          )}
        </>
      )}
      <MainButton
        type='button'
        text={
          finishTest ? t('finalTestInfo.endTest') : t('finalTestInfo.startTest')
        }
        disabled={!finishTest && windowWidth <= 1280}
        onClick={onClickBtn}
        size='large'
        color='blue'
        className={!(theWorstTopic && theBestTopic) && finishTest ? s.btn : ''}
      />
      {!finishTest && windowWidth <= 1280 && (
        <p className={s.textWarning}>{t('finalTestInfo.warning')}</p>
      )}
    </div>
  );
};
