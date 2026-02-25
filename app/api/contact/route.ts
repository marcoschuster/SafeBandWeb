import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Create transporter using Gmail
    // For this to work, you need to set up environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password (not regular password)
      },
    })

    // Email to you (the site owner)
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to yourself
      subject: `SafeBand Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0891b2;">New Contact Form Submission</h2>
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 10px;">
            <h3 style="color: #374151;">Message:</h3>
            <p style="color: #6b7280; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-radius: 10px;">
            <p style="font-size: 12px; color: #9ca3af;">
              This email was sent from the SafeBand website contact form.
              <br>
              Reply directly to this email to respond to: ${email}
            </p>
          </div>
        </div>
      `,
      replyTo: email, // So you can reply directly to the sender
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Optional: Send confirmation email to the user
    const confirmationMail = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thank you for contacting SafeBand',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0891b2;">Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>We've received your message and will get back to you as soon as possible.</p>
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Your Message:</strong></p>
            <p style="color: #6b7280; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p>Best regards,<br>The SafeBand Team</p>
        </div>
      `,
    }

    await transporter.sendMail(confirmationMail)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Email error:', error)
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    )
  }
}
