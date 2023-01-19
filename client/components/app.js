import React, {useState, useContext, createContext}from 'react'
import CardBox from './Cardbox'
import LoginBox from './loginbox'
import Match from './match'



export const userContext = createContext()
function App(props) {
  const [user, userState] = useState(null)
  return (
    <div>
      <userContext.Provider value={[user,userState]}>
      <LoginBox />
      <CardBox />
      <Match />
      </userContext.Provider>
    </div>
  )
}

export default App;

//merge login component and signup component