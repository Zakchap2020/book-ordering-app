const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json());

//Routes

//Create a book

app.post('/books', async (req, res) => {
	try {
		console.log(req.body);
	} catch (err) {
		console.error(err.message);
	}
	//await
});

//Get all books

//Get a book

//Post a book

//Order a book
app.listen(5000, () => {
	console.log('server has started on port 5000');
});
