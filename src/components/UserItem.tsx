import { FC } from 'react'
import { IUser } from '../types/UsersTypes'

interface UsersItemProps {
  user: IUser
  onClick: (user: IUser) => void
}

export const UsersItem: FC<UsersItemProps> = ({ user, onClick }) => {
  return (
    <div onClick={() => onClick(user)} style={{ padding: '15px', border: '1px solid black' }}>
      {user.id} . {user.name} проживает в городе {user.address.city} по адресу {user.address.street}
    </div>
  )
}
