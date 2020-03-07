const initialState ={count:0}

const Reducer=(state = initialState,action)=>
{
    switch(action.type)
    {
        case 'INCREASE':
            return(
                {
                    ...state,
                    count:state.count+action.value
                }
            )
        case 'DECREASE':
            return(
                {
                    ...state,
                    count:state.count-action.value
                }
            )
        case 'RESET':
            return(initialState);
        default:
            return(state)
    }
}

export default Reducer;