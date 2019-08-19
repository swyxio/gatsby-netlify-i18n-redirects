import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layouts/en'

const IndexPage = (props) => (
  <Layout location={props.location}>
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/en/page-2/">Go to page 2</Link>
    </div>
  </Layout>
)

export default IndexPage
