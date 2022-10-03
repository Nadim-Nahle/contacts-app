const Contact = require('../models/Contact')

//ADD CONTACT SERVICE
async function addUserContact(body,req,res){
    const {
        fname,
        phone,
        email,
        relation,
        

    } = body;


    const contact = new Contact({
        fname,
        phone,
        email,
        relation,
        
        
        
    })
    return await contact.save();
}



module.exports = {
    addUserContact
}