# щоб скористуватись компонентом Menu , треба передати масив об'єктів, інтерфейс об'єкту: 

{
  title: string - назва вашої менюшки;
  icon: string - посилання на іконку;
  iconAlt: - string підпис іконки;
  path: - string шлях, куди буде вести посилання;
}

# приклад:

import { Menu } from './UIDesign/Menu/Menu'

const menu = [
  {
    title: 'Dashboard',
    icon: 'someicon.svg',
    iconAlt: 'someicon',
    path: '/tests',
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

<!-- <Menu menu={menu}/> -->