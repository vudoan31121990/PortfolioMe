const mongoose = require("mongoose");
const User = require('./user');

addContact = async(req, res, next) => {
    try {
        let name = req.body.name;
        let email = req.body.email;
        let note = req.body.note;
        let user = new User({
            _id: new mongoose.Types.ObjectId(),
            name: name,
            email: email,
            note: note
        })
        user.save().then(() => {
            res.json({success: true})
        })
    } catch(error) {
        const err = new Error(error.message);
        return next(err);
    }
}

module.exports = {
    addContact
}