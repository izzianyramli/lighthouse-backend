const fs = require('fs');

module.exports.ssl = {
    key: require('fs').readFileSync(require('path').resolve(__dirname,'ssl/key.pem')),
    cert: require('fs').readFileSync(require('path').resolve(__dirname,'ssl/cert.pem'))
};