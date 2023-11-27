const express = require(`express`);
const router = express.Router();

router.get(`News`, (req, res) => {
    res.render(`News`)
});

module.exports = router;