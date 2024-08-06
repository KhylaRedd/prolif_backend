const express = require("express");
const cors = require("cors");
const artWorksController = require("./controllers/artWorksController")
const artistController = require('./controllers/artistController')

const app = express()

app.use(express.json());
app.use(cors());
app.use('/artists', artistController);
app.use('/artworks', artWorksController);


app.get('/',(req,res)=>{
    res.send("Prolif lives here")
});

app.get("*", (req, res) => {
    res.status(404).send("page not found");
});

module.exports = app;