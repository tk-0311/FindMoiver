import React, {useEffect, useContext}from 'react';
import {userContext} from '../app'

// function getUser(){}


const profile = (props) => {
  // const {_id, user_id} = props.user
  const [user, userState, match, changeMatch] = useContext(userContext)

  function handleClick(e) {
    match === 'Match' ? changeMatch('Movies') : changeMatch('Match')
  }
  // console.log(user.user_id)
  return (
    <div id='profile'>
      <p>{user.user_id}</p>
      <button onClick={handleClick}>{match}</button>
    </div>
  )
}

export default profile;