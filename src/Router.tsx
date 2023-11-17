import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/home'
import { DetailsPowerPlant } from './pages/DetailsPowerPlant'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/:id" element={<DetailsPowerPlant />} />
    </Routes>
  )
}
