const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
         type: String, required: true 
        },
    email: { 
        type: String, required: true, unique: true 
    },
    password: {
         type: String, required: true
         },
    phoneNumber: { 
        type: String, required: true
     },
    type:
     { type: String, enum: ['buyer', 'seller'], default: 'buyer' 
        
     } // Default type is 'buyer'
});

const User = mongoose.model('User', userSchema);

module.exports = User;
