const { use } = require('../app/routes');
const User = require('../models/User')

//REGISTER SERVICE
async function addUser(body, hashPassword){
    const {
        name,
        email,

    } = body;

    const user = new User({
        name,
        email,
        password: hashPassword
    })
    return await user.save();
}

//LOGIN SERVICE
async function getByEmail(email) {
    return await User.findOne({
      email
    });
  }

module.exports = {
    addUser, getByEmail,
}