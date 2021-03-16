const express = require('express');
const path = require("path")
const app = express();

app.get("/" , (req, res) => {
    res.status(200);
    res.contentType("text/html");
    res.sendFile(path.join(__dirname, "/index.html"));
})

app.get("/style.css" , (req, res) => {
    res.sendFile(__dirname + "/style.css");
})

app.get("/main.css" , (req, res) => {
    res.sendFile(__dirname + "/main.css");
})

app.get("/Madina.jpg" , (req, res) => {
    res.status(200);
    res.contentType("image/jpg");
    res.sendFile(path.join(__dirname, "/Madina.jpg"));
})

app.get("/Zhansaya.jpg" , (req, res) => {
    res.status(200);
    res.contentType("image/jpg");
    res.sendFile(path.join(__dirname, "/Zhansaya.jpg"));
})

app.get("/Daulet.jpg" , (req, res) => {
    res.status(200);
    res.contentType("image/jpg");
    res.sendFile(path.join(__dirname, "/Daulet.jpg"));
})

app.get("/Aida.jpg" , (req, res) => {
    res.status(200);
    res.contentType("image/jpg");
    res.sendFile(path.join(__dirname, "/Aida.jpg"));
})

app.get("/Adema.jpg" , (req, res) => {
    res.status(200);
    res.contentType("image/jpg");
    res.sendFile(path.join(__dirname, "/Adema.jpg"));
})

app.get("/about" , (req, res) => {
    res.status(200);
    res.contentType("text/html");
    res.sendFile(path.join(__dirname, "/about.html"));
})

app.get("/about/team_photo" , (req, res) => {
    res.status(200);
    res.contentType("image/jpg");
    res.sendFile(path.join(__dirname, "/about/team_photo.jpg"));
})

app.get("/video",(req, res)=>res.redirect('https://www.youtube.com/watch?v=yXS8iNKqsCM&ab_channel=RLFComps'))
app.listen(3000)

console.log("Server is working correctly!");