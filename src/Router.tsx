import { DefaultLayout } from './layouts/DefaultLayout'
import { Routes, Route } from 'react-router-dom'
import { Delivery } from './pages/Delivery'
import { Payment } from './pages/Payment'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/delivery" element={<Delivery />} />
      </Route>
    </Routes>
  )
}
