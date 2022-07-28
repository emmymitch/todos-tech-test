import "./TaskCard.scss";
import bin from "../../assets/icons/bin-icon.svg";
import { useState } from "react";

const TaskCard = ({taskText}) => {
    const [taskState, setTaskState] = useState(false);

    const taskStateChange = (event) => {
        setTaskState(!taskState)

        //Ensure checkbox and strikethrough are simultaneous
        if (!event.target.parentElement.className.includes("strikethrough")){
            event.target.previousSibling.checked = true;  
        } else{
            event.target.previousSibling.checked = false;
        };

    };

    return (
        <div key={taskText} className="task-card">
            <div onClick={taskStateChange} className={"task-card__success-click "+(taskState? "strikethrough" : "")}>
                <input name="check" className="task-card__checkbox" type="checkbox" />
                <label htmlFor="check" className="task-card__text">{taskText}</label>
            </div>

            <img className="task-card__bin" src={bin} alt="Remove task" />
        </div>
    );
};

export default TaskCard;