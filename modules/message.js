const mongoose = require('mongoose');
var newMessage = mongoose.Schema({
    name:{
        type:String,
        required: [true, 'name is required']
    },
    email:{
        type:String,
        required: [true, 'email is required']
    },
    message:{
        type:String,
        required: [true, 'message is required']
    },
    send_date: { 
      type: Date, 
      default: Date.now
     }
});

const Message = module.exports = mongoose.model('Message', newMessage);

