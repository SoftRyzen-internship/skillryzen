import { useState } from 'react';

import { IThemeContext } from 'constants/types';
import { useThemeContext } from 'context/themeContext';
import { Breadcrumbs, Modal, ScrollContainer } from 'ui-kit';

import { FeedbackCongrat } from './FeedbackCongrat/FeedbackCongrat';
import { FeedbackBlockPage } from './FeedbackBlockPage/FeedbackBlockPage';

import s from './FeedbackPageComponent.module.scss';

export const FeedbackPageComponent = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const handleClickModal = () => {
    setIsShowModal(prevState => !prevState);
  };
  const sendFeedback = (_value: boolean) => {
    setIsShowModal(_value);
  };
  const { theme }: IThemeContext = useThemeContext();
  return (
    <>
      <ScrollContainer>
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
      </ScrollContainer>
    </>
  );
};
