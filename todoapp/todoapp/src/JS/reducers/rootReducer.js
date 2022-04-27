import { ADD_TASK, EDIT_TASK, REMOVE_TASK, TASK_DONE } from "../Actions/ActionsTypes";
const initialState = []
function rootReducer (state=initialState,action){
    switch (action.type) {
        case ADD_TASK:
            return[...state , action.payload]
        case REMOVE_TASK:
            return state.filter(ToDo => ToDo.id !== action.payload)
        case TASK_DONE:
            return state.map((ToDo) => {
                if(+ToDo.id === +action.payload)
                    return {...ToDo ,isDone:!ToDo.isDone}
                else return ToDo
            })
        case EDIT_TASK:
            return state.map((ToDo) => {
                if (+ToDo.id === +action.payload.id) 
                  return {...ToDo,content: action.payload.content}
                  else return ToDo
                })
        default:
            return state
    }
}
export default rootReducer;
