import { username, password, hostname, port, alias } from './dbinfo';

module.exports = {
	port: process.env.PORT || 5000,
	db: `mongodb://${username}:${password}@${hostname}:${port}/${alias}`,
	db_dev:`mongodb://localhost:27017/${alias}`
}