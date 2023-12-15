import { useEffect, useState } from "react"

export default function EmpData(){
    const[emps,setEmps]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:9000/emps")
        .then(resp=>resp.json())
        .then(data=>setEmps(data))
    },[]);
    return(
        <div className="container">

            <h1>Employee Data </h1>

            <table className="table table-bordered" >
                <tr>
                    <th>EMPNO</th>
                    <th>ENAME</th>
                    <th>JOB</th>
                    <th>SAL</th>
                
                </tr>
                {
                    emps.map((v)=>{
                        return(
                            <tr>
                                <td>{v.EMPNO}</td>  
                                <td>{v.ENAME}</td>
                                <td>{v.JOB}</td>
                                <td>{v.SAL}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}