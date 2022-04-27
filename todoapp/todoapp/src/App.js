import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import {useSelector} from'react-redux'
import { useState } from 'react';
import {motion} from "framer-motion";

function App() {
  const todos = useSelector((state) =>state.todo);
  const [filtered,setFiltered]=useState("all");

  const activeTasks=(e)=>{
    
    setFiltered("Active");
  };

  const doneTasks = (e) => {
    
    setFiltered("Completed");
  };
 
  const allTasks = (e)=>{
    
    setFiltered('All')
  };
  return (
    <div className="App">
 <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Todo App
      </motion.h1>
   <AddTask/> 
   <div className="displaytodos">
      <div className="buttons">
   <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => activeTasks("Active")}
        >
          Active
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => doneTasks("Completed")}
        >
          Completed
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => allTasks("Completed")}
        >
          All
        </motion.button>
        </div>
        </div>
   <ListTask todos={todos} filter={filtered}  />
    </div>
  );
}

export default App;
