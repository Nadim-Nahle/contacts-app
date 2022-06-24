const {addUserContact} = require('../services/ContactService')

//ADD CONTACT CONTROLLER
async function addContact(req, res) {
    
    try{
        console.log(req.body);


        const addContactResult = await addUserContact(req.body);
        return res.send({ contactID: addContactResult._id });
        
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {
    addContact
}