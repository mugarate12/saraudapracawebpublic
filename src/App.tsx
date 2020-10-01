import React, { Suspense, lazy } from 'react'

import Loading from './pages/Loading/index'

const Home = lazy(() => import('./pages/Home/index'))

export default function App() {
  return (
    <Suspense fallback={Loading}>
      <Home />
    </Suspense>
  )
}
