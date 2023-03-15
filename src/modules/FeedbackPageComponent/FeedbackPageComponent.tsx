import { useState } from 'react';
import s from './FeedbackPageComponent.module.scss';
import { Breadcrumbs, Modal } from 'ui-kit';
import { FeedbackCongrat } from './FeedbackCongrat/FeedbackCongrat';
import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constans/types';
import { FeedbackBlockPage } from './FeedbackBlockPage/FeedbackBlockPage';

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
        <Breadcrumbs />
        <div className={`${s.pageWrapper} ${s[`pageWrapper--${theme}`]}`}>
          <FeedbackBlockPage sendFeedback={sendFeedback} />
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
