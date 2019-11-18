const router = require('express').Router();
const accountSID = process.env.TWILIO_ACCOUNT_SID;
const phoneModel = require('../model/phone');
const authToken = process.env.TWILIO_AUHT_TOKEN;
const bodyParser = require('body-parser');

const client = require('twilio')(accountSID,authToken);
const http = require('http');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

router.post('/register' , (req,res) => {

    let from =  req.body.From;
    let to = req.body.To;
    let msgBody = req.body.Body; 
    phoneModel.findOne({phoneNo : from } , (err, message)  =>{
        console.log("MESSAGE");
        console.log(message);
        res.end();
    })

    // const twiml = new MessagingResponse();
    // twiml.message('Lets register to twilio...');

    // res.writeHead(200 , {'Content-Type' : 'text/xml' });
    // res.end(twiml.toString());

});



// client.messages.create({
//     to : process.env.MY_PHONE_NO,
//     from : process.env.TWILIO_PHONE_NO,
//     body : 'Hello from Twilio',
// })
// .then((message) => console.log(message.sid))



module.exports = router;