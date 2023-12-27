import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  static sendEmail(email: string, arg1: string, html: string) {
    throw new Error("Method not implemented.");
  }
  static send(email: string, arg1: string, html: string) {
      throw new Error("Method not implemented.");
  }
  private transporter: { sendMail: (arg0: { from: string; to: string; subject: string; html: string; }) => any; };
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async sendEmail(to: string, subject: string, html: string) {
    try {
      await this.transporter.sendMail({
        from: 'your-email@gmail.com',
        to,
        subject,
        html,
      });
    } catch (error) {
      throw new Error('Error sending email.');
    }
  }
}
