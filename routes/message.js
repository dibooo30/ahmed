const router = require('express').Router();
const Message = require('../modules/message');

router.post('/', (req, res, next)=>{
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const newMessage = new Message({
        name:name,
        email:email,
        message:message
    });
    Message.create(newMessage, (err, message)=>{
        if (err) {
            res.json({success:false, errMSG:err.message})
        }else{
            res.json({success:true, MSG:'sending success'})
        }
    })

})


module.exports = router;