import React, { FC } from 'react'
import { ITodo } from '../types/UsersTypes'

interface TodoItemProps {
  todo: ITodo
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
      <input type='checkbox' checked={todo.completed} onChange={() => {}} />
      {todo.id} . {todo.title}
    </div>
  )
}
