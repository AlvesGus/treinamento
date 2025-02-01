import { Head } from '@/components/head'
import { Header } from '@/components/header'
import { Admin } from '@/pages/admin'
import { Customers } from '@/pages/customers'
import { Employeers } from '@/pages/employeers'
import { Login } from '@/pages/login'
import { Route, Routes } from 'react-router'

export function RouterApp() {
  const pathName = window.location.pathname

  return (
    <div className="w-full h-screen flex">
      {pathName !== '/login' && <Header />}

      <div className="w-full pl-10">
        {pathName !== '/login' && <Head />}
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/employeers" element={<Employeers />} />
        </Routes>
      </div>
    </div>
  )
}
