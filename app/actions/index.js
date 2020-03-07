const increase =(id=1)=>
{
    return(
        {
            type:'INCREASE',
            value:id
        }
    )
}
const decrease =(id=1)=>
{
    return(
        {
            type:'DECREASE',
            value:id
        }
    )
}
const same =()=>
{
    return(
        {
            type:'NOTHING'
        }
    )
}
export {increase,decrease,same};