const {addUserContact} = require('../services/ContactService')
const Contact = require('../models/contact')

//ADD CONTACT CONTROLLER
async function addContact(req, res) {
    
    const contact = new Contact({...req.body,owner:req.user._id})
    try{
        
        await contact.save()
        res.status(201).send(contact)
    }
    catch(error){
        res.status(500).send(e.message)
    }
    
    
}

module.exports = {
    addContact
}