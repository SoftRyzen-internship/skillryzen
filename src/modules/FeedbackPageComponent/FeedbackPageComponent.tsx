import { useState } from 'react';
import s from './FeedbackPageComponent.module.scss';
import { Modal } from 'ui-kit';
import { FeedbackCongrat } from './FeedbackCongrat/FeedbackCongrat';
import { FeedbackBlock } from './FeedbackBlock/FeedbackBlock';
import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constans/types';

export const FeedbackPageComponent = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const handleClickModal = () => {
    setIsShowModal((prevState) => !prevState);
  };
  const sendFeedback = (_value: boolean) => {
    setIsShowModal(_value);
  };
  const { theme }: IThemeContext = useThemeContext();
  return (
    <>
      <div className={s.pageContainer}>
        <div className={`${s.pageWrapper} ${s[`pageWrapper--${theme}`]}`}>
          <FeedbackBlock sendFeedback={sendFeedback} />
        </div>

        {isShowModal && (
          <Modal
            isShowModal={isShowModal}
            onClick={handleClickModal}
            isCloseIcon
          >
            <FeedbackCongrat handleClickModal={handleClickModal} />
          </Modal>
        )}
      </div>
    </>
  );
};
