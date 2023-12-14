import {useEffect , useState} from "react"
export default function REST_API_POSTMAN(){
    const[emps,setEmps]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(resp=>resp.json())
        .then(data=>setEmps(data));
    },[]);
    return(
        <div>
            <h1>Emp Data</h1>
            <table className="table table-bordered ">
                {
                    emps.map((v)=>{
                        return(
                                <tr>
                                        <td>{v.id}</td>
                                        <td>{v.name}</td>
                                        <td>{v.username}</td>
                                        <td>{v.email}</td>
                                        <td>{v.address.zipcode}</td>
                                        <td>{v.address.city}</td>
                                </tr>
                        )
                    })
                }
                
            </table>
        </div>
    )
}