import React,{ useEffect, useState , useContext} from 'react'
import Card from './card'
import { userContext } from './app'
import { nextCard } from '../service/cardfetch'

function CardBox(props) {

  const next = nextCard(user)
// async function nextCard(e) {

//       const like = e.target.innerText === 'like'
//       const movie_id = e.target.className;
//       console.log(movie_id);
//       const data = {
//         like: like,
//         user_id: user.user_id,
//         movie_id: movie_id
//       }
//       console.log(like)
//       fetch('/user/like', {
//         method:'PATCH', 
//         headers:{
//           'Content-type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       }).then(res=>res.json())
//       .then(data=>{
//         console.log(data)
//       }).catch(err=> {
//         console.log(err)
//       })
//       await fetch('/user/match/find', {
//         method:'PATCH', 
//         headers:{
//           'Content-type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       })
//       useCount(count+1)
      
//   }

  // useContext data
  const [user] = useContext(userContext)

  // states for the move list
  const [list, changeList] = useState([])
  const [count, useCount] = useState(null);
  const [movie, changeMovie] = useState(null)
  // get the list of the moves 
  
  // useEffect content tracking 
  useEffect(async () => {
    const response = await fetch('/api')
    console.log(list)
    const lists = await response.json()
    changeList(lists);
    useCount(0)
  },[])
  // update 
  useEffect(()=> {
    count !== null ? changeMovie(list.results[count]) : null
  },[count])
  let loading
  !list.results ? loading = <div>Loading</div> : null;

  return (
    <div id='cardBox'>
      {movie ? <Card key={`Card_id_${movie.id}`} nextCard={next} movie={movie} /> : loading}
    </div>
  )
}

export default CardBox;