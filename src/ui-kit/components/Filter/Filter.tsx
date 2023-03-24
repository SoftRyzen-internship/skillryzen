import React from 'react';
import { useTranslation } from 'react-i18next';

import { ICONS } from 'ui-kit/icons';

import s from './Filter.module.scss';

interface FilterProps {
  page?: string;
  theme: string;
  handleFilter: () => void;
  children?: React.ReactNode;
  showFilter: boolean;
}

export const Filter = React.forwardRef<HTMLDivElement, FilterProps>(
  ({ handleFilter, theme = 'dark', page, showFilter, children }, ref) => {
    const { t } = useTranslation();

    return (
      <div
        ref={ref}
        className={page === 'team' ? s.teamContainer : s.commonContainer}
      >
        <button
          onClick={handleFilter}
          className={`${s[`filter--${theme}`]} ${
            showFilter && s[`filter--active`]
          }`}
        >
          <ICONS.FILTER_TWO className={s.filter__icon} />
          <span>{t('testsMain.filter')}</span>
        </button>
        {children}
      </div>
    );
  }
);
