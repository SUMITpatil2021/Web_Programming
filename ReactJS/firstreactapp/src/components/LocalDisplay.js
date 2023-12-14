import { json } from "react-router-dom"

export default function LocalDisplay(){
    let myname=JSON.parse(localStorage.getItem("Uname"))
    return(
        <div>
            <h1>{myname}</h1>
        </div>
    )
}