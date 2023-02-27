import { Suspense } from 'react'

import { Layout } from '@modules/dashboard'
import { AppRoutes } from './routes'

import './theme/styles/global.scss'
import './theme/styles/variables.scss'

import { SideBar } from '@ui-kit/SideBar/SideBar'

export const App: React.FC = () => {
  return (
    <>
      <Layout>
        <SideBar/>
        <Suspense fallback={<p>Loading..</p>}>
          <AppRoutes />
        </Suspense>
      </Layout>
    </>
  )
}
