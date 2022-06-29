const nodemailer = require("nodemailer");

exports.sendEmail = async(options) =>{
    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "7230074a9adb98",
          pass: "f2db62c2f228c0"
        }
      });

    const mailOptions = {
        from :process.env.SMPT_MAIL,    
        to:options.email,
        subject:options.subject,
        text:options.message
    }
    await transport.sendMail(mailOptions)
}