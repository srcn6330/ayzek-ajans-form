import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-a4ba0dfa/health", (c) => {
  return c.json({ status: "ok" });
});

// Form submission endpoint
app.post("/make-server-a4ba0dfa/submit-form", async (c) => {
  try {
    const body = await c.req.json();
    const { fullName, city, email, phone, age } = body;

    // Validate required fields
    if (!fullName || !city || !email || !phone || !age) {
      return c.json({ error: "Tüm alanlar zorunludur" }, 400);
    }

    // Send email using Resend
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (!resendApiKey) {
      console.error("RESEND_API_KEY environment variable not set");
      return c.json({ error: "E-posta servisi yapılandırılmamış" }, 500);
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Ayzek Ajans Form <onboarding@resend.dev>",
        to: ["ayzekajans@gmail.com"],
        subject: "Yeni Başvuru - Ayzek Ajans",
        html: `
          <h2>Yeni Form Başvurusu</h2>
          <p><strong>İsim Soyisim:</strong> ${fullName}</p>
          <p><strong>Şehir:</strong> ${city}</p>
          <p><strong>E-posta:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone}</p>
          <p><strong>Yaş:</strong> ${age}</p>
          <hr>
          <p style="color: #666; font-size: 12px;">Bu e-posta Ayzek Ajans başvuru formundan gönderilmiştir.</p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json();
      console.error("Resend API error:", errorData);
      return c.json({ error: "E-posta gönderilemedi" }, 500);
    }

    // Store submission in KV store for record keeping
    const submissionId = `submission_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    await kv.set(submissionId, {
      fullName,
      city,
      email,
      phone,
      age,
      timestamp: new Date().toISOString(),
    });

    return c.json({ 
      success: true, 
      message: "Başvurunuz başarıyla gönderildi" 
    });

  } catch (error) {
    console.error("Form submission error:", error);
    return c.json({ 
      error: "Başvuru gönderilirken bir hata oluştu",
      details: error.message 
    }, 500);
  }
});

Deno.serve(app.fetch);