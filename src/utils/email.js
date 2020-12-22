module.exports = {
    sendEmails(receiver, subjectEmail, body) {
        var nodemailer = require('nodemailer');
        const sender = ""
        
        var transporter = nodemailer.createTransport({
            service: 'outlook',
            auth: {
                user: sender,
                pass: ''
            }
        });

        var mailOptions = {
            from: sender,
            to: receiver,
            subject: subjectEmail,
            text: body
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return response.json(error);
            } else {
                return response.json(info.response);
            }
        });

    }
}