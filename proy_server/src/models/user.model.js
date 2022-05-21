const mongoose = require('mongoose');

const user = {
    name: {
        type: String,
        require: true,
        min: 3
    },
    lastname: {
        type: String,
        require: true,
        min: 3
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    active: {
        type: Boolean,
        require: true
    },
    avatar: {
        type: String,
        require: false
    }
};

const userSchema = mongoose.Schema(user);

module.exports = mongoose.model('UserCollection', userSchema);