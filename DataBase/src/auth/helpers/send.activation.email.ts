import { EmailService } from "src/email/email.service";
import activationEmailTemplate from "src/email/templates/activation-email";

export async function sendActivationEmail(
  email: string, 
  token: string, 
  fullName: string,
  emailService: EmailService,
  
) {
  const encodedToken = Buffer.from(token).toString('base64');
  const activationLink = `http://192.168.1.18:5173/activate/${encodedToken}`;
  const html = activationEmailTemplate(activationLink, fullName); 
  await emailService.sendEmail(email, 'Activate Your Account', html);
}