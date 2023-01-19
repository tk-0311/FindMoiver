import React, {useState} from 'react'



const Card = (props) => {

  const {id, original_title, overview, poster_path} = props.movie
  // const url = imagefetch(poster_path)
  return (
    <div className='card' id={props.id}>
      <img src={`https://image.tmdb.org/t/p/w342${poster_path}`}>{props.imgs}</img>
      <h4>{original_title}</h4>
      <p>{overview}</p>
      <div>
      <button className={id} onClick={props.nextCard}>like</button>
      <button className={id} onClick={props.nextCard}>dislike</button>
      </div>
    </div>
  )
}

export default Card;