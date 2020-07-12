var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'a0918189209@gmail.com',
        pass: '70503eric'
    }
})
var mailOptions = {
    from: 'a0918189209@gmail.com',
    to: 'wushienlu@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Hello! Wushien Lu.'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error)
    }else{
        console.log('Email sent: ' + info.response)
    }
})