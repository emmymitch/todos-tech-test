import "./TaskCard.scss";
import bin from "../../assets/icons/bin-icon.svg";

const TaskCard = ({taskText}) => {
    return (
        <div className="task-card">
            <div className="task-card__success-click">
                <input className="task-card__checkbox" type="checkbox" />
                <p className="task-card__text">{taskText}</p>
            </div>

            <img className="task-card__bin" src={bin} alt="Remove task" />
        </div>
    );
};

export default TaskCard;