const userModel = require('../models/user.model');

class UserService {
    async createUser(user) {
        userModel(user).save();
        return { user };
    }
}

module.exports = UserService;