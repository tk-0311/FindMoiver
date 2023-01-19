import React from 'react'

const sendData =  async(e, userState) => {
  // console.log(e.target,e.target.parentNode.children[0])
  const username = e.target.parentNode.children[0].value
  const password = e.target.parentNode.children[1].value

  const response = await fetch('/user/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: username, password: password})
    });
    const user = await response.json()
    userState(user)
}

const Signup = (props) => {
  const {changeStat, userState} = props
  
  return (
    <div id='Signup'>
      <div>ID: <input id="username"></input>    Password: <input id="password" type='password'></input>  <button id='LoginButton'onClick={e=>{sendData(e, userState)}}>Signup</button></div>
      <p onClick={(e)=>{changeStat('login')}}>to login</p>
    </div>
  )
}

export default Signup;