import { FeedbackForm } from 'modules/Forms/FeedbackForm/FeedbackForm';
import { useState } from 'react';
import s from './FeedbackBlockPage.module.scss';
import { ICONS } from 'ui-kit/icons';
import { UserAvatarCard } from 'ui-kit';
import { Spinner } from 'ui-kit/components/Spinner/Spinner';
import {
  getIsAuth,
  getUserEmail,
  getUserName,
  getUserRole,
} from 'redux/authSlice/authSelectors';
import { IThemeContext } from 'constants/types';
import { useThemeContext } from 'context/themeContext';
import { randomAvatar } from 'utils/randomAvatar';
import { useAppSelector } from 'hooks';
interface FeedbackBlockProps {
  sendFeedback?: (_value: boolean) => void;
}
export const FeedbackBlockPage = ({ sendFeedback }: FeedbackBlockProps) => {
  const userEmail = useAppSelector(getUserEmail);
  const userRole = useAppSelector(getUserRole);
  const userName = useAppSelector(getUserName);
  const isAuth = useAppSelector(getIsAuth);
  const { theme }: IThemeContext = useThemeContext();

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
          <div className={s.groupEmail}>
            <ICONS.AT_EMAIL className={s.emailIcon} />
            <p className={s.emailText}>{userEmail}</p>
          </div>
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
