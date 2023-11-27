const express = require(`express`);
const router = express.Router();

router.get(`/getInvolved`, (req, res) => {
    res.render(`getInvolved`)
});
module.exports = router;