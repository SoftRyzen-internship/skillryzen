import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useThemeContext } from 'context/themeContext';
import { useAppSelector, useCurrentWidth } from 'hooks';
import { getTemplateId } from 'redux/testingInfo/testingInfoSelectors';
import { IThemeContext } from 'constants/types';
import { ICONS } from 'ui-kit/icons';
import { MainButton, Modal } from 'ui-kit';
import { ModalStartTest } from 'modules/Modals/ModalStartTest/ModalStartTest';

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
  percentageToPass?: number;
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
  timeSpent?: string | number;
  isPassed?: boolean;
  iconAnswers?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  iconTime?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  iconDate?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  theWorstTopic?: string;
  theBestTopic?: string;
  onClickBtn?: () => void;
  textBtn?: string;
  finishTest?: boolean;
  test?: string;
  date?: string;
  modal?: boolean;
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
  iconDate: IconDate,
  theWorstTopic,
  theBestTopic,
  onClickBtn,
  finishTest,
  test,
  date,
  modal,
}: Props) => {
  const { t } = useTranslation();
  const { theme }: IThemeContext = useThemeContext();
  const { alt, width, height } = imageProps;

  const templateId = useAppSelector(getTemplateId);

  const [isModal, setIsModal] = useState(false);
  const currentWidth = useCurrentWidth();

  const handleClickModal = () => {
    setIsModal(prevState => !prevState);
  };

  return (
    <div
      className={`${finishTest && !modal && s.containerFinish} ${
        !finishTest && s.containerStart
      } ${modal && s.containerModal}`}
    >
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
            <p className={objectTheme[theme].textRight}>
              {listInfo.topics && listInfo.topics.join(', ')}
            </p>
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
              {listInfo.time / 60000} {t('testsMain.time')}
            </p>
          </li>
          <li className={s.item}>
            <div className={s.iconWrapper}>
              <div className={objectTheme[theme].iconThumb}>
                <listInfo.icons.PERCENTAGE
                  className={objectTheme[theme].icon}
                />
              </div>
              <p className={objectTheme[theme].text}>
                {t('finalTestInfo.list.percentageToPass')}
              </p>
            </div>
            <p className={objectTheme[theme].textRight}>
              {`${listInfo.percentageToPass * 100}%`}
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
              <p className={objectTheme[theme].textRight}>{`${timeSpent}`}</p>
            </li>
            <li className={s.item}>
              <div className={s.iconWrapper}>
                <div className={objectTheme[theme].iconThumb}>
                  <IconDate className={objectTheme[theme].icon} />
                </div>
                <p className={objectTheme[theme].text}>
                  {t('finalTestInfo.date')}
                </p>
              </div>
              <p className={objectTheme[theme].textRight}>{date}</p>
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
                {t('finalTestInfo.subListRecommendations')}:
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
      {!modal && (
        <MainButton
          type='button'
          text={
            finishTest
              ? t('finalTestInfo.endTest')
              : t('finalTestInfo.startTest')
          }
          disabled={
            (!finishTest && !templateId) ||
            (!finishTest && currentWidth <= 1023)
          }
          onClick={!finishTest ? handleClickModal : onClickBtn}
          size='large'
          color='blue'
          className={finishTest ? s.btnFinish : s.btn}
        />
      )}
      {!finishTest && currentWidth < 1023 && (
        <p className={s.textWarning}>{t('finalTestInfo.warning')}</p>
      )}
      {isModal && (
        <Modal isShowModal={isModal} onClick={handleClickModal} isCloseIcon>
          <ModalStartTest />
        </Modal>
      )}
    </div>
  );
};
