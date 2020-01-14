const express = require('express');
const router = express.Router();

router.get('/whoami', function (req, res) {
    var ip = (req.headers['x-forwarded-for'] || req.connection.remoteAddress).match(/\d+.\d+.\d+.\d+/);
    var language = req.headers['accept-language'];
    var software = req.headers['user-agent'];
    res.json({ ipaddress: ip ? ip[0] : '', language, software });
})

module.exports = router;