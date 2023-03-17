import { Theme } from 'constans/types';
import { useTranslation } from 'react-i18next';

import s from './Tabs.module.scss';

interface Props {
  size?: 'large' | 'small'; 
  key?: number
}

interface Tabs {
  id: number;
  name: string;
  component: string | JSX.Element | ((props: Props) => JSX.Element);
}

interface TabProps {
  tabs: Tabs[];
  currentTab?: number;
  changeTab?: (tab: number) => void;
  theme?: Theme;
}

export const Tabs = ({
  tabs,
  currentTab,
  changeTab,
  theme = 'dark',
}: TabProps) => {
  const { t } = useTranslation();
  return (
    <ul className={s.tabsList}>
      {tabs.map(el => {
        return (
          <li
            className={
              currentTab === el.id
                ? `${s.tabsItemActive} ${s[`tabsItemActive--${theme}`]}`
                : `${s.tabsItem} ${s[`tabsItem--${theme}`]}`
            }
            key={el.id}
            onClick={() => changeTab(el.id)}
          >
            {t(el.name)}
          </li>
        );
      })}
    </ul>
  );
};
