import React, {useState, useContext, createContext}from 'react'
import CardBox from './Cardbox'
import LoginBox from './loginbox'
import Match from './match'



export const userContext = createContext()
function App(props) {
  const [user, userState] = useState(null)
  const [match, changeMatch] = useState('Match')
  let render
  return (
    <div>
      <userContext.Provider value={[user, userState, match, changeMatch]}>
      <LoginBox />
      {match !== 'Match' ?  <Match key="what" />:<CardBox key="box"/>}
      </userContext.Provider>
    </div>
  )
}

export default App;

//merge login component and signup component