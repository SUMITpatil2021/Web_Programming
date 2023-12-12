export default function ArrayStudent(ps){
    return (
            <div>
                <ul>{
                    ps.names.map((v)=>{
                        return <li key={v}>{v}</li>
                    }) 
                }
                </ul> 
                <input type="text" onChange={} />
            </div>
           )
}