const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    email: String,
    note: String,
})
module.exports = mongoose.model('users', userSchema);