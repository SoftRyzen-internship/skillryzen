import { FeedbackForm } from 'modules/Forms/FeedbackForm/FeedbackForm';
import { useState } from 'react';
import { ModalFeedback } from 'ui-kit/components/ModalFeedback/ModalFeedback';
import s from './FeedbackPageComponent.module.scss';
import { useTranslation } from 'react-i18next';
import { IMAGES } from 'ui-kit/images';
import { ICONS } from 'ui-kit/icons';
import { MainButton, UserAvatarCard } from 'ui-kit';
import { Spinner } from 'ui-kit/components/Spinner/Spinner';
import { useSelector } from 'react-redux';
import { getUserEmail, getUserRole } from 'redux/authSlice/authSelectors';
import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';

export const FeedbackPageComponent = () => {
  const userEmail = useSelector(getUserEmail);
  const userRole = useSelector(getUserRole);
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();
  const [isShowModal, setIsShowModal] = useState(false);
  const handleClickModal = () => {
    setIsShowModal((prevState) => !prevState);
  };
  const updateData = (_value: boolean) => {
    setIsShowModal(_value);
  };
  const updateLoading = (_value: boolean) => {
    setIsLoading(_value);
  };
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <div className={s.pageWrapper}>
        <div className={s.groupTop}>
          <UserAvatarCard
            userName='John Doe'
            userRole={userRole}
            userAvatarUrl={IMAGES.JAVA_SCRIPT}
            userStatus='green'
            theme={theme}
          />
          <ICONS.AT_EMAIL className={s.emailIcon} />
          <p className={s.emailText}>{userEmail}</p>
        </div>
        <FeedbackForm
          updateData={updateData}
          updateLoading={updateLoading}
          userEmail={userEmail}
        />
        {isShowModal && (
          <ModalFeedback
            isShowModal={isShowModal}
            onClick={handleClickModal}
            title1={{
              text: t('feedbackModal.title1'),
              className: `${s.titleModal}`,
            }}
            title2={{
              text: t('feedbackModal.title2'),
              className: `${s.titleModal}`,
            }}
            icon={<ICONS.CROSS_SMALL />}
            button={
              <MainButton
                type='button'
                text='OK'
                onClick={handleClickModal}
                size='small'
                color='blue'
                className={s.modalBtn}
              />
            }
          />
        )}
        {isLoading && (
          <div className={s.spinner}>
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
};
