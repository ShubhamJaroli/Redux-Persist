const InitialState = {FirstName:"",LastName:"",Contact:"",Email:""}

const Reducer1 = (state=InitialState,action)=>
{
    switch(action.type)
    {
        case 'ADD':
            return(
                {
                    ...state,
                    FirstName:action.FirstName,
                    LastName:action.LastName,
                    Contact:action.Contact,
                    Email:action.Email,
                }
            )
        case 'RESET':
            return(InitialState)
        default:
            return(state)
    }
}

export default Reducer1