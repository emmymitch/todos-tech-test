import "./TaskCard.scss";
import bin from "../../assets/icons/bin-icon.svg";

const TaskCard = () => {
    return (
        <div className="task-card">
            <input className="task-card__checkbox" type="checkbox" />
            <p className="task-card__text">Task Text</p>
            <img className="task-card__bin" src={bin} alt="Remove task" />
        </div>
    );
};

export default TaskCard;