import React, {useState} from "react";

/*let CC=10  Cuttent Count*/

function CtBtn() {
    const [CC, setCC]=useState(0) /* In react we can not simply add to a variable and expext
                             it to display the latest data stored, so we have to create an
                             array and mark it as "useState" displaying it's importance in 
                             output of code. No we can not define these 2 as use state variables
                             separately*/
    function add() {
        setCC(CC+11)
    }
    return (
    <div> 
        <button onClick={add}> +1 </button>
        <div> {CC}</div>
    </div>           
    )
}

export default CtBtn
