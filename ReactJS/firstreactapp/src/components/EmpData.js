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
                                <td>{v.EMPID}</td>
                                <td>{v.ename}</td>
                                <td>{v.job}</td>
                                <td>{v.sal}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}