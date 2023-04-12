import React, {useState, useEffect} from "react";
import "./CountBtn.css"

/*let CC=10  Cuttent Count*/

function CtBtn(props) {
    const [CC, setCC]=useState(0) /* In react we can not simply add to a variable and expext
                             it to display the latest data stored, so we have to create an
                             array and mark it as "useState" displaying it's importance in 
                             output of code. No we can not define these 2 as use state variables
                             separately*/
   // console.log(props.incrementBy)

    useEffect(function(){
        console.log("web page loaded")
    }, [])
    useEffect(function(){
        console.log("Button Used")
    },[CC])

    function add() {
      /*  setCC(CC+11)      ~this was the code with pre assigned value for each time function is <called></called> */
      setCC(CC + props.incrementBy) /*this is the code where value in function can be set wile calling it */
    }
    const btnstyl = {
        background : props.buttonColor,
    }
    const DivStyle = {
        color :"blue",
        border : "10px solid black",
        borderRadius : "14px"
    } // Or instead of defining new function we can write all that <div style= {{here}}>
    return (
    <div style = {DivStyle}> 
        <button style = {btnstyl} onClick={add}> +{props.incrementBy} </button>
        <div className="ctdisplay"> {CC}</div>
    </div>           
    )
}

export default CtBtn
