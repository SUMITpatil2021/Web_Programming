import { useReducer } from "react"

const init={
    emailid:"",
    pwd:"",
    gender:"",
    city:"",
    check:false
}

const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'update':
            return{...state,[action.fld]:action.val}  
        case 'reset':
                return init; 
    }
}

export default function RegForm(){

    const[user,dispatch]=useReducer(reducer,init);

    const submitData=(e)=>{
        e.preventDefault(); 
        if(user.check)  
        console.log(JSON.stringify(user));
        else
        console.log("Information can not be shown here ");
    }
    return(
        <div className="container"> 
            <h1>Registration Form</h1>
            <form>
                <div>
                    <label className="form-label">Enter EmailID :</label>
                    <input type="email" id="emailid" name="emailid" value={user.emailid} onChange={(e)=>{dispatch({type:"update",fld:"emailid",val:e.target.value})} }className="form-control" />
                </div>

                <div>
                    <label className="form-label">Enter Password</label>
                    <input type="password" id="pwd" name="pwd"  value={user.pwd} onChange={(e)=>{dispatch({type:"update",fld:"pwd",val:e.target.value})}} className="form-control"/>
                </div>

                <div>
                    
                    <input type="radio" id="m" value="Male" name="gender"  checked={user.gender=="Male"} onChange={(e)=>{dispatch({type:"update",fld:"gender",val:e.target.value})}} className="form-check-input" />
                    <label className="form-label">Male </label> 
                    <input type="radio" id="f" name="gender" checked={user.gender=="Female"} value="Female" onChange={(e)=>{dispatch({type:"update",fld:"gender",val:e.target.value})}}  className="form-check-input" />
                    <label className="form-label">Female </label> 
                </div>

                <div className="pt-2">
                    <label className="form-label">select City</label>
                    <select className="form-select" name="city" value={user.city} onChange={(e)=>{dispatch({type:"update",fld:"city",val:e.target.value})}} >
                        <option value=" ">Select City</option>
                        <option value="Kolhapur">Kolhapur</option>
                        <option value="Pune">Pune</option>
                        <option value="Nashik">Nashik</option>
                        <option value="Mumbai">Mumbai</option>
                    </select>
                </div>
                <div className="form-check mt-10 ">
                   <input type="checkbox" id="0" name="check"  checked={user.check} value={user.check} onChange={(e)=>dispatch({type:'update',fld:"check",val:e.target.checked})}  className="form-check-input" /> 
                   <label>I agree</label>
               </div>

               <div>
                <input type="button" value="Submit" onClick={(e)=>{submitData(e)}} className="btn btn-success " />

                <input type="button" value="Cancel" onClick={()=>{dispatch({type:"reset"})}} className="btn btn-danger ms-2" />

               </div>
            </form>  
            <p>{JSON.stringify(user)}</p>
        </div>
    )
}