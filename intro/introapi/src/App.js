import axios from 'axios';
import {useEffect, useState} from 'react'
import './App.css';
import UserList from './components/UserList'
import {Routes,Route} from 'react-router-dom'
import AboutUsers from './components/AboutUsers'

function App() {
  const [users,setUsers]=useState([])
  useEffect(() =>{
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then((res) => setUsers(res.data))
  .catch((err) => console.log(err))
          },[])
    return (
   <div className='App'>
     <Routes>
  <Route path='/' element={<UserList user={users}/>}/>
  <Route path='/AboutUsers/:usId' element={<AboutUsers user={users}/>}/>
  </Routes>
   </div>
      
    );
}

export default App;
