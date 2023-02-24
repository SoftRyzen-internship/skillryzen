# щоб скористуватись компонентом Menu , треба передати масив об'єктів, інтерфейс об'єкту: 

{
  title: string - назва вашої менюшки;
  icon: string - посилання на іконку;
  iconWidth: - string ширина іконки;
  iconHeight: - string висота іконки;
  iconAlt: - string підпис іконки;
  path: - string шлях, куди буде вести посилання;
}

# приклад:

import { Menu } from './UIDesign/Menu/Menu'

const menu = [
  {
    title: 'Dashboard',
    icon: 'someicon.svg',
    iconWidth: '24',
    iconHeight: '24',
    iconAlt: 'someicon'
    to: '/'
  },
  {
    title: 'Statistics',
    icon: 'someicon.svg',
    iconWidth: '24',
    iconHeight: '24',
    iconAlt: 'someicon'
    to: '/route'
  }
]

<!-- <Menu menu={menu}/> -->