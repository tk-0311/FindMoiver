import React, {useEffect, useContext}from 'react';
import {userContext} from '../app'

// function getUser(){}


const profile = (props) => {
  // const {_id, user_id} = props.user
  const [user, userState] = useContext(userContext)
  // console.log(user.user_id)
  return (
    <div>
      <p>{user.user_id}</p>
    </div>
  )
}

export default profile;