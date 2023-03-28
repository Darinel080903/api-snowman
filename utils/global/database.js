const mysql = require('mysql');

module.exports = mysql.createConnection({
    host: 'rds-snowman.cmj3u3fmuohw.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'piloto123',
    port:3306,
    database: 'snowman'
})