const express = require(`express`);
const router = express.Router();

router.get(`/cyberAttacksAndDisinformation`, (req, res) => {
    res.render(`cyberAttacksAndDisinformation`)
});

module.exports = router;