import { useState } from "react";

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
  { id: 3, text: 'Return the textbook to Josie', completed: false },
  { id: 4, text: 'Buy the new album by Rake', completed: false },
  { id: 5, text: 'Buy a gift card for Dad', completed: false },
]

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [filter, setFilter] = useState('all')

  function addTask(text) {
    setTasks((prev) => [...prev, { id: Date.now(), text, completed: false }])
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  const completed = tasks.filter((t) => t.completed).length

  const visibleTasks = tasks.filter((t) => {
    if (filter === 'active') return !t.completed
    if (filter === 'completed') return t.completed
    return true
  })

  const filterOptions = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' },
  ]

  return (
    <>
      <header>
        <input type="checkbox" id="menu-toggle" className="menu-checkbox" />
        <label htmlFor="menu-toggle" className="hamburger">
          <img src={menuIcon} alt="Menu" />
        </label>

        <search>
          <form action="/search-endpoint" method="GET" className="search-form">
            <input
              type="search"
              id="site-search"
              name="q"
              placeholder="Quick find"
              aria-label="Quick find"
            />
          </form>
        </search>

        <TaskCounter total={tasks.length} completed={completed} />
      </header>

      <nav className="tab-container">
        <ul className="tab-menu">
          <li className="tab-item"><a href="#"><img src={inboxIcon} alt="" />Inbox <span className="count">{tasks.length}</span></a></li>
          <li className="tab-item"><a href="#"><img src={calendarIcon} alt="" />Today <span className="count">{tasks.length}</span></a></li>
          <li className="tab-item"><a href="#"><img src={upcomingIcon} alt="" />Upcoming</a></li>
        </ul>
      </nav>

      <main>
        <h1>Inbox</h1>
        <TaskForm onAdd={addTask} />
        <div className="filters">
          {filterOptions.map((option, i) => (
            <span key={option.key}>
              {i > 0 && <span className="separator">|</span>}
              <button
                type="button"
                className={`filter-btn${filter === option.key ? ' active' : ''}`}
                onClick={() => setFilter(option.key)}
              >
                {option.label}
              </button>
            </span>
          ))}
        </div>
        <TaskList tasks={visibleTasks} onToggle={toggleTask} onDelete={deleteTask} />
      </main>
    </>
  )
}

export default App
