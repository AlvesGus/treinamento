import { BrowserRouter } from 'react-router-dom'
import { RouterApp } from './routes/routes'

export function App() {
  return (
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  )
}
