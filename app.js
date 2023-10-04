const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: true,
}));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

const port = 3000;

app.listen(port, () => {
    console.log("Iam listening do your work");
})