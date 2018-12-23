let express = require('express');
let router = express.Router();
let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kateryna.bohatova@gmail.com',
        pass: '********'
    }
});

/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});

// POST http://localhost:3000/send
// parameters sent with
router.post('/', function(req, res) {
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;

    let mailOptions = {
        from: 'kateryna.bohatova@gmail.com',
        to: 'kateryna.bohatova@gmail.com',
        subject: 'New contact request',
        text: 'User ' + name + ' with ' + email + ' send message: ' + message,
        html: 'User ' + name + ' with ' + email + ' send message: ' + message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Письмо отправлено')
    });
    res.redirect('/contact');
});


module.exports = router;





