const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "sahilramani2021@gmail.com",
    pass: "ejknmszjksglnbto", // Use environment variables for security
  },
});

exports.sendEmail = async function (mail) {
  try {
    console.log(`📩 Sending email to: ${mail}`);

    const info = await transporter.sendMail({
      from: "sahilramani2021@gmail.com", // Custom sender name
      to: mail,
      subject: "Success! Your Message Has Been Delivered 🎉",
      text: "Dear Customer,\n\nThank you for reaching out! Your message has been successfully received. Our team will get back to you shortly.\n\nBest regards,\nRiya Art Infotech",
      html: `
       <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f9f9f9; padding: 30px; border: 1px solid #e0e0e0; border-radius: 15px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); max-width: 600px; margin: 30px auto;">
  <h2 style="color: #007bff; text-align: center; margin-bottom: 20px;">🎉 Message Successfully Delivered!</h2>
  
  <p style="font-size: 16px; color: #333;">Dear Valued Customer,</p>
  
  <p style="font-size: 15px; color: #555; line-height: 1.6;">
    Thank you for contacting <strong style="color: #007bff;">Riya Art Infotech</strong>. 
    We are thrilled to receive your message! Our support team is reviewing your request and will respond as soon as possible.
  </p>
  
  <p style="font-size: 15px; color: #555; line-height: 1.6;">
    📞 For urgent assistance, don't hesitate to reach out to us immediately via WhatsApp!
  </p>

  <div style="text-align: center; margin: 25px 0;">
    <a aria-label="Chat on WhatsApp" href="https://wa.me/9327868002" style="text-decoration: none;" target="_blank">
      <img alt="Chat on WhatsApp" src="WhatsAppButtonGreenLarge.svg" style="width: 200px; height: auto;"/>
    </a>
    <p style="margin-top: 10px; font-size: 14px; color: #28a745;">Chat with us on WhatsApp anytime!</p>
  </div>

  <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">

  <p style="font-size: 15px; color: #555;">Warm Regards,</p>
  <p style="font-size: 16px; font-weight: bold; color: #007bff;">Riya Art Infotech Team</p>

  <div style="text-align: center; margin-top: 30px; font-size: 13px; color: #aaa;">
    © 2025 Riya Art Infotech | All Rights Reserved
  </div>
</div>

      `,
    });

    // console.log(`Message sent successfully! Message ID: ${info.messageId}`);
  } catch (error) {
    console.error(" Error sending email:", error);
  }
};
