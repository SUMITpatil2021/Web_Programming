export default function Employee(ps){
return(
    <div>
    <table border={1}>
        <tr>
            <th>Empid </th>
            <th> Name </th>
            <th> Salary </th>
        </tr>

        <tr>
            <td>{ps.empid}</td>
            <td>{ps.ename}</td>
            <td>{ps.salary}</td>
        </tr>
    </table>
    </div>
)
}