import express from 'express';
import con from './config';
import fss from 'fs';
import apiRouter from './api';
import serverRender from './serverRender';
// import axios from 'axios';


const server = express();

server.listen(con.port,con.host, () => {
    console.info('Express Port', con.port, con.host);
});


server.set('view engine', 'ejs');
server.get('/', (req,res) => {
    serverRender()
    .then(content  => {
        res.render('index', {
            content
        });
    })
    .catch(console.error);
});


server.use(express.static('public'));
server.use('/api', apiRouter);
// server.get('/about.jsx', (req, res) => {

//     fss.readFile('./about.html', (err, data) => {
//         res.send(data.toString())
//     });

// });

server.post('/user', (req, res ) => {
    res.send('Data has changed');
});