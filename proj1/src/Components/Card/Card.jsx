import doneImg from "./assets/img.png";
import style from "./Card.css";

function Card(props){
    return(
        <>
            <img className={style.logo} src={doneImg} alt="Done"/>
            <p>Task Name: {props.name}</p>
            <p>Description: {props.description}</p>

            {props.isActive && !props.submitted &&(
                <p>Deadline: {props.deadline}</p>
            )}
            <p>{!props.isActive ? "To Do" : props.submitted ? "Submitted" : "In progress"}</p>


        </>
    );
}
export default Card