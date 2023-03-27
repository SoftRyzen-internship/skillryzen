import { useTranslation } from 'react-i18next';

import { useThemeContext } from 'context/themeContext';

import { CompanyTests } from './CompanyTests';
import { CompanyProfile } from './CompanyProfile';

import { ScrollContainer } from 'ui-kit';

import { IThemeContext } from 'constans/types';

import s from './CompanyProfilePageComponent.module.scss';

export const CompanyProfilePageComponent = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  return (
    <ScrollContainer>
      <div className={s.companyProfilePage}>
        <CompanyProfile theme={theme} />
        <CompanyTests theme={theme} />
      </div>
    </ScrollContainer>
  );
};
