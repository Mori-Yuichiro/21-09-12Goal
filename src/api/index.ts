import express from 'express';
import mysql from 'mysql2';

import { DB_INFO } from '@/components/constants/constants';

const app = express();

const GET_ALL_QUERY = 'SELECT * FROM todos;';

const connection = mysql.createConnection({
    host: DB_INFO.host,
    user: DB_INFO.user,
    database: DB_INFO.database,
});

app.get('/', (req, res) => {
    connection.query(GET_ALL_QUERY, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.render('index.html');
    });
});

app.listen(3000);