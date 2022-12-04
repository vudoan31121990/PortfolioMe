const { addContact } = require('./contactController');

module.exports = function(app) {
    app.post('/api/contact', addContact);
}