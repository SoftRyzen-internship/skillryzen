import { InvaiteStudentBlock } from './InvaiteStudentBlock';

import { Breadcrumbs, Tabs } from 'ui-kit/index';

import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';

import s from './InviteModulePageComponent.module.scss';

export const InviteModulePageComponent = () => {
  const { theme }: IThemeContext = useThemeContext();

  return (
    <div className={`${s.wrapper} ${s[`wrapper--${theme}`]}`}>
      <Breadcrumbs />
      <h2 className={`${s.title} ${s[`title--${theme}`]}`}>Invite module</h2>
      <Tabs
        tabs={[
          { title: 'Запрошення студента' },
          { title: 'Запрошення адміна' },
        ]}
        theme={theme}
      />
      <InvaiteStudentBlock />
    </div>
  );
};
