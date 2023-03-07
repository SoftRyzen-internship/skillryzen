import { useTranslation } from 'react-i18next';

import { ICONS } from 'ui-kit/icons';

import { formatPhoneNumber } from 'utils/formatPhoneNumber';

import { Theme, UserInfo } from 'modules/common/types';

import s from './MyInfo.module.scss';

interface MyInfoProps {
  userInfo: UserInfo;
  theme?: Theme;
}

export const MyInfo = ({ userInfo, theme }: MyInfoProps) => {
  const { t } = useTranslation();
  const { email, phone, location } = userInfo;
  return (
    <div className={`${s[`container--${theme}`]}`}>
      <p className={`${s[`title--${theme}`]}`}>{t('userProfile.infoTitle')}</p>
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
    </div>
  );
};
