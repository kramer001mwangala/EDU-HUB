const express = require(`express`);
const router = require("./homeroute");
const Router = express.Router();

Router.get(`/aboutus`, (req, res) => {
    res.render(`aboutus`)
});

module.exports = router;