import { useState } from 'react';

import { ICONS } from 'ui-kit/icons';
import { UserAvatarCard } from 'ui-kit';
import { Spinner } from 'ui-kit/components/Spinner/Spinner';

import {
  getIsAuth,
  getUserEmail,
  getUserName,
  getUserRole,
} from 'redux/authSlice/authSelectors';
import { useAppSelector } from 'hooks';
import { IThemeContext } from 'constans/types';
import { randomAvatar } from 'utils/randomAvatar';
import { useThemeContext } from 'context/themeContext';
import { FeedbackForm } from 'modules/Forms/FeedbackForm/FeedbackForm';

import s from './FeedbackBlock.module.scss';

interface FeedbackBlockProps {
  sendFeedback?: (_value: boolean) => void;
}
export const FeedbackBlock = ({ sendFeedback }: FeedbackBlockProps) => {
  const userEmail = useAppSelector(getUserEmail);
  const userRole = useAppSelector(getUserRole);
  const userName = useAppSelector(getUserName);
  const { theme }: IThemeContext = useThemeContext();
  const isAuth = useAppSelector(getIsAuth);
  const updateLoading = (_value: boolean) => {
    setIsLoading(_value);
  };
  const [isLoading, setIsLoading] = useState(false);
  const [avatar] = useState(randomAvatar());
  const [sheetName] = useState('SKILLRYZEN-MVP1');
  return (
    <>
      <div className={s.container}>
        <div className={s.groupTop}>
          <UserAvatarCard
            userName={userName}
            userRole=''
            userAvatarUrl={avatar}
            userStatus={isAuth ? 'green' : 'gray'}
            theme={theme}
          />
          <ICONS.AT_EMAIL className={s.emailIcon} />
          <p className={s.emailText}>{userEmail}</p>
        </div>
        <FeedbackForm
          updateLoading={updateLoading}
          userEmail={userEmail}
          userName={userName}
          userRole={userRole}
          sendFeedback={sendFeedback}
          sheetName={sheetName}
        />
        {isLoading && (
          <div className={s.spinner}>
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
};
