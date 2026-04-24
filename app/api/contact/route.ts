import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!process.env.RESEND_API_KEY) {
            return Response.json({ error: "Missing RESEND_API_KEY" }, { status: 500 })
        }

        const { data, error } = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: "ignasprakapas@protonmail.com", // your email
            subject: `New message from ${name}`,
            replyTo: email,
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        if (error) {
            console.error("Resend error:", error)
            return Response.json({ error }, { status: 500 })
        }

        return Response.json({ success: true });
    } catch (err) {
        return Response.json({ error: "Something went wrong" }, { status: 500 });
    }
}