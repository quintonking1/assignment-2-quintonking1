import { useState } from 'react'
import './App.css'

import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import TaskCounter from './components/TaskCounter'

import menuIcon from './assets/menu_icon.png'
import inboxIcon from './assets/inbox_icon.png'
import calendarIcon from './assets/calendar_icon.png'
import upcomingIcon from './assets/upcoming_icon.png'

const initialTasks = [
  { id: 1, text: 'Call Mom', completed: false },
  { id: 2, text: 'Buy the new issue of Scientific American', completed: false },
  { id: 3, text: 'Return the textbook to Josie', completed: true },
  { id: 4, text: 'Buy the new album by Rake', completed: false },
  { id: 5, text: 'Buy a gift card for Dad', completed: false },
]

const FILTERS = ['All', 'Active', 'Completed']

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [filter, setFilter] = useState('All')


  function handleAdd(text) {
    const newTask = { id: Date.now(), text, completed: false }
    setTasks([...tasks, newTask])
  }

  function handleToggle(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }


  const totalCount = tasks.length
  const completedCount = tasks.filter((task) => task.completed).length

  const visibleTasks = tasks.filter((task) => {
    if (filter === 'Active') return !task.completed
    if (filter === 'Completed') return task.completed
    return true
  })

  return (
    <>
      <header>
        <input type="checkbox" id="menu-toggle" className="menu-checkbox" />
        <label htmlFor="menu-toggle" className="hamburger">
          <img src={menuIcon} alt="Menu" />
        </label>

        <search>
          <form className="search-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="search"
              id="site-search"
              name="q"
              placeholder="Quick find"
              aria-label="Quick find"
            />
          </form>
        </search>

        <TaskCounter total={totalCount} completed={completedCount} />
      </header>

      <nav className="tab-container">
        <ul className="tab-menu">
          <li className="tab-item">
            <a href="#"><img src={inboxIcon} alt="" />Inbox <span className="count">{totalCount}</span></a>
          </li>
          <li className="tab-item">
            <a href="#"><img src={calendarIcon} alt="" />Today <span className="count">5</span></a>
          </li>
          <li className="tab-item">
            <a href="#"><img src={upcomingIcon} alt="" />Upcoming</a>
          </li>
        </ul>
      </nav>

      <main>
        <h1>Inbox</h1>

        <div className="filters">
          {FILTERS.map((name, index) => (
            <span key={name}>
              {index > 0 && <span className="separator"> | </span>}
              <button
                type="button"
                className={filter === name ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setFilter(name)}
              >
                {name}
              </button>
            </span>
          ))}
        </div>

        <TaskForm onAdd={handleAdd} />

        <TaskList
          tasks={visibleTasks}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </main>
    </>
  )
}

export default App