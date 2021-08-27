import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("hi")
})

app.listen(5000,(req, res) => {
    console.log("server is ready baby");
})