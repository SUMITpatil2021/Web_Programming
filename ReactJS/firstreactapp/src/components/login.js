import { useReducer, useState } from "react"

export default function Login(){
   const[msg,changeMsg]=useState("");
   const [uid,setUid]=useState("");
    return(
        <div>
            <h1>Login Form </h1>
            <form>
                <div >  
                    <label  className="form-label me-5" >Enter Uid</label>
                    <input type="text" id="uid"  onChange={(e)=>{setUid(e.target.value)}} className="form-control"></input>
                </div>

                <div>
                    <label  className="form-label" > Enter Password</label>
                    <input type="password" id="pwd" className="form-control"></input>
                </div>
                    <br/>
                <div>
                    <input type="button"
                    className="btn btn-primary"  value="Login"
                    onClick={()=>{changeMsg("Welcome "+uid)}} /> 
                </div>
            </form> 
            <div > {msg} </div>
        </div>
    )
}