require('dotenv').config()
const user = require("./routes/user");
const cors = require("cors");
const express = require("express");
const { default: mongoose } = require('mongoose');

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", user);

mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log("DB CONNECTED")
    })
    .catch(err => {
        console.log(err)
    })

app.get("/", (req, res) => {
    res.send("Working")
})


app.listen(PORT, () => {
    console.log(`app working on port ${PORT}...`);
})
