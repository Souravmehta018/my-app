import React from "react"
import CtBtn from "./CountDis/CounterButton"
import SearchBar from "./SearchBar/SearchB"

function App() {

  // const products = ["tooth brush", "tooth paste", "mouth wash", "mouth cleaner"]
  /*
  <CtBtn />   
  This is the command used inside return button to get the output with value assigned while defining function */
    return(
        <div>         
          <SearchBar products={["tooth brush", "tooth paste", "mouth wash", "mouth cleaner"]} />
          <SearchBar products={["Laptop", "mobile", "pinkwash", "Ear plugs"]} /> 
          {/*<SearchBar products={products} />*/}     
          <CtBtn incrementBy={1} buttonColor={"pink"} brdr={"2px"} />
          <CtBtn incrementBy={5} buttonColor={"white"} brdr={"2px"} />
          <CtBtn incrementBy={7} buttonColor={"yellow"}brdr={"2px"} />
        </div>
      
    )
  }

export default App
