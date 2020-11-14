"use strict";

/*
Authors:
Linda Matilde Rodriguez -
Cristhian Chamorro - 
Oscar Augusto Rojas Cruz - 201521379
*/
const express = require("express");
const server = express();
const port = 3000;

const bodyParser = require("body-parser");

server.use(bodyParser.json());

let users = [
  { name: "Linda", code: 135 },
  { name: "Cristhian", code: 387 },
  { name: "Oscar", code: 379 },
  { name: "Ana", code: 321 },
  { name: "Juan", code: 123 },
  { name: "Alex", code: 345 },
  { name: "Jhon", code: 683 },
  { name: "Maria", code: 547 },
  { name: "Danna", code: 782 },
  { name: "Alejandra", code: 431 },
];

server.get("/", (req, res) => {
  res.send("Hello World");
});

server.get("/users", (req, res) => {
  res.send(users);
});

server.post("/users", (req, res) => {
  let bodyR = req.body;
  let name = bodyR.name;
  let idUser = bodyR.code;
  let user = { name: name, code: idUser };
  users.push(user);
  res.send(users);
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
