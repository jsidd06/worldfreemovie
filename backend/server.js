dotenv.config();
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();


mongoose.connect(process.env.DB_STRING,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((req) => {
  console.log("database is ready");
})

const newSchema = new mongoose.Schema({
  movieName: {
    type: 'string',
  },
  movieDescription: {
    type: 'string',
  },
  movieImage: {
    type: 'string',
  },
  movieUrl: {
    type: 'string',
  }
})

const userData = mongoose.model("userData",newSchema);

app.post('/admin', (req, res) => {
  new userData({
    movieName:req.body.movieName,
    movieDescription:req.body.movieDescription,
    movieImage:req.body.movieImage,
    movieUrl:req.body.movieUrl,
  }).save(function(err){
    if(!err) {
      res.send("sucess your data");
    } else{
      console.log(err.message);
      res.send("please try again");
    }
  })
})

app.get("/", (req, res) => {
  res.send("Im here baby");
});


app.listen(5000, (req, res) => {
  console.log("server is ready baby");
});
