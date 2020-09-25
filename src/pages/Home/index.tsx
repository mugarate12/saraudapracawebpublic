import React from 'react'

import GlobalStyle from './../../styles/global'

import Header from './../../components/Header/index'
import Apresentation from './../../containers/Apresentation/index'

export default function index() {
  return (
    <>
      <GlobalStyle />

      <Header />
      
      <h1>OLÁ</h1>
      <Apresentation />
    </>
  )
}
