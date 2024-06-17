import env from "dotenv";
import mysql from 'mysql';
import mysql2 from 'mysql2';
env.config();

const db = mysql2.createPool({
	host: process.env.PG_HOST,
	user: process.env.PG_USER,
	database: process.env.PG_DATABASE,
	password: process.env.PG_PASSWORD

	// host: 'localhost',
	// user: 'u228689109_dikshantkamble',
	// database: 'u228689109_SafeZen',
	// password: 'Dikshant@2312',
});

// console.log(db);

export default db;
