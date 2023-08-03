import { useTranslation } from 'react-i18next';

import { useThemeContext } from 'context/themeContext';

import { ScrollContainer } from 'ui-kit';

import { IThemeContext } from 'constants/types';

import s from './CompanySettingsPageComponent.module.scss';

export const CompanySettingsPageComponent = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  return (
    <ScrollContainer>
      <div className={s.companySettingsPage}>Company settings page</div>
    </ScrollContainer>
  );
};
