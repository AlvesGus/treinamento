import {
  LayoutDashboard,
  Package,
  PackagePlus,
  Truck,
  UserPlus
} from 'lucide-react'

export const sidebarMenu = [
  {
    id: 1,
    description: 'Painel',
    icon: <LayoutDashboard />,
    redirect: '/'
  },
  {
    id: 2,
    description: 'Empresas Parceiras',
    icon: <Package />,
    redirect: '/customers'
  },
  {
    id: 3,
    description: 'Colaboradores',
    icon: <UserPlus />,
    redirect: '/employeers'
  },
  {
    id: 4,
    description: 'Corridas',
    icon: <Truck />,
    redirect: '/routes'
  }
]

export const cardsContent = [
  {
    id: 1,
    description: 'Empresas Parceiras',
    icon: <PackagePlus size={48} />,
    content: 'Adicione e gerencie suas empresas parceiras',
    url: '/customers'
  },
  {
    id: 2,
    description: 'Colaboradores',
    icon: <UserPlus size={48} />,
    content: 'Adicione e gerencie seus colaboradores',
    url: '/employeers'
  },
  {
    id: 3,
    description: 'Corridas',
    icon: <Truck size={48} />,
    content: 'Veja o histórico de corridas realizadas',
    url: '/routes'
  }
]
