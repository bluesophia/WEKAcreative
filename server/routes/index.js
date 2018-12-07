var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('../config/config');

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success)=> {
  if(error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
})

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${content}`


var mail = {
  from: name,
  to: 'imsophia0313@gmail.com',
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
// const reactExpressMiddleware = require('react-express-middleware')
// const ReactComponent = require('./component.jsx')

// router.get('/message', function(req, res, next) {
//   res.json('Welcome To React');
// });

// // router.all('/about', function(req, res, next) {
// //   res.sendFile('build/index.html', { root: global });
// // });


// router.get('*', (req, res) => {
//   res.sendFile('build/index.html', { root: global });
// });

module.exports = router;

