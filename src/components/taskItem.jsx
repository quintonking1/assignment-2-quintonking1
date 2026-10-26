import checkIcon from '../assets/check_icon.png'

function TaskItem({ task, onToggle, onDelete }) {
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
          Delete
        </button>
      </li>
    )
  }

export default TaskItem