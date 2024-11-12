import React from "react";
import done from "../../icons_FEtask/Done.svg";
import plus from "../../icons_FEtask/add.svg";
import dots from "../../icons_FEtask/3 dot menu.svg";
function Done(){
    return(
    <div>
       <h1><img src={done}/> Done </h1>
       <img src={plus}/>
       <img src={dots}/>
    </div>
    );
}
export default Done;