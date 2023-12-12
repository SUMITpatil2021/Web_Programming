
 function PropFunComp(ps){
    var fact=1;
for(let i=1;i<=ps.num;i++)
{
    fact=fact*i
}
    return(
        <div>
            <h1> Number : {ps.num}</h1>
            <p>Factorial : {fact}</p>
        </div>
    )
}
PropFunComp.defaultProps={
    num:1,
    fact:1
}

export default PropFunComp;