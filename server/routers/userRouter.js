const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')
const User = require('../model/userModel')
const User_movie = require('../model/user_movie')
const {saveMatch , findMatch, getMatch}= require('../controllers/matchController')
const {saveLikedMovie} = require('../controllers/movieController')

router.post('/signup', async(req, res, next) => {
  try{
    const {username, password} =req.body
    const newUser = new User({
      user_id: username ,
      password: password
    })
    const response = await newUser.save()
    res.locals = response
    res.send(res.locals)
  }catch(err) {
    const error = {
      err: err,
      message: 'signup error please fix your server'
    }
    next(err)
  }
})


router.post('/login', async (req,res, next)=> {
  try {
    // console.log(req.body)
    const user = await User.findOne({user_id: req.body.username})
    console.log(user)
    
    res.send(user)
  }catch(err) {
    console.log("login router err check server/routers/userRouter");
    next(err)
  }
})

// sends the match screen data to the client
router.get('/like', getMatch, (req, res)=> {
  res.json(res.locals);
})


// onClick the lived moive is save to the db
router.patch('/like', saveLikedMovie, (req, res) => {
  res.json(res.locals);
})

//
router.patch('/match/find', findMatch, saveMatch, (req,res)=>{
  res.json(res.locals);
})


module.exports = router;

// $ne not equal
// $elemMatch
//{ $inc: { no_of_likes: 1 }, "$push": { "users": userInfo } }