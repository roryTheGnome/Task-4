import doneImg from "./assets/img.png";
import inProgImg from "./assets/img_1.png";
import toDoImg from "./assets/img_2.png";
import style from "./Card.module.css";
import PropTypes from 'prop-types'; //huge thanks to whoever thought of moving prop-types to its own module, great job pal


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
Card.prototype={
    description: PropTypes.string,
    name: PropTypes.string,
    isActive: PropTypes.bool,
    submitted: PropTypes.bool,
    deadline: PropTypes.instanceOf(Date)
}

Card.defaultProps={
    name:"Task",
    description:"",
    isActive:false,
    submitted:false,
    deadline:new Date()

}

export default Card