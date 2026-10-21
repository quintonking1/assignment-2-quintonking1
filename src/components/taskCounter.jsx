import checkIcon from '../assets/check_icon.png'

function taskCounter ({total, completed}) {
    return (
        <div className="taskcounter">
            <img src={checkIcon} alt=''/>
            <span>{total}/{completed}</span>
        </div>
    )
}

export default taskCounter