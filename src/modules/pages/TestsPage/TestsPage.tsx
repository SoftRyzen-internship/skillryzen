
import { Menu } from '../../../ui-kit/Menu/Menu';
import { SideBar } from '../../../ui-kit/SideBar/SideBar';

const menu = [
  {
    title: 'Dashboard',
    icon: 'someicon.svg',
    iconAlt: 'someicon',
    path: '/',
  },
  {
    title: 'Certification',
    icon: 'someicon.svg',
    iconAlt: 'someicon',
    path: '/router',
  },
  {
    title: 'Petprojects',
    icon: 'someicon.svg',
    iconAlt: 'someicon',
    path: '/routea',
  },
  {
    title: 'Leaderboard',
    icon: 'someicon.svg',
    iconAlt: 'someicon',
    path: '/routed',
  },
  {
    title: 'Vacancies',
    icon: 'someicon.svg',
    iconAlt: 'someicon',
    path: '/routes',
  },
]

const userMenu = [
  {
    title: 'Profile',
    icon: 'someicon.svg',
    iconAlt: 'someicon',
    path: '/routesa',
  },
  {
    title: 'Settings',
    icon: 'someicon.svg',
    iconAlt: 'someicon',
    path: '/routesg',
  },
  {
    title: 'Feedback',
    icon: 'someicon.svg',
    iconAlt: 'someicon',
    path: '/routese',
  },
]

const TestsPage = () => {
  return <div>
            <SideBar children={[<Menu menu={menu}/>, <Menu menu={userMenu}/>]}/>
          </div>;
};

export default TestsPage;
