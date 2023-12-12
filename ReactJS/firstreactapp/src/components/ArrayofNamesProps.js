export  default function ArrayofNames (ps){
    return (
        <div>
            <ul> {
                ps.names.map((v)=>{
                    return <li key={v}> {v}</li>
                })      
            }
            </ul>
        </div>


    )
}

