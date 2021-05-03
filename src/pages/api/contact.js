import nodemailer from "nodemailer";

export default async (req, res) => {
  require("dotenv").config();

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.send,
      subject: `Contact from submission from ${name}`,
      html: `<p>You have a new contact form submission</p><br>
          <p><strong>Name: </strong> ${name}</p><br>
          <p><strong>Email: </strong> ${email}</p><br>
          <p><strong>Message: </strong> ${message}</p><br>
          `,
    });
  } catch (e) {
    console.log(e);
  }
  res.status(200).json(req.body);
};
