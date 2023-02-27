# даний компонент приймає такі Props:

# 1) children: Масив React компонентів
        children={[<Menu menu={menu}/>, <Menu menu={userMenu}/>]};
# 2) spaceBetween: необов'язковий props, визначає відстань між елементами масиву, якщо це портібно, приймає string
        spaceBetween='388px';

# також для правильного рендерингу компонентів потрібно створити хук useContext();

import { createContext, useContext} from 'react';

export const SideBarContext = createContext(null);
export const UseSideBarContext = () => useContext(SideBarContext);

# та зробити правильний імпорт в ваші компоненти

# це в батьківський елемент (SideBar)
import { SideBarContext } from 'pathToThisHook';
# це в елемент children (Menu)
import { UseSideBarContext } from 'pathToThisHook';