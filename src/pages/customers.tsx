import { useEffect, useState } from 'react'
import { UserDataTable } from '@/components/DataTable/user-datatable'

async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return response.json()
}

export function Customers() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const fetchedUsers = await fetchUsers()
        setUsers(fetchedUsers)
      } catch {
        console.log('erro')
      }
    }
    loadUsers()
  }, [])

  return (
    <div className="pt-[60px]">
      <UserDataTable users={users} />
    </div>
  )
}
