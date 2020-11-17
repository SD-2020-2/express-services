'use strict';

/*
Authors:
Linda Matilde Rodriguez -
Cristhian Chamorro - 201511134
Oscar Augusto Rojas Cruz - 201521379
*/
const express = require('express');
const server = express();
const port = 3000;

const bodyParser = require('body-parser');

server.use(bodyParser.json());

let users = [
	{ name: 'Linda', code: 135 },
	{ name: 'Cristhian', code: 387 },
	{ name: 'Oscar', code: 379 },
	{ name: 'Ana', code: 321 },
	{ name: 'Juan', code: 123 },
	{ name: 'Alex', code: 345 },
	{ name: 'Jhon', code: 683 },
	{ name: 'Maria', code: 547 },
	{ name: 'Danna', code: 782 },
	{ name: 'Alejandra', code: 431 },
];

server.get('/', (req, res) => {
	res.send('Hello World');
});

server.get('/users', (req, res) => {
	res.send(users);
});

server.post('/users', (req, res) => {
	let bodyR = req.body;
	let name = bodyR.name;
	let idUser = bodyR.code;
	let user = { name: name, code: idUser };
	users.push(user);
	res.send(users);
});

server.put('/users/:name', (req, res) => {
	let bodyRequest = req.body;
	let reqName = req.params.name;
	let found = users.find((element) => element.name == reqName);
	if (found != undefined) {
		found.code = Math.floor(Math.random() * 1000);
		res.status(200);
		res.send({
			message: 'OK 200',
			found,
		});
	} else {
		res.status(404);
		res.send({
			message: 'Name NOT found 404',
		});
	}
});

//MI servicio de libros, pide un libro y si esta en la lista no lo agrega
let books = [
	{ book: 'la divina comedia', code: 111 },
	{ book: 'takeuchi', code: 112 },
	{ book: 'narnia', code: 113 },
	{ book: 'el camino', code: 114 },
	{ book: 'Juana de arco', code: 115 },
];

server.get('/books', (req, res) => {
	res.send(books);
});

server.post('/books', (req, res) => {
	var i;
	let bodyR = req.body;
	let bookN = bodyR.book;
	let codeB = bodyR.code;
	let book = { book: bookN, code: codeB };
	var aux = false;
	for (i = 0; i < books.length; i++) {
		if (books[i].book == bookN) {
			aux = true;
		}
	}
	if (aux) {
		res.send('El libro no se agrego');
	} else {
		books.push(book);
		res.send('El libro ' + bookN + ' se agrego correctamente');
	}
});

server.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
