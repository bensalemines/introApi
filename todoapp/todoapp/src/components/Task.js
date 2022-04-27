import React, { useState }  from 'react'
import { motion } from "framer-motion";
import { useDispatch } from 'react-redux'
import { IoCheckmarkDoneSharp, IoClose  } from "react-icons/io5";
import {editTask, TaskDone} from '../JS/Actions/Actions';
import { AiFillEdit } from "react-icons/ai";
import { removeTask } from '../JS/Actions/Actions';

const Task = ({ToDo}) => {
  // const inputRef = useRef(true);

  // const changeFocus = () => {
  //   inputRef.current.disabled = false;
  //   inputRef.current.focus();
  // };
  const dispatch = useDispatch();
  const [edit,setEdit]=useState(false)
  const [input, setInput] = useState(ToDo.content)

  const Remove = (id) => {
    dispatch(removeTask(id))
  }
  const done = (id) =>{
    dispatch(TaskDone(id))
  } 
  const update = (id,  e) => {
    console.log(input,('hiiiii'))
    dispatch(editTask({ id, content: input }));
    setEdit(false);
    if (e.which === 13) {
    }
  }

return(
 <div className='displayTodos'>
   <ul> 
  <motion.li
  style={{listStyle:'none', backgroundColor:'transparent'}}
      initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
      animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
      whileHover={{
        scale: 0.9,
        transition: { type: "spring", duration: 0.1 },
      }}
      exit={{
        x: "-60vw",
        scale: [1, 0],
        transition: { duration: 0.5 },
        backgroundColor: "rgba(255,0,0,1)",
      }}
      key={ToDo.id}
      className="card">
  <div className="btns">
  {edit ? 
  <>
  <textarea  className= {ToDo.isDone ? "completed": "" } onChange={(e)=>setInput(e.target.value)} defaultValue={input}/>
<motion.button
  whileHover={{ scale: 1.4 }}
  whileTap={{ scale: 0.9 }}
  // onClick={(e) => update(ToDo.id, e.target.value, e)}
  onClick={(e) => update(ToDo.id, e)}
>
  {" "}
  <AiFillEdit  />{" "}
</motion.button>
</>
 :
    <textarea className= {ToDo.isDone ? "completed": "" } defaultValue={ToDo.content}/>}
          <motion.button
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: "green" }}
            onClick={() => done(ToDo.id)}
          >
            {" "}
            <IoCheckmarkDoneSharp  />
          </motion.button>
         
          {!edit &&
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
        >
          {" "}
          <AiFillEdit onClick={()=>setEdit(true)} />{" "}
        </motion.button>
}
        {/* <button onClick={()=>setEdit(true)} >edit</button> */}
        

          <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          style={{ color: "red" }}
          onClick={() => Remove(ToDo.id)}
        >
          {" "}
          <IoClose  onClick={()=> Remove (ToDo.id)}/>
        </motion.button>
  
</div> 
</motion.li>
 </ul>
</div>
)
}
export default Task