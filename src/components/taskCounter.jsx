import checkIcon from '../assets/check_icon.png'

function TaskCounter ({total, completed}) {
    return (
        <div className="taskcounter">
            <img src={checkIcon} alt=''/>
            <span>{completed}/{total}</span>
        </div>
    )
}

export default TaskCounter