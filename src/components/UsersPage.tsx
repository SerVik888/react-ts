import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { IUser } from '../types/UsersTypes'
import { List } from './List'
import { UsersItem } from './UserItem'
import { useNavigate } from 'react-router-dom'

export const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers()
  }, [])

  const navigate = useNavigate()

  const fetchUsers = async () => {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (e) {
      alert(e)
    }
  }
  return (
    <List
      items={users}
      renderItem={(user: IUser) => (
        <UsersItem onClick={() => navigate('/users/' + user.id)} user={user} key={user.id} />
      )}
    />
  )
}
