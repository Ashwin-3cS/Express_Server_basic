import express from "express";
const app = express();
const port = 3000; //port is a like door for the server

app.get("/", (req, res) => {
  res.send("<h1>hi</h1>");
});
app.get("/aboutBasu", (req, res) => {
  res.send("He is a lavde ");
});

app.listen(port, () => {
  //3000 is (port)location of the server where we listen for the request from the client-side
  console.log(`Server is running on port ${port}`); //callback function
});
