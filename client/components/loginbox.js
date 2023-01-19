import React, {useState, useEffect, useContext} from 'react';
import Login from './login/login'
import Signup from './login/signup'
import Profile from './login/profile'
import {userContext} from './app'

const LoginBox = () => {

  const [stat, changeState] = useState('login');
  const [user, userState] = useContext(userContext);

  useEffect(()=> {
    if (user){
    changeState('profile')
    
  }
  },[user])
  return (
    <div>
      {stat==='login' ? <Login userState={userState} changeStat={changeState} /> : stat === "profile" ? <Profile /> :<Signup userState={userState} changeStat={changeState}/>}
    </div>
  )
}




export default LoginBox;