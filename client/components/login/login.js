import React from 'react'


const sendData =  async(e, userState) => {
  // console.log(e.target,e.target.parentNode.children[0])
  try{
    console.log('clicked')
    const username = e.target.parentNode.children[0].value
    const password = e.target.parentNode.children[1].value
    
    const response = await fetch('/user/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: username, password: password})
    });
    const user = await response.json()
    userState(user)
  }catch(err) {
    
  }
}


const Login = (props) => {
  const {changeStat, userState} =props
  
  return (
    <div id='Login'>
      <div>ID: <input id="username"></input>    Password: <input id="password"></input>  <button id='LoginButton'onClick={e=>{sendData(e, userState)}}>Login</button></div>
      <p onClick={e=>{changeStat('signup')}}>Signup</p>
    </div>
  )
}

export default Login;