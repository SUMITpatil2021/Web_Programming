import { useState } from "react";

export default function ArrayStudent(){
    let  arr=["sumit","kunal","shubham","supriya"] ;
    const[ele,setEle]=useState("");
    const[names,setNames]=useState(arr);

    return (
            <div>
                <ul>{
                    names.map((v)=>{
                        return <li key={v}>{v}</li>
                    }) 
                }
                </ul> 
                <input type="text" name="new" value={ele}  onChange={(e)=>{ 
                    setEle(e.target.value)}} /> 
                <button onClick={()=>{setNames(names.concat([ele]))}} >Add Element </button>
            </div>
           )
}