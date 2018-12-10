var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('../config/config');

//setting transport
let transport = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  },
  tls: {
    rejectUnauthorized:false
  }
}

let transporter = nodemailer.createTransport(transport)

transporter.verify((error, success)=> {
  if(error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
})

router.post('/', (req, res, next) => {
  let name = req.body.name
  let email = req.body.email
  let message = req.body.message
  let content = `name: ${name} \n email: ${email} \n message: ${message}`

let mail = {
  from: name,
  to: 'info@wekacreative.co.nz',
  subject: 'New message from contact form',
  text: content
}

transporter.sendMail(mail, (err, data)=> {
  if(err) {
    res.json({
      msg: 'fail'
    })
  } else {
    res.json({
      msg: 'success'
    })
  }
})
})


module.exports= router;