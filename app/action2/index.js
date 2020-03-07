const add = (FN,LN,C,E)=>
{
    return(
        {
            type:'ADD',
            FirstName:FN,
            LastName:LN,
            Contact:C,
            Email:E
        }
    )
}
const reset =()=>
{
    return(
        {
            type:'RESET'
        }
    )
}
export {add,reset};