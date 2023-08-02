import { useAdaptiveSideBarContext } from 'context/adaptiveSideBarContext';
import { ICONS } from 'ui-kit/icons';

import s from './MenuIcon.module.scss';

export const MenuIcon = () => {
  const { showSideBar, setShowSideBar } = useAdaptiveSideBarContext();
  return (
    <button
      id='sidebar-open-button'
      onClick={() => setShowSideBar(!showSideBar)}
    >
      <ICONS.BROCKEN_MENU className={showSideBar ? s.active : s.icon} />
    </button>
  );
};
