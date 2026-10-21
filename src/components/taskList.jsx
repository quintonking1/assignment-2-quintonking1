import taskItem from "./taskItem"

function taskList ({tasks, onToggle, onDelete}){
    if (taskList === 0) {
        return <p className = "emptyState">No tasks to show</p>
    }
    
    return (
        <ul id="tasklist">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )
    }

export default taskList