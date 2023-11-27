const express = require(`express`);
const router = express.Router();

router.get(`/Donate`, (req,res) => {
    res.render(`Donate`);
})

module.exports = router;