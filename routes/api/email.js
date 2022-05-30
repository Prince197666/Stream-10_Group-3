const express = require('express');
const router = express.Router();
const Mailer = require('nodemailer');
require('dotenv').config();


const smtpConfig = Mailer.createTransport({
    service: 'gmail',
    port: 46,
    secure: true,
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD
    }
  });

// @route POST api/email/moderator/
// @description Post email to moderators
// @access Public
router.post('/moderator', (req, res) => {
    let message = {
      from: process.env.EMAIL_ADDRESS,
      to: '',
      subject: 'New article was posted',
      text: 'Please check a submitted article',
    };

    req.body.map((moderator) => {
      console.log(moderator.email);
      message.to = moderator.email;
      smtpConfig.sendMail(message, (error, data) => {
        if(error) console.log(error)
        console.log(data);
      });
    });
});

// @route POST api/email/analyst/
// @description Post email to analysts
// @access Public
router.post('/analyst', (req, res) => {
    let message = {
      from: process.env.EMAIL_ADDRESS,
      to: '',
      subject: 'An article was passed',
      text: 'Please check a passed article',
    };

    req.body.map((analyst) => {
      console.log(analyst.email);
      message.to = analyst.email;
      smtpConfig.sendMail(message, (error, data) => {
        if(error) console.log(error)
        console.log(data);
      });
    });
});

// @route POST api/email/accept/
// @description Post email to a user
// @access Public
router.post('/accept', (req, res) => {
    let message = {
      from: process.env.EMAIL_ADDRESS,
      to: req.body.to,
      subject: 'Your article post was registered',
      text: `Your article post "${req.body.title}" was registered`,
    };

    smtpConfig.sendMail(message, (error, data) => {
      if(error) console.log(error)
      console.log(data);
    });
});

// @route POST api/email/reject/
// @description Post email to a user
// @access Public
router.post('/reject', (req, res) => {
    let message = {
      from: process.env.EMAIL_ADDRESS,
      to: req.body.to,
      subject: 'Your article post was rejected',
      text: `Your article post "${req.body.title}" was rejected`,
    };

    smtpConfig.sendMail(message, (error, data) => {
      if(error) console.log(error)
      console.log(data);
    });
});

module.exports = router;