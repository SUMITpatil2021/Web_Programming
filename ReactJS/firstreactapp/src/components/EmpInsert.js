import { useReducer, useState } from "react"

export default function EmpInsert() {
    const init = {
        empno: 0,
        ename: "",
        job: "",
        sal: 0
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'update':
                return { ...state, [action.fld]: action.val }
            case 'reset':
                return init;
        }
    }

    const [emp, dispatch] = useReducer(reducer, init);
    const [msg, setMsg] = useState("");
    const submitData = (e) => {
        e.preventDefault();
        const reqOption = {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                empno: emp.empno,
                ename: emp.ename,
                job: emp.job,
                sal: emp.sal
            })

        }
        fetch("http://localhost:9000/insertData", reqOption)
            .then(resp => resp.text())
            .then(str => setMsg(str))

    }
    return (
        <div className="container">
            <h1>Employee Insertion </h1>
            <form method="post">
                <div>
                    Enter Employee ID :
                    <input type="number" name="empno" id="empno" value={emp.empno} onChange={(e) => { dispatch({ type: "update", fld: "empno", val: e.target.value }) }} className="form-control" />
                </div>

                <div>
                    Enter Employee Name :
                    <input type="text" name="ename" id="ename" value={emp.ename} onChange={(e)=>{dispatch({type:"update", fld:"ename",val:e.target.value})}} className="form-control" />
                </div> 

                <div>
                    Enter Job :
                    <input type="text" name="job" id="job" value={emp.job} onChange={(e)=>{dispatch({type:"update", fld:"job", val:e.target.value})}} className="form-control" />
                </div>

                <div>
                    Enter Salary :
                    <input type="number" name="sal" id="sal" value={emp.sal} onChange={(e)=>{dispatch({type:"update",fld:"sal",val:e.target.value})}} className="form-control" />
                </div>
                <div>
                    <input type="button" value="Insert Employee" onClick={(e) => { submitData(e) }} className="btn btn-success" />
                    <input type="button" value="Cancel" onClick={()=>{dispatch({type:"reset"})}} className="btn btn-danger ms-5" />
                </div> 

                <div>{msg}</div>


            </form>
        </div>
    )

}