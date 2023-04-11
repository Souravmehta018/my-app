import React, {useState} from "react"
import "./SearchB.css"

//const srchval = "this is srch val"

const products = ["tooth brush", "tooth paste", "mouth wash", "mouth cleaner"]

function SearchBar(){
    const [srchval,newSrchVal] = useState("search value")

    function arltchng(event) {
        newSrchVal(event.target.value)
        console.log(event.target.value)
    }
    function Clear() {
        newSrchVal("")
    }

    const shouldWeDisplayClrBton = srchval.length > 0

 const searchP = products.filter(function(product){
    return product.includes(srchval)
 })

    return( 
        <div>
            <input type = "text" value = {srchval} onChange={arltchng} />

            <div>{srchval}</div>
            
            {shouldWeDisplayClrBton && <button onClick={Clear}> Clear </button>} 
             <ul>
                {
                    searchP.map(function(product){
                        return <li key={product}> {product} </li>
                    })}
             </ul>

        </div> 
    )
}
export default SearchBar
//{shouldWeDisplayClrBton && <button onClick={Clear} >Clear</button>}   
// Above comment means "if shouldWeDisplayClrBton.value is true then execute button command"