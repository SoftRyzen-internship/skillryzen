import { useTranslation } from 'react-i18next';

import { formatPhoneNumber } from 'utils/formatPhoneNumber';

import { useAppSelector } from 'hooks';
import { getUserEmail, getUserName } from 'redux/authSlice/authSelectors';

import { IMAGES } from 'ui-kit/images';
import { ICONS } from 'ui-kit/icons';
import { SocialList } from 'ui-kit/index';

import { CompanyAvatarCard } from './CompanyAvatarCard';

import { Theme, UserSocial } from 'constans/types';

import s from './UserProfile.module.scss';

interface UserProfileProps {
  theme?: Theme;
}

const USER_INFO = {
  name: 'Maksim Kozlov',
  email: 'test@test.com',
  phone: '+38 - - - - - - - - - -',
  location: 'Ukraine',
  avatarUrl: IMAGES.BLUE_AVATAR,
  groupName: 'null',
  testsAmount: 0,
};

const USER_SOCIAL: UserSocial[] = [
  {
    name: 'telegram',
    url: 'https://web.telegram.org/',
  },

  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/',
  },
  // {
  //   name: 'github',
  //   url: 'https://github.com/',
  // },
  // {
  //   name: 'discord',
  //   url: 'https://discord.com/',
  // },
  // {
  //   name: 'behance',
  //   url: 'https://www.behance.net/',
  // },
  // {
  //   name: 'dribble',
  //   url: 'https://dribbble.com/',
  // },
];

const USER_COMPANY = {
  name: 'GoIT',
  avatarUrl: IMAGES.GOIT_AVATAR,
};

export const UserProfile = ({ theme = 'dark' }: UserProfileProps) => {
  const { t } = useTranslation();
  const name = useAppSelector(getUserName);
  const email = useAppSelector(getUserEmail);

  const { avatarUrl, phone, location, groupName, testsAmount } = USER_INFO;
  return (
    <div className={`${s.container} ${s[`container--${theme}`]}`}>
      <div>
        <p className={`${s.title} ${s[`title--${theme}`]}`}>
          {t('userProfile.profileCardTitle')}
        </p>
        <img
          className={s.avatar}
          src={avatarUrl}
          width={120}
          height={120}
          alt='avatar'
        />

        <p className={`${s.name} ${s[`name--${theme}`]}`}>{name}</p>
      </div>

      <div>
        <p className={`${s.titleInfo} ${s[`titleInfo--${theme}`]}`}>
          {t('userProfile.infoTitle')}
        </p>
        <ul className={s.list}>
          <li className={s.item}>
            <a className={s.link} href={`mailto:${email}`}>
              <div className={`${s.icon} ${s[`icon--${theme}`]}`}>
                <ICONS.AT_EMAIL />
              </div>
              <p className={`${s.text} ${s[`text--${theme}`]}`}>{email}</p>
            </a>
          </li>

          <li className={s.item}>
            <a className={s.link} href={`tel:${phone}`}>
              <div className={`${s.icon} ${s[`icon--${theme}`]}`}>
                <ICONS.MESSAGE_CIRCLE />
              </div>
              <p className={`${s.text} ${s[`text--${theme}`]}`}>
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
              <div className={`${s.icon} ${s[`icon--${theme}`]}`}>
                <ICONS.HOME />
              </div>
              <p className={`${s.text} ${s[`text--${theme}`]}`}>{location}</p>
            </a>
          </li>
        </ul>
        <SocialList social={USER_SOCIAL} theme={theme} />
      </div>
      <div>
        <div className={s.companyContainer}>
          <p className={`${s.companyTitle} ${s[`companyTitle--${theme}`]}`}>
            {t('userProfile.companyTitle')}
          </p>
          <CompanyAvatarCard
            companyAvatarUrl={USER_COMPANY.avatarUrl}
            companyName={USER_COMPANY.name}
            theme={theme}
          />
        </div>
        <div className={s.groupContainer}>
          <p className={`${s.companyTitle} ${s[`companyTitle--${theme}`]}`}>
            {t('userProfile.groupTitle')}
          </p>
          <p className={`${s.label} ${s[`label--${theme}`]}`}>{groupName}</p>
        </div>
        <div className={s.testsContainer}>
          <p className={`${s.companyTitle} ${s[`companyTitle--${theme}`]}`}>
            {t('userProfile.testsTitle')}
          </p>
          <p className={`${s.label} ${s[`label--${theme}`]}`}>{testsAmount}</p>
        </div>
      </div>
    </div>
  );
};
