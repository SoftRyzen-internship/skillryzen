import { useCallback } from 'react';

import { Input, CopyButton } from 'ui-kit';
import { ICONS } from 'ui-kit/icons';

import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';

import { copyToClipboard } from 'utils/copyToClipboard';

import s from './InviteByLinkBlock.module.scss';

export const InviteByLinkBlock = () => {
  const { theme }: IThemeContext = useThemeContext();
  const link = 'google.com';
  const code = '12345';

  const copyLink = useCallback(() => copyToClipboard(link), [link]);

  return (
    <div className={`${s.wrapper} ${s[`wrapper--${theme}`]}`}>
      <h3 className={s.title}>Invite by link</h3>
      <p className={s.description}>
        JavaScript is a programming language that is one of the core
        technologies of the World Wide Web, alongside HTML and CSS.{' '}
      </p>
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
          Код для доступу <ICONS.ASTERIX />
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
        <p>Завантажити QR code</p>
      </div>
    </div>
  );
};
