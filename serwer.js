const express = require('express');
const moment = require('moment-timezone');
const app = express();
const port = 3000;

const authorName = 'Jan Kowalski';
const serverStartTime = moment().tz('Europe/Warsaw').format();

app.listen(port, () => {
    console.log(`Serwer został uruchomiony. 
    Autor: ${authorName}. 
    Port: ${port}. 
    Data uruchomienia: ${serverStartTime}`);
});

app.get('/', (req, res) => {
    const ip = req.ip;
    const date = moment().tz(moment.tz.guess()).format();
    res.setHeader('Content-Type', 'text/html');
    res.end(`<html><body><p>Twoj adres IP to: ${ip}</p><p>Aktualna data i godzina w Twojej strefie czasowej to: ${date}</p></body></html>`);
});
