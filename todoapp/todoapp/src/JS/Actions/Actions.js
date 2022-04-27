import { ADD_TASK, REMOVE_TASK, TASK_DONE, EDIT_TASK } from "./ActionsTypes";

let nextTaskId = 0;

export const addTask = task => {
    return {type: ADD_TASK,
    payload: {
      ...task,
     id:nextTaskId++ , 
      
    }}
  }
  export const removeTask = id =>{
    return {type: REMOVE_TASK,
    payload:id 
    }
  }
  export const TaskDone = id => {
    return {
      type: TASK_DONE,
      payload:id
    }
  }
  export const editTask = (todo) =>{
    return {
      type:EDIT_TASK ,
      payload:{
       ...todo
      }
    }
  } 
   

 