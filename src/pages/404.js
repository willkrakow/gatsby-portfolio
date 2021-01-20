import React from 'react'
import Layout from '../components/layout'
import { PageBanner } from '../components/containers'
import { faDizzy } from '@fortawesome/free-solid-svg-icons'
const ErrorPage = () => (
  <Layout>
      <PageBanner title="Whoops" subtitle="There's nothing to see here. Sorry about that :(" icon={faDizzy} />
      </Layout>
)

export default ErrorPage