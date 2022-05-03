import React from 'react'
import UserCard from './UserCard'
import {Link} from 'react-router-dom'

const UserList = ({user}) => {
  return (
    <div className='title' ><h1>USERS LIST </h1>
    <div className="userlist">
        {user.map((el)=>(
            <div>
           <Link to={`/AboutUsers/${el.id}`}> <UserCard users={el} key={el.id} /> </Link>
           </div>
        ))}
    </div>
    </div>
  )
}

export default UserList