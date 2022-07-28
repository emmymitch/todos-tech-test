import "./TaskBar.scss";
import plus from "../../assets/icons/plus-circle-icon.svg";

const TaskBar = ({addTask}) => {
    return(
        <div className="taskbar">
            <input className="taskbar__input" type="text" defaultValue="" placeholder="Add your task here..." />
            <img onClick={addTask} className="taskbar__img" src={plus} alt="Add task to list" />
        </div>
    )
}

export default TaskBar;