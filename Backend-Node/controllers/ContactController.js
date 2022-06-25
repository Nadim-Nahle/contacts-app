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
        res.status(500).send(error.message)
    }   
    
}


//GET CONTACT CONTROLLER
async function getContacts(req, res) {
    try{
        const contact = await Contact.find({owner:req.user._id})
        if(!contact){
            return res.status(404).send()
        }
        res.status(200).send(contact)
    }
    catch(error){
        res.status(400).send(error.message);
    }
    
      
    
}


module.exports = {
    addContact, getContacts
}