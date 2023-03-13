import { FeedbackForm } from 'modules/Forms/FeedbackForm/FeedbackForm';
import { useState } from 'react';
import s from './FeedbackBlock.module.scss';
import { ICONS } from 'ui-kit/icons';
import { UserAvatarCard } from 'ui-kit';
import { Spinner } from 'ui-kit/components/Spinner/Spinner';
import { useSelector } from 'react-redux';
import {
  getUserEmail,
  getUserName,
  getUserRole,
} from 'redux/authSlice/authSelectors';
import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';
import { randomName } from 'utils/randomName';
import { randomAvatar } from 'utils/randomAvatar';
interface FeedbackBlockProps {
  sendFeedback?: (_value: boolean) => void;
}
export const FeedbackBlock = ({ sendFeedback }: FeedbackBlockProps) => {
  const userEmail = useSelector(getUserEmail);
  const userRole = useSelector(getUserRole);
  const userName = useSelector(getUserName);
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
            userRole={userRole}
            userAvatarUrl={avatar}
            userStatus='green'
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
