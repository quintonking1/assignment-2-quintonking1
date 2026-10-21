import './App.css'

import menuIcon from './assets/menu_icon.png'
import checkIcon from './assets/check_icon.png'
import inboxIcon from './assets/inbox_icon.png'
import calendarIcon from './assets/calendar_icon.png'
import upcomingIcon from './assets/upcoming_icon.png'

function App() {
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

        <div className="taskcounter">
          <img src={checkIcon} alt="" />
          <span>5/30</span>
        </div>
      </header>

      <nav className="tab-container">
        <ul className="tab-menu">
          <li className="tab-item"><a href="#"><img src={inboxIcon} alt="" />Inbox <span className="count">5</span></a></li>
          <li className="tab-item"><a href="#"><img src={calendarIcon} alt="" />Today <span className="count">5</span></a></li>
          <li className="tab-item"><a href="#"><img src={upcomingIcon} alt="" />Upcoming</a></li>
        </ul>
      </nav>

      <main>
        <h1>Inbox</h1>

        <ul id="tasklist">
          <li>
            <input type="checkbox" id="task-1" />
            <img src={checkIcon} alt="" className="check-icon" />
            <label htmlFor="task-1">Call Mom</label>
          </li>
          <li>
            <input type="checkbox" id="task-2" />
            <img src={checkIcon} alt="" className="check-icon" />
            <label htmlFor="task-2">Buy the new issue of Scientific American</label>
          </li>
          <li>
            <input type="checkbox" id="task-3" />
            <img src={checkIcon} alt="" className="check-icon" />
            <label htmlFor="task-3">Return the textbook to Josie</label>
          </li>
          <li>
            <input type="checkbox" id="task-4" />
            <img src={checkIcon} alt="" className="check-icon" />
            <label htmlFor="task-4">Buy the new album by Rake</label>
          </li>
          <li>
            <input type="checkbox" id="task-5" />
            <img src={checkIcon} alt="" className="check-icon" />
            <label htmlFor="task-5">Buy a gift card for Dad</label>
          </li>
        </ul>
      </main>
    </>
  )
}

export default App
