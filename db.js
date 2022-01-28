const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "pass14785963",
    database: "todo_database",
    host: "localhost",
    port: 5432
});

module.exports = pool;