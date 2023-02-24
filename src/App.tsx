import { Suspense } from 'react'

import { Layout } from '@modules/dashboard'
import { AppRoutes } from './routes'

import './theme/styles/global.scss'
import './theme/styles/variables.scss'

import { Menu } from './UIDesign/Menu/Menu'

const menu = [
  {title: 'Dashboard',
  id: '1',
  icon: '',
  to: '/'
},
{title: 'Dashboard',
  id: '1',
  icon: '',
  to: '/route'
}
]

export const App: React.FC = () => {
  return (
    <>
      <Layout>
        <Menu menu={menu}/>
        <AppRoutes />
        <Suspense fallback={<p>Loading..</p>}>
          <AppRoutes />
        </Suspense>
      </Layout>
    </>
  )
}
