const Pool = require('pg').Pool;

const pool = new Pool({
	user: 'postgres',
	password: 'Chappyinnz20',
	host: 'localhost',
	port: '5432',
	database: 'bookorderingapp',
});

module.exports = pool;
