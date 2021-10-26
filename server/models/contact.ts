import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// define the schema, Inside the schema is mongoose definition language 
const ContactSchema = new Schema({
    contactName: String,
    contactNumber: String,
    emailAddress: String
}, {
    collection: "contacts" // name of the collection 
});

//Create a mudule base on the schema
const Model = mongoose.model("Contact", ContactSchema);

export default Model;