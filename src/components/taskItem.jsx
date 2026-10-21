import checkIcon from './src/assets/check_Icon.png'

function taskItem({ task, onToggle, onDelete }) {
    const inputId = `task-${task.id}`
  
    return (
      <li className={task.completed ? 'completed' : ''}>
        <input
          type="checkbox"
          id={inputId}
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <img src={checkIcon} alt="" className="check-icon" />
        <label htmlFor={inputId}>{task.text}</label>
        <button
          type="button"
          className="delete-btn"
          onClick={() => onDelete(task.id)}
          aria-label={`Delete ${task.text}`}
        >
        </button>
      </li>
    )
  }

export default taskItem