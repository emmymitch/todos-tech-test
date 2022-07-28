import "./TaskBar.scss";
import plus from "../../assets/icons/plus-circle-icon.svg";

const TaskBar = () => {
    return(
        <div className="taskbar">
            <input className="taskbar__input" type="text" placeholder="Add your task here..." />
            <img className="taskbar__img" src={plus} alt="Add task to list" />
        </div>
    )
}

export default TaskBar;