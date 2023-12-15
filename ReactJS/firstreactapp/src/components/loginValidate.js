import { useReducer, useState } from "react"
const init={
    uid:{value:"", valid:false, touched:false,error:""},
    pwd:{value:"",valid:false,touched:false,error:""}
}
const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'update':
            const {key,value,valid,touched,error}=action.data;
            return {...state,[key]:{value,touched,valid,error}}
         case 'rest':
            return init;    
    }
}

const [user,dispatch]=useReducer(reducer,init);


const validateData=(key,val)=>{
    let valid=true;
    let error="";
    switch(key)
    {
        case 'uid':
            var pattern=/^[A-Z]{1}[/d]{1,}$/ ;
            if(!pattern.test(val))
            {
                    valid=false;
                    error="username should be start with capital letter"
            } 

            break;
            case 'pwd':
                var pattern =/^[A-Za-z0-9!@#$-]{6}$/
                if(!pattern.test(val))
                {
                    valid=false;
                    error="Password Should containt atleast one symbol "
                    break;

                }
                return {valid,error}
    }
}

const handleChange=(key,value)=>{
    
}
export default function LoginValidate(){
   const[msg,changeMsg]=useState("");
   const [uid,setUid]=useState("");
    return(
        <div>
            <h1>Login Form </h1>
            <form>
                <div >  
                    <label  className="form-label me-5" >Enter Uid</label>
                    <input type="text" id="uid"  name="uid" onChange={(e)=>{setUid(e.target.value)}} className="form-control"></input>
                </div>

                <div>
                    <label  className="form-label" > Enter Password</label>
                    <input type="password" id="pwd" name="pwd" className="form-control"></input>
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