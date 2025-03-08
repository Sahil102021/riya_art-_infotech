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

exports.sendEmail = async function(mail) {
  try {
    console.log(`📩 Sending email to: ${mail}`);

    const info = await transporter.sendMail({
      from: 'sahilramani2021@gmail.com', // Custom sender name
      to: mail,
      subject: "Success! Your Message Has Been Delivered 🎉",
      text: "Dear Customer,\n\nThank you for reaching out! Your message has been successfully received. Our team will get back to you shortly.\n\nBest regards,\nRiya Art Infotech",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #007bff;">🎉 Message Successfully Delivered!</h2>
          <p>Dear Customer,</p>
          <p>Thank you for contacting <strong>Riya Art Infotech</strong>. We have received your message, and our team will get back to you shortly.</p>
          <p>For any urgent queries, feel free to reach out to us.</p>
          <p style="margin-top: 20px;">Best Regards,</p>
          <p><strong>Riya Art Infotech Team</strong></p>
        </div>
      `,
    });

    // console.log(`Message sent successfully! Message ID: ${info.messageId}`);
  } catch (error) {
    console.error(" Error sending email:", error);
  }
}
