import {  useState } from "react";


export default function LocalStorage(){
    const[msg,setMsg]=useState("");
    localStorage.setItem("Uname",JSON.stringify(msg));
    return(
        <div>
            <form>
                Enter Your Name :
                <input type="text" name="msg" id="msg" onChange={(e)=>{setMsg(e.target.value)}} className="form-control" />
            </form> 
        </div>
    )
}