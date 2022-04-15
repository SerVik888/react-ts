import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { Card, CardVariant } from './components/Card'
import { EventsExample } from './components/EventsExample'
import { TodoItemPage } from './components/TodoItemPage'
import { TodosPage } from './components/TodosPage'
import { UserItemPage } from './components/UserItemPage'
import { UsersPage } from './components/UsersPage'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div>
          <Link to={'/users'}>Список пользователей </Link>
          <Link to={'/todos'}> Список задач</Link>
        </div>
        <Routes>
          <Route path='/users' element={<UsersPage />} />
          <Route path='/todos' element={<TodosPage />} />
          <Route path='/users/:id' element={<UserItemPage />} />
          <Route path='/todos/:id' element={<TodoItemPage />} />
        </Routes>

        <EventsExample />

        <Card variant={CardVariant.primary} width='200px' height='200px' onClick={num => console.log('click', num)}>
          <button>Кнопка</button>
          <div>Нажми</div>
        </Card>
      </div>
    </BrowserRouter>
  )
}

export default App
