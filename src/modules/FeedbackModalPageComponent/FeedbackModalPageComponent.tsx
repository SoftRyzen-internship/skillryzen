import { useState } from 'react';
import s from './FeedbackModalPage.module.scss';
import { FeedbackBlock } from 'modules/FeedbackPageComponent/FeedbackBlock/FeedbackBlock';
import { FeedbackCongrat } from 'modules/FeedbackPageComponent/FeedbackCongrat/FeedbackCongrat';
import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constants/types';

interface FeedbackModalPageProps {
  handleClickModal: () => void;
}

export const FeedbackModalPageComponent = ({
  handleClickModal,
}: FeedbackModalPageProps) => {
  const { theme }: IThemeContext = useThemeContext();
  const sendFeedback = (_value: boolean) => {
    setIsSendFeedback(_value);
  };
  const [isSendFeedback, setIsSendFeedback] = useState(false);
  return (
    <div className={`${s.pageWrapper} ${s[`pageWrapper--${theme}`]}`}>
      {!isSendFeedback ? (
        <FeedbackBlock sendFeedback={sendFeedback} />
      ) : (
        <FeedbackCongrat handleClickModal={handleClickModal} />
      )}
    </div>
  );
};
