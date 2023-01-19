import React, {useContext} from 'react'
import { userContext } from './app'

const Match = (props) => {
  const [user] = useContext(userContext)
  console.log(user)
  async function findMatch() {
    const response = await fetch(`/user/like?user_id=${user._id}`)
  }
  return (
    <div>

    </div>
  )
}

export default Match