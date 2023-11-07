// Controller for index
const fs = require('fs');
const path = require('path');

module.exports = {
    getCheckoutData(req, res) {
        const url = '../html/checkout.html';
        const html = fs.readFileSync(path.resolve(__dirname, url));
        
        return res.end(html);
    },
  };
