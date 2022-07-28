import "./TaskCard.scss";
import bin from "../../assets/icons/bin-icon.svg";
import { useState } from "react";

const TaskCard = ({taskText, deleteTask}) => {
    const [taskState, setTaskState] = useState(false);

    const taskStateChange = (event) => {
        setTaskState(!taskState)

        //Ensure checkbox and strikethrough are simultaneous
        //First if: for if you manage to hit the div ie the small gap between the checkbox and text
        if (event.target.className.includes("task-card__success-click")){
            if (!event.target.className.includes("strikethrough")){
                event.target.firstChild.checked = true;
            } else if(event.target.className.includes("strikethrough")){
                event.target.firstChild.checked = false;
            };    

        //Otherwise just check the box and strikethrough simultaneously
        } else{
            if (!event.target.parentElement.className.includes("strikethrough")){
                event.target.previousSibling.checked = true;  
            } else{
                event.target.previousSibling.checked = false;
            };
        }
    };

    
    return (
        <div id={taskText} className="task-card">
            <div onClick={taskStateChange} className={"task-card__success-click "+(taskState? "strikethrough" : "")}>
                <input name="check" className="task-card__checkbox" type="checkbox" />
                <label htmlFor="check" className="task-card__text">{taskText}</label>
            </div>

            <img onClick={deleteTask} className="task-card__bin" src={bin} alt="Remove task" />
        </div>
    );
};

export default TaskCard;