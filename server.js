require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;


app.use(express.json());
app.use(cors());


app.use((req, res, next) => {
    console.log("We just got a request!");
    next();
});


app.listen(PORT, ()=> {
    console.log(`The server is up on port ${PORT}`);
});

