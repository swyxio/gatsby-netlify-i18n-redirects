import React from 'react'
import {Link} from 'gatsby'
import Layout from "../layouts/pt"

const SecondPage = (props) => (
  <Layout location={props.location}>
    <div>
      <h1>Oi da segunda página!</h1>
      <p>Bem vindo á página 2</p>
      <Link to="/pt/">Voltar pro início</Link>
    </div>
  </Layout>
)

export default SecondPage
