import React, { FC } from 'react'
import { IUser } from '../types/UsersTypes'
import { UsersItem } from './UserItem'

interface UsersListProps {
  users: IUser[]
}

export const UsersList: FC<UsersListProps> = ({ users }) => {
  return (
    <div>
      {/* {users.map(user => (
        <UsersItem key={user.id} user={user} />
      ))} */}
    </div>
  )
}
