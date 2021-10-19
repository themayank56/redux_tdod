const initialState = {
    list: []
}
export const todoreducer1 = (state=initialState, action) => {
    switch(action.type){
        case "ADD_BUTTON1" :
            return{
                ...state,
                list:[
                    ...state.list,
                    action.data
                ]
            }
        case "DELETE_BUTTON1" :
            const newList = state.list.filter((elem, id) => {
                return id
            })
            return{
                ...state,
                list: newList

            }
            case "DELETE_ALL" :
                return{
                    ...state,
                    list:[]
                }
            
        default: return state;
    }
}
