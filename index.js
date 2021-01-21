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

function isData(result) {
    if (result.length === 24){
        return (result.substr(0, 10),
        console.log('aa'))
    } else {
        return result;
    }
    
}

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/get1', (req, res)=> {
    const sqlSelect = 
    'SELECT FIO, podr, chtoto4 FROM adm';
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
app.get('/api/get3', (req2, res2)=> {
    const sqlSelect = 
    'SELECT * FROM adm2';
    db.query(sqlSelect, (err, result)=> {
        res2.send(result);
    })
});
app.get('/api/get4', (req3, res3)=> {
    const sqlSelect = 
    'SELECT * FROM adm3';
    db.query(sqlSelect, (err, result)=> {
        res3.send(result);
    })
});
app.get('/api/get10', (req3, res3)=> {
    const sqlSelect = 
    'SELECT * FROM adm10';
    db.query(sqlSelect, (err, result)=> {
        res4.send(result);
    })
});
app.get('/api/get11', (req4, res4)=> {
    const sqlSelect = 
    'SELECT * FROM adm10';
    db.query(sqlSelect, (err, result)=> {
        res5.send(result);
    })
});

app.listen(3001, ()=> {
    console.log('runing port 3001')
});

