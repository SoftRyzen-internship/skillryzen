import { useTranslation } from 'react-i18next';

import { ICONS } from 'ui-kit/icons';
import { formatPhoneNumber } from 'utils/formatPhoneNumber';

import { Theme, UserInfo } from 'constans/types';

import { SocialList, UserAvatar } from 'ui-kit/index';
import s from './MyProfile.module.scss';
import { CompanyAvatarCard } from 'ui-kit/components/CompanyAvatarCard';

interface MyProfileProps {
  userInfo: UserInfo;
  theme?: Theme;
}

export const MyProfile = ({ userInfo, theme }: MyProfileProps) => {
  const { t } = useTranslation();
  const {
    name,
    avatarUrl,
    email,
    phone,
    location,
    social,
    company,
    groupName,
    testsAmount,
  } = userInfo;
  return (
    <div className={`${s[`container--${theme}`]}`}>
      <div>
        <p className={`${s[`title--${theme}`]}`}>
          {t('userProfile.profileCardTitle')}
        </p>
        <UserAvatar className={s.avatar} userAvatarUrl={avatarUrl} />
        <p className={`${s[`name--${theme}`]}`}>{name}</p>
      </div>

      <div>
        <p className={`${s[`titleInfo--${theme}`]}`}>
          {t('userProfile.infoTitle')}
        </p>
        <ul className={s.list}>
          <li className={s.item}>
            <a className={s.link} href={`mailto:${email}`}>
              <div className={`${s[`icon--${theme}`]}`}>
                <ICONS.AT_EMAIL />
              </div>
              <p className={`${s[`text--${theme}`]}`}>{email}</p>
            </a>
          </li>

          <li className={s.item}>
            <a className={s.link} href={`tel:${phone}`}>
              <div className={`${s[`icon--${theme}`]}`}>
                <ICONS.MESSAGE_CIRCLE />
              </div>
              <p className={`${s[`text--${theme}`]}`}>
                {formatPhoneNumber(phone)}
              </p>
            </a>
          </li>

          <li className={s.item}>
            <a
              className={s.link}
              href={`https://www.google.com.ua/maps/place/${location}`}
              target='_blank'
              rel='noreferrer noopener'
            >
              <div className={`${s[`icon--${theme}`]}`}>
                <ICONS.HOME />
              </div>
              <p className={`${s[`text--${theme}`]}`}>{location}</p>
            </a>
          </li>
        </ul>
        <SocialList social={social} theme={theme} />
      </div>
      <div>
        <div className={s.companyContainer}>
          <p className={`${s[`companyTitle--${theme}`]}`}>
            {t('userProfile.companyTitle')}
          </p>
          <CompanyAvatarCard
            companyAvatarUrl={company.avatarUrl}
            companyName={company.name}
            theme={theme}
          />
        </div>
        <div className={s.groupContainer}>
          <p className={`${s[`companyTitle--${theme}`]}`}>
            {t('userProfile.groupTitle')}
          </p>
          <p className={`${s[`label--${theme}`]}`}>{groupName}</p>
        </div>
        <div className={s.testsContainer}>
          <p className={`${s[`companyTitle--${theme}`]}`}>
            {t('userProfile.testsTitle')}
          </p>
          <p className={`${s[`label--${theme}`]}`}>{testsAmount}</p>
        </div>
      </div>
    </div>
  );
};
