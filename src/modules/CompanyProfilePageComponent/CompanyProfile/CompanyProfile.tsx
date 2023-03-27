import { useTranslation } from 'react-i18next';

import { formatPhoneNumber } from 'utils/formatPhoneNumber';

import { IMAGES } from 'ui-kit/images';
import { ICONS } from 'ui-kit/icons';
import { SocialList } from 'ui-kit/index';

import { Theme, UserSocial } from 'constans/types';

import s from './CompanyProfile.module.scss';

interface CompanyProfileProps {
  theme?: Theme;
}

const COMPANY_INFO = {
  name: 'GOIT',
  email: 'test@test.com',
  phone: '+380501234567',
  location: 'Ukraine',
  avatarUrl: IMAGES.GOIT_AVATAR,
  description:
    'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
  admins: 2,
  tests: 1,
  students: 260,
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

export const CompanyProfile = ({ theme = 'dark' }: CompanyProfileProps) => {
  const { t } = useTranslation();

  const {
    name,
    email,
    avatarUrl,
    description,
    phone,
    location,
    admins,
    tests,
    students,
  } = COMPANY_INFO;
  return (
    <div className={`${s.container} ${s[`container--${theme}`]}`}>
      <div>
        <p className={`${s.title} ${s[`title--${theme}`]}`}>
          {t('companyProfile.profileCardTitle')}
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
        <p className={`${s.titleAbout} ${s[`titleAbout--${theme}`]}`}>
          {t('companyProfile.aboutTitle')}
        </p>
        <p className={`${s.textAbout} ${s[`textAbout--${theme}`]}`}>
          {description}
        </p>
      </div>

      <div>
        <p className={`${s.titleInfo} ${s[`titleInfo--${theme}`]}`}>
          {t('companyProfile.infoTitle')}
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
        <div className={s.adminsContainer}>
          <p className={`${s.entityTitle} ${s[`entityTitle--${theme}`]}`}>
            {t('companyProfile.adminsTitle')}
          </p>
          <p className={`${s.label} ${s[`label--${theme}`]}`}>{admins}</p>
        </div>

        <div className={s.testsContainer}>
          <p className={`${s.entityTitle} ${s[`entityTitle--${theme}`]}`}>
            {t('companyProfile.testsTitle')}
          </p>
          <p className={`${s.label} ${s[`label--${theme}`]}`}>{tests}</p>
        </div>

        <div className={s.studentsContainer}>
          <p className={`${s.entityTitle} ${s[`entityTitle--${theme}`]}`}>
            {t('companyProfile.studentsTitle')}
          </p>
          <p className={`${s.label} ${s[`label--${theme}`]}`}>{students}</p>
        </div>
      </div>
    </div>
  );
};
