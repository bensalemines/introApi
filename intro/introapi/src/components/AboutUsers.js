import React from 'react'
import {useParams,Link} from 'react-router-dom'

import {FcInvite,FcHome,FcPhone,FcGlobe,FcDepartment} from "react-icons/fc";

const AboutUsers = (props) => {
    const params = useParams()
    const user = props.user.find(el => el.id === +params.usId)
  return (
      <div className='global'>
  <div className='header'>
      <img className="userimage" src='https://findicons.com/files/icons/1994/vista_style_business_and_data/256/users.png' alt='user'/>
      <h1 className='name'>{user.name} , {user.username}</h1>
      </div>
      <div className='container'>
      <h4> <FcHome/>&nbsp;&nbsp; Adress: &nbsp; {user.address.street} ,{user.address.suite} ,{user.address.city} ,{user.address.zipcode}</h4> 
          <h4><FcInvite/>&nbsp;&nbsp; Email:&nbsp; {user.email}  </h4>
            
          <h4> <FcPhone/>&nbsp;&nbsp; Phone: &nbsp; {user.phone}</h4> 
          
          <h4> <FcGlobe/>&nbsp; &nbsp;Website: &nbsp; {user.website} </h4> {""} 
          <h4> <FcDepartment/>&nbsp;&nbsp;Company:&nbsp;{user.company.name} </h4> {""} 
          
          <div className='button'>
              <Link to='/'> <button> GO BACK</button> </Link>
          </div>
      </div>
  </div>
                    
  )        
}

export default AboutUsers
