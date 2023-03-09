import { Theme } from 'constans/types';
import { NavLink } from 'react-router-dom';

import s from './Tabs.module.scss';

interface TabProps {
  tabs: string[];
  currentTab?:string;
  changeTab?:(tab:string)=>void;
  theme?: Theme;
}

export const Tabs = ({ tabs, currentTab,changeTab,theme = 'dark' }: TabProps) => {
  return (
    <ul className={s.tabsList}>
      {tabs.map((el) => {
        return (
          <li className={currentTab === el ? `${s.tabsItemActive} ${s[`tabsItemActive--${theme}`]}` : `${s.tabsItem} ${s[`tabsItem--${theme}`]}`} key={el} onClick={()=>changeTab(el)}>
            {el}
          </li>
        );
      })}
    </ul>
  );
};
