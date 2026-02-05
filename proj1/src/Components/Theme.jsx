import {useState} from "react";

function Theme(){
    const [peach,setPeach]= useState();

    const changeTheme=()=>{
        document.body.style.backgroundColor= peach ? rgba(237, 149, 114, 0.53) : rgba(29, 101, 43, 0.29);
    }
    return (
        <button onClick={changeTheme} className="colorButton"></button>
    )

}
export default Theme
//later