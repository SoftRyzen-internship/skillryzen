import { useAdavtipeSideBarContext } from 'context/adavtipeSideBarContext';
import { ICONS } from 'ui-kit/icons';

import s from './MenuIcon.module.scss';

export const MenuIcon = () => {
  const { showSideBar, setShowSideBar } = useAdavtipeSideBarContext();
  return (
    <button
      id='sidebar-open-button'
      onClick={() => setShowSideBar(!showSideBar)}
    >
      <ICONS.BROCKEN_MENU
        className={showSideBar ? s.active : s.icon}
      />
    </button>
  );
};
