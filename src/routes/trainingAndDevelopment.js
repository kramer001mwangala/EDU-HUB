const express = require(`express`);
const router = express.Router();

router.get(`/trainingAndDevelopment`, (req, res) => {
    res.render(`trainingAndDevelopment`)
});


module.exports = router;