import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { IUser } from '../types/UsersTypes'

export const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null)

  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + id)
      setUser(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div>
      <button onClick={() => navigate('/users')}>back</button>
      <h1>Это страница пользователя {user?.name}</h1>
      <div>{user?.email}</div>
      <div>
        Город: {user?.address.city} улица: {user?.address.street} индекс: {user?.address.zipcode}
      </div>
    </div>
  )
}
