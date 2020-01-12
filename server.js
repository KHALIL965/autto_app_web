var express = require('express');
var app = express();
var path = require('path');
var cors = require('cors');
app.use(cors());
var http = require("http")
/* Modules for https*/
var https = require('https');
var fs = require('fs');

/* Code for https */
// var options = {
//     key: fs.readFileSync('./ssl/STAR_M_1.KEY'),
//     cert: fs.readFileSync('./ssl/STARMO_1.CRT')
// };

app.use(express.static(path.join(__dirname, 'build')));

// console.log(__dirname);

app.get('/*', (req, res) => {
    res.sendFile(__dirname + "/build/index.html");
})
let port = process.env.NODE_ENV || 7181;

https.createServer(app).listen(port, () => {
    console.log('Server is running on 7181')
});

// app.listen(port,()=>console.log(`server is running on port ${port}`));