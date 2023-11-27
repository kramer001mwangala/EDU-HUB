const express = require(`express`);
const mongoose = require(`mongoose`);
const ejs = require(`ejs`);
const path = require(`path`);

//Route importation
const homeRoute = require(`./routes/homeroute`);
const aboutUs = require(`./routes/aboutUs`);
const attacksAndDisinformations = require(`./routes/attacksAndDisinformations`);
const cyberThreats = require(`./routes/cyberThreats`);
const donate = require(`./routes/donate`);
const joinUs = require(`./routes/joinUs`);
const news =require(`./routes/news`)
const training = require(`./routes/trainingAndDevelopment`);

const server = express();

server.set(`view engine`, `ejs`);
server.set(`views`, path.join(__dirname, 'views'));
server.use(express.static(path.join(__dirname, `public`)));
server.use('/',homeRoute);
server.use(aboutUs);
server.use(attacksAndDisinformations);
server.use(cyberThreats);
server.use(donate);
server.use(joinUs);
server.use(news);
server.use(training);

server.listen(5000, () => {
    console.log(`server is up`)
})