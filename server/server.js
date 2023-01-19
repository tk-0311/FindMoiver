const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch')
const mongoose = require('mongoose')

const userRouter = require('./routers/userRouter')
const movieapiRouter = require('./routers/movieapiRouter')

const DBUSERNAE = 'timothy'
const DBPASSWORD = 'm7Kdp2EJyV2AICLb'

const DB_URL= `mongodb+srv://${DBUSERNAE}:${DBPASSWORD}@cluster0.axjjrae.mongodb.net/?retryWrites=true&w=majority`



mongoose.connect(DB_URL);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(express.json())

app.use('/build', express.static(path.join(__dirname, '../build')));



app.use('/user', userRouter);
app.use('/api' ,movieapiRouter)
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.use((err, req, res)=>{
  const defaultErr = {
    log:`express err check the server :: ERR: ${typeof err === 'object' ? JSON.stringify(err): err}`,
    message: "check the server side for more info",
    status: 400,
    err: err
  }
  console.log(err)
  err= Object.assign({},defaultErr, err)
  res.status(err.status).send(err.message)
})


app.listen(6002); 

//change all the res.send to res.json
//modularize all the functionality
// create middleware functions taht handle repeated api calls
