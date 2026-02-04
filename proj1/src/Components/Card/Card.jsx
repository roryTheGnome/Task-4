import doneImg from "./assets/img.png";
import inProgImg from "./assets/img_1.png";
import toDoImg from "./assets/img_2.png";
import style from "./Card.module.css";

function Card(props){
    return(
        <div className={style.task}>

            <img className={style.logo} src={!props.isActive? toDoImg:props.submitted? doneImg:inProgImg} alt="Done"/>
            <p>Task Name: {props.name}</p>
            <p>Description: {props.description}</p>

            {props.isActive && !props.submitted &&(
                <p>Deadline: {props.deadline}</p>
            )}
            <p>{!props.isActive ? "To Do" : props.submitted ? "Submitted" : "In progress"}</p>


        </div>
    );
}
export default Card