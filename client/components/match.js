import React, {useContext, useEffect, useState} from 'react'
import { userContext } from './app'

const Match = (props) => {
  const [user] = useContext(userContext)
  const [matchList, updateList] = useState([])
  console.log(user)
  const match = [];
  async function findMatch() {
    const response = await fetch(`/user/like?user_id=${user.user_id}`)
    const names = await response.json()
    updateList(names)
    
  }
  useEffect(findMatch,[])
  for(let name of matchList) {
    match.push(<p key={name}>{name}</p>)
  }
  return (
    <div id='cardBox'>
      {match}
    </div>
  )
}

export default Match