import React from "react"
import CtBtn from "./CounterButton"

function App() {
  /*
  <CtBtn />   
  This is the command used inside return button to get the output with value assigned while defining function */
    return(
        <div>           
          <CtBtn incrementBy={1} buttonColor={"pink"} brdr={"2px"} />
          <CtBtn incrementBy={5} buttonColor={"white"} brdr={"2px"} />
          <CtBtn incrementBy={7} buttonColor={"yellow"}brdr={"2px"} />
        </div>
      
    )
  }

export default App
