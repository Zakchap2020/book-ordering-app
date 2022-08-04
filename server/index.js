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
		const { description } = req.body;
		const newBook = await pool.query(
			'INSERT INTO books (description) VALUES($1) RETURNING *',
			[description]
		);
		res.json(newBook.rows[0]);
		console.log(req.body);
	} catch (err) {
		console.error(err.message);
	}
	//await
});

//Get all books
app.get('/books', async (req, res) => {
	try {
		const allBooks = await pool.query('SELECT * FROM books');
		res.json(allBooks.rows);
	} catch (err) {
		console.error(err.message);
	}
});
//Get a book
app.get('/books/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const allBooks = await pool.query(
			'SELECT * FROM books WHERE book_id = $1',
			[id]
		);
		console.log(allBooks.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

//Update a book
app.put('/books/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const { description } = req.body;
		const updateTodo = await pool.query(
			'UPDATE todo SET description = $1 WHERE todo_id =$2',
			[description, id]
		);
		console.log(allBooks.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});
app.listen(5000, () => {
	console.log('server has started on port 5000');
});
