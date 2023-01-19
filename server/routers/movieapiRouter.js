const express = require('express')
const fetch = require('node-fetch')
const { route } = require('./userRouter')
const router = express.Router()

//API Key
const API_KEY = 'b8c3ef418e102b1513b8e53296427113'

router.get('/', async (req, res, next) => {
  try{
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    const data = await response.json()
    res.send(data)

  }catch(err) {
    console.log(err,"./server/routers/movieapiRouter.js error occurred during fetching data from api route: /api/ ")
    next(err)
  }
})

// `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=b8c3ef418e102b1513b8e53296427113&language=en-US&page=1`

module.exports = router;