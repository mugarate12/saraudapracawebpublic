import React from 'react'

import GlobalStyle from './../../styles/global'

import Header from './../../components/Header/index'
import Apresentation from './../../containers/Apresentation/index'
import Input from './../../components/Input/index'
import PaperAndPen from './../../components/PaperAndPen/index'

export default function index() {
  return (
    <>
      <GlobalStyle />

      <Header />
      
      <h1>OLÁ</h1>
      <Apresentation />

      <PaperAndPen />

      <Input onChange={() => {}}/>
    </> 
  )
}
