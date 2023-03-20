import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ICONS } from 'ui-kit/icons';
import { Input, CopyButton } from 'ui-kit';

import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';

import { copyToClipboard } from 'utils/copyToClipboard';

import s from './InviteByLink.module.scss';

interface Props {
  userType: string;
}

export const InviteByLink = ({ userType }: Props) => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  const link = 'youtube.com';
  const code = '12345';

  const copyLink = useCallback(() => copyToClipboard(link), [link]);

  return (
    <div
      className={`${s.wrapper} ${s[`wrapper--${userType}`]} ${
        s[`wrapper--${theme}`]
      }`}
    >
      <h3 className={s.title}>{t('invite.invite.link')}</h3>
      <p className={s.description}>{t('invite.description')}</p>
      <div className={s.linkWrapper}>
        <Input
          className={`${s.input} ${s[`input--${theme}`]}`}
          name='link'
          placeholder='Lorem lorem'
          value={link}
          readOnly={true}
          theme={theme}
        />
        <CopyButton onClick={copyLink} />
      </div>
      <div className={s.codeWrapper}>
        <h4 className={s.subTitle}>
          {t('invite.acces.code')} <ICONS.ASTERIX />
        </h4>
        <Input
          className={`${s.input} ${s[`input--${theme}`]}`}
          name='link'
          placeholder='Lorem lorem'
          value={code}
          readOnly={true}
          theme={theme}
        />
      </div>
      <div className={s.qrCodeWrapper}>
        <ICONS.DOWNLOAD />
        <p>{t('invite.download.button')}</p>
      </div>
    </div>
  );
};
