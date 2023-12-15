import { useReducer } from "react";

export default function FormValidation() {

    const init = {
        empid: {value:0,valid: false, touched: false, error:""},
        ename: {value:"",valid: false, touched: false, error:""},
        salary: {value:0,valid: false, touched: false, error:""},
        dept: {value:0,valid: false, touched: false, error:""},
        formValid: false
    }

    const reducer = (state,action) => {
        switch(action.type)
        {
            case 'update':
                //object destructuring
                const {key,value,touched,valid,error,formValid} = action.data;
                return {...state,[key]:{value,touched,valid,error},formValid}
            case 'reset':
                return init;        
        }
    }

    const[emp,dispatch] = useReducer(reducer,init)

    const validateData = (key,val) => {
        let valid = true;
        let error = ""
        switch(key)
        {
            case 'empid':
               var pattern = /^[0-9]{4}$/ 
               if(!pattern.test(val))
               {
                  valid = false;
                  error = "Empid should be 4 digits only"
               }

               break;
            case 'ename':   


        }
        return { valid: valid, error: error}
    }

    
    const handleChange = (key,value) => {
        //1. call validateData function
        const {valid, error} = validateData(key,value);

        //2. check the validity status of the form
        let formValid = true;
        for(let k in emp)
        {
            //console.log(emp[k].valid)
            if(emp[k].valid === false)
            {
                formValid = false;
                break;
            }
        }
        console.log(formValid);

        //3. call to dispatch - updating the state
        dispatch({type: "update",data:{key,value,touched:true,valid,error,formValid}})
    }

    const submitData = (e) =>{
        e.preventDefault();
        //server side API
    }


    return (
        <div>
            <h1> Emp Form </h1>
            <form>
                Empid : <input type="number" name="empid" 
                value={emp.empid.value}
                onChange={(e)=>{handleChange("empid",e.target.value)}} 
                onBlur={(e)=>{handleChange("empid",e.target.value)}} />
                <br/>
                <div style={{ display: emp.empid.touched && !emp.empid.valid  ?"block":"none"}}>
                    { emp.empid.error}
                </div>


                Ename : <input type="text" name="ename" 
                value={emp.ename.value}
                onChange={(e)=>{handleChange("ename",e.target.value)}} 
                onBlur={(e)=>{handleChange("ename",e.target.value)}} />
                <br/>

                Salary : <input type="number" name="salary" 
                value={emp.salary.value}
                onChange={(e)=>{handleChange("salary",e.target.value)}} 
                onBlur={(e)=>{handleChange("salary",e.target.value)}} />
                <br/>

                Dept : <input type="number" name="dept" 
                value={emp.dept.value}
                onChange={(e)=>{handleChange("dept",e.target.value)}} 
                onBlur={(e)=>{handleChange("dept",e.target.value)}} />
                <br/>

                <input type="submit" value="Insert"
                disabled={!emp.formValid} 
                onClick={(e)=>{submitData(e)}} />

                <input type="reset" value="Clear" 
                onClick={()=>{dispatch({type:"reset"})}}/>
            </form>
            <p> {JSON.stringify(emp)} </p>
            
        </div>
    )



}