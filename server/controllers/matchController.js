const User_movie = require('../model/user_movie')
const Match = require('../model/matchModel')
const User = require('../model/userModel')

module.exports = {

  getMatch: async (req, res, next) => {
    const {user_id} = req.query
    const response = await Match.find({user1_id:user_id})
    const user = await User.findOneAndUpdate({user_id:user_id}, {Matched: [response]})
    console.log(user)
    res.locals.user = user
    res.locals.user_ids = response;
  },
  
  findMatch: async (req,res, next) => {
    try{
      console.log('ran')
      const {user_id, movie_id} = req.body;
      console.log(req.body)
      const response = await User_movie.find({
        movie_id: movie_id
      })
      const data = response
      if (response !== null)
      res.locals.match = data;
      return next()
    }catch(err) {
 
    }
  },

  saveMatch: async (req,res,next) => {
    if (res.locals.matchs !== null) {
      const {user_id, movie_id} = req.body;
      // console.log(res.locals.match)
      res.locals.matchs =[]
      for (let pMatch of res.locals.match) {
        if (pMatch.user_id !== user_id) {
          console.log(pMatch)
          const newMatch = new Match({
            movie_id: pMatch.movie_id,
            user1_id: user_id,
            user2_id: pMatch.user_id
          })
          const response = await newMatch.save();
          res.locals.matchs.push(response);
        }
      }
      return next()
    }else {
      const err= {
        log: "match was not found could not save to db",
        messgae: "you will be lonely",
        err: 'match not found'
      }
      return next(err)
    }
  }
}