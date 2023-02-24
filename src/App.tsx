import { Suspense } from 'react'

import { Layout } from '@modules/dashboard'
import { AppRoutes } from './routes'

import './theme/styles/global.scss'
import './theme/styles/variables.scss'

import { Tabs } from './ui-kit'

const tabs = [
  {
    title: 'smth',
    path: '/route'
  },
  {
    title: 'else',
    path: '/'
  }
]

export const App: React.FC = () => {
  return (
    <>
      <Layout>
        <Tabs tabs={tabs}/>
        <AppRoutes />
        <Suspense fallback={<p>Loading..</p>}>
          <AppRoutes />
        </Suspense>
      </Layout>
    </>
  )
}
