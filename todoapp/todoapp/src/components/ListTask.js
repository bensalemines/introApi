import React from 'react'
import Task from './Task'
import {useSelector} from'react-redux'

const ListTask = ({filter}) => {
  console.log(filter)
  const todos = useSelector((state) =>state.todo);
  return (
    <div>
    {filter==='All' ? 
    todos.map((el)=>(
    <div>
        <Task ToDo={el} key={el.id}/> 
        </div>))
        :filter === 'Completed'?
        todos.filter((el) => el.isDone === true).map((el)=>(
        <div>
            <Task ToDo={el} key={el.id}/> 
            </div>))
            :todos.filter((el) => el.isDone === false).map((el)=>(
            <div>
                <Task ToDo={el} key={el.id}/> 
                </div>))
}
</div>
)}
export default ListTask