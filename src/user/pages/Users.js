import React from 'react'
import UsersList from '../components/UsersList';
import img from '../../assets/img.jpeg'

const Users = () => {
    const USERS=[
        {id:"u1", name:"Diksha",image:img,places:3
}
    ];
  return <UsersList items={USERS}/>
    
  
}

export default Users;
