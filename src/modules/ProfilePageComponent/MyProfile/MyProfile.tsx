import { useTranslation } from 'react-i18next';

import { IMAGES } from 'ui-kit/images';
import { ICONS } from 'ui-kit/icons';
import { formatPhoneNumber } from 'utils/formatPhoneNumber';

import { Theme, UserSocial } from 'constans/types';

import { SocialList, UserAvatar } from 'ui-kit/index';
import s from './MyProfile.module.scss';
import { CompanyAvatarCard } from 'ui-kit/components/CompanyAvatarCard';

interface MyProfileProps {
  theme?: Theme;
}

const USER_INFO = {
  name: 'Maksim Kozlov',
  email: 'test@test.com',
  phone: '+380501234567',
  location: 'Ukraine',
  avatarUrl: IMAGES.BLUE_AVATAR,
  groupName: 'JS48',
  testsAmount: 3,
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
  {
    name: 'github',
    url: 'https://github.com/',
  },
  {
    name: 'discord',
    url: 'https://discord.com/',
  },
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

export const MyProfile = ({ theme = 'dark' }: MyProfileProps) => {
  const { t } = useTranslation();
  const { name, avatarUrl, email, phone, location, groupName, testsAmount } =
    USER_INFO;
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
        <SocialList social={USER_SOCIAL} theme={theme} />
      </div>
      <div>
        <div className={s.companyContainer}>
          <p className={`${s[`companyTitle--${theme}`]}`}>
            {t('userProfile.companyTitle')}
          </p>
          <CompanyAvatarCard
            companyAvatarUrl={USER_COMPANY.avatarUrl}
            companyName={USER_COMPANY.name}
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
