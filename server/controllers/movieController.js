const User_movie = require('../model/user_movie')


module.exports = {
  saveLikedMovie: async (req,res,next)=> {
    try {
      const {like, user_id, movie_id} = req.body;
      if (like) {
        console.log(req.body)
        newMovieliked = new User_movie({
          movie_id: movie_id,
          user_id: user_id
        })
        const response = await newMovieliked.save()
        console.log(response)
        res.locals.savedmovie = response
        next()
      }
    }catch(err) {
      console.log(err)
      next(err)
    }
  }
}