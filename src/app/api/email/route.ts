import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

const nodemailer_email = process.env.NODEMAILER_EMAIL;
const password = process.env.NODEMAILER_PASS;

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: nodemailer_email,
      pass: password,
    },
  });

  const mailOptions: Mail.Options = {
    from: nodemailer_email,
    to: nodemailer_email,
    subject: `Message from ${name} (${email})`,
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Email Subject</title>
        <style>
            /* Add CSS styles here */
            body {
                font-family: Arial, sans-serif;
                background-color: #EADBC8;
                margin: 0;
                padding: 0;
            }
            .container {
                margin: 0 auto;
                padding: 20px;
                background-color: #EADBC8;
                border-radius: 5px;
            }
            h1 {
                color: #0F2C59;
            }
            p {
                color: #0F2C59;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Message received from ${name}!</h1>
            <p>${name} has the following email address: ${email}</p>
            <p>${message}</p>
        </div>
    </body>
    </html>
    `,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();

    return NextResponse.json({
      message: "Your message has been sent. I'll be in touch shortly",
    });
  } catch (err) {
    return NextResponse.json(
      {
        message:
          'Something went wrong. Contact me by email: michaelaltinisik1@gmail.com',
      },
      { status: 500 }
    );
  }
}
