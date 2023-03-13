import { memo } from 'react';

import { Theme } from 'constans/types';

import s from './CompanyAvatarCard.module.scss';
interface CompanyAvatarCardProps {
  companyName: string;
  companyAvatarUrl: string;
  className?: string;
  theme?: Theme;
}
export const CompanyAvatarCardComponent = ({
  companyName,
  companyAvatarUrl,
  className = '',
  theme = 'dark',
}: CompanyAvatarCardProps) => {
  return (
    <div className={`${s.card} ${className}`}>
      <img
        className={s.avatar}
        src={companyAvatarUrl}
        width={52}
        height={52}
        alt='company-avatar'
      />
      <p className={`${s[`name--${theme}`]}`}>{companyName}</p>
    </div>
  );
};

export const CompanyAvatarCard = memo(CompanyAvatarCardComponent);
