const express = require('express');
const route = express.Router();

route.get("/", (req, res) => {
    res.render(`home`);
});

route.get(`/aboutus`, (req, res) => {
    res.render(`aboutus`)
});

route.get(`/cyberAttacksAndDisinformation`, (req, res) => {
    res.render(`cyberAttacksAndDisinformation`)
});

route.get(`/cyberThreats`, (req, res) => {
    res.render(`cyberThreats`)
});

route.get(`/Donate`, (req,res) => {
    res.render(`Donate`);
});

route.get(`/getInvolved`, (req, res) => {
    res.render(`getInvolved`)
});

route.get(`/News`, (req, res) => {
    res.render(`News`)
});

route.get(`/trainingAndDevelopment`, (req, res) => {
    res.render(`trainingAndDevelopment`)
});

module.exports = route;
