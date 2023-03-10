import {useCallback} from "react"


export const nextCard = (user) => useCallback(async (e) => {

    const like = e.target.innerText === 'like'
    const movie_id = e.target.className;
    console.log(movie_id);
    const data = {
      like: like,
      user_id: user.user_id,
      movie_id: movie_id
    }
    console.log(like)
    fetch('/user/like', {
      method:'PATCH', 
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res=>res.json())
    .then(data=>{
      console.log(data)
    }).catch(err=> {
      console.log(err)
    })
    await fetch('/user/match/find', {
      method:'PATCH', 
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    useCount(count+1)
    
})