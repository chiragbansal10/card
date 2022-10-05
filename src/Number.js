import { useState } from "react"

const Number=()=>
{
    let [count,setCount]=useState(()=>{
        return 0
    })
function increaseCount(){
    setCount(previousCount=>previousCount+1)
}
    return(
        <div>
            <h1 onClick={increaseCount}>{count}</h1>
        </div>
    )
}
export default Number