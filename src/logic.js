const mongoose = require("mongoose");
const assert = require("assert");

mongoose.Promise = global.Promise;

// const db = mongoose.connect("mongodb+srv://sanjoyk:Sanjoy@1234)(*@cluster0-wel0c.mongodb.net/contact-management?retryWrites=true&w=majority");

function toLower(v){
  return v.toLowerCase();
}

const contactSchema = mongoose.Schema({
  firstname: { type: String, set: toLower },
  lastname : { type: String, set: toLower },
  phone: { type: String, set: toLower },
  email: { type: String, set: toLower }
});

const Contact = mongoose.modelNames("Contact", contactSchema);
const addContact = ( contact ) =>{
  console.info("Contact ==", contact);
  // Contact.create(contact, (err)=>{
  //   assert.equal(null, err);
  //   console.info("New Contact Added");
  //   db.disconnect();
  // })
}

const getContact = ( name )=>{
  const search = new RegExp(name, "i");
  console.info("finding info", name);
  // Contact.find({ $or: [{firstname: search}, { lastname: search}]})
  //   .exec((err, contact)=>{
  //     assert.equal(null, err);
  //     console.info(contact);
  //     console.info(`${contact.length} matches`);
  //     db.disconnect();
  //   })
}

module.exports = { addContact, getContact };
