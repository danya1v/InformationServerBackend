const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'admin'

})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/get1', (req, res)=> {
    const sqlSelect = 
    'SELECT * FROM adm';
    db.query(sqlSelect, (err, result)=> {
        res.send(result);
    })
}); 
app.get('/api/get2', (req1, res1)=> {
    const sqlSelect = 
    'SELECT * FROM adm1';
    db.query(sqlSelect, (err, result)=> {
        res1.send(result);
    })
}); 

app.listen(3001, ()=> {
    console.log('runing port 3001')
});