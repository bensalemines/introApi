import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../JS/Actions/Actions';
import { motion } from "framer-motion";
import { GoPlus } from "react-icons/go";


const AddTask = () => {
  const Dispatch = useDispatch()
  const [Task,setTask] = useState ({
    id:0,
    content:"",
    isDone: false
  })
  const handleChange = (e) => {
    setTask({ ...Task, content: e.target.value });
  }
  function onSumbit (e)  {
    e.preventDefault();
    if(Task.content.length === 0){
      alert("DO SOMETHING TODAY , BE PROACTIVE!!");
    }else{
    Dispatch (addTask(Task))
    setTask({
      id:Math.random(),
      content:"",
      isDone:false

    })
  }}
  return (
    <div className="addTodos">
      <input className='todo-input' type='text' onChange={handleChange} value={Task.content}></input>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={onSumbit}
      >
        <GoPlus />
      </motion.button> 

    </div>
  )
}

export default AddTask