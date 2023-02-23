import { Layout } from '@modules/dashboard/components/Layout/Layout'
import AppRoutes from './routes'
import './theme/styles/global.scss'
import './theme/styles/variables.scss'

export const App: React.FC = () => {
  return (
    <>
      <Layout>
        <AppRoutes />
      </Layout>
    </>
  )
}

