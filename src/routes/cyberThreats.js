const express = require(`express`);
const router = express.Router();
router.get(`/cyberThreats`, (req, res) => {
    res.render(`cyberThreats`)
})
module.exports = router;