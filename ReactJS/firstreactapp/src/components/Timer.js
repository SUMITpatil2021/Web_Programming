import { useEffect, useState } from "react"

export default function Timer(){
        const[hr,setHr]=useState(0);
        const[min,setMin]=useState(0);
        const[sec,setSec]=useState(0);

        useEffect(()=>{setInterval(()=>{setHr(new Date().getHours(),1000)})})
        useEffect(()=>{setInterval(()=>{setMin(new Date().getMinutes(),1000)})},[])
        useEffect(()=>{setInterval(()=>{setSec(new Date().getSeconds(),1000)})})
    return(
        <div className="container"> 
            <p>{hr}:{min}:{sec}</p>
        </div>
    )
}