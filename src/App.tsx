import { Layout } from '@modules/dashboard/components/Layout/Layout'
import AppRoutes from './routes'
import './theme/styles/global.scss'
import './theme/styles/variables.scss'
import { Tabs } from './UIDesign/Tabs/Tabs'

const props = {
  firstTab: 'All tests',
  secondTab: 'My tests'
}

export const App: React.FC = () => {
  return (
    <>
      <Layout>
        <AppRoutes />
        <Tabs props={props}/>
      </Layout>
    </>
  )
}

