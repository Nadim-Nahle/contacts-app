const {addUserContact} = require('../services/ContactService')
const Contact = require('../models/Contact')

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

//DELETE CONTACT CONTROLLER
async function deleteContacts(req, res) {
    try{
        const contact = await Contact.findById(req.params.id);
        if(!contact){
            return res.status(404).send()
        }
        await contact.remove();
        res.status(200).send({data: true })
    }
    catch(error){
        res.status(400).send(error.message);
    }
         
    
}
//UPDATE CONTACT CONTROLLER
async function updateContact(req, res) {
    try{
        const contact = await Contact.findById(req.params.id)
        if(!contact){
            return res.status(404).send()
        }
        Object.assign(contact, req.body);
        contact.save();
        res.send({data:contact})
    }
    catch(error){
        res.status(400).send(error.message);
    }
         
    
}


module.exports = {
    addContact, getContacts, deleteContacts, updateContact
}