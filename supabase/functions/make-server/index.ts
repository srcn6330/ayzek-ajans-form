import { Hono } from "npm:hono@4";
import { cors } from "npm:hono@4/cors";

const app = new Hono();

// Enable CORS for all routes
app.use("/*", cors({
  origin: "*",
  allowHeaders: ["Content-Type", "Authorization"],
  allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  exposeHeaders: ["Content-Length"],
  maxAge: 600,
}));

// Health check endpoint
app.get("/health", (c) => {
  return c.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Form submission endpoint
app.post("/submit-form", async (c) => {
  try {
    const body = await c.req.json();
    const { fullName, city, email, phone, age } = body;

    // Validate required fields
    if (!fullName || !city || !email || !phone || !age) {
      return c.json({ error: "Tüm alanlar zorunludur" }, 400);
    }

    // Get Resend API Key from environment
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (!resendApiKey) {
      console.error("RESEND_API_KEY environment variable not set");
      return c.json({ 
        error: "E-posta servisi yapılandırılmamış",
        message: "Lütfen Supabase Dashboard'dan RESEND_API_KEY ekleyin" 
      }, 500);
    }

    // Send email using Resend
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Ayzek Ajans <onboarding@resend.dev>",
        to: ["ayzekajans@gmail.com"],
        subject: `🎉 Yeni Başvuru - ${fullName}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
                .info-row { background: white; padding: 15px; margin: 10px 0; border-radius: 8px; border-left: 4px solid #9333ea; }
                .label { font-weight: bold; color: #9333ea; }
                .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>🌟 Yeni Form Başvurusu</h1>
                  <p>Ayzek Ajans Başvuru Formu</p>
                </div>
                <div class="content">
                  <div class="info-row">
                    <span class="label">👤 İsim Soyisim:</span> ${fullName}
                  </div>
                  <div class="info-row">
                    <span class="label">🏙️ Şehir:</span> ${city}
                  </div>
                  <div class="info-row">
                    <span class="label">📧 E-posta:</span> ${email}
                  </div>
                  <div class="info-row">
                    <span class="label">📱 Telefon:</span> ${phone}
                  </div>
                  <div class="info-row">
                    <span class="label">🎂 Yaş:</span> ${age}
                  </div>
                </div>
                <div class="footer">
                  <p>📅 Gönderilme Tarihi: ${new Date().toLocaleString('tr-TR')}</p>
                  <p>Bu e-posta <strong>www.ayzekajans.online</strong> başvuru formundan otomatik olarak gönderilmiştir.</p>
                </div>
              </div>
            </body>
          </html>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json();
      console.error("Resend API error:", errorData);
      return c.json({ 
        error: "E-posta gönderilemedi",
        details: errorData 
      }, 500);
    }

    const emailResult = await emailResponse.json();
    console.log("Email sent successfully:", emailResult);

    return c.json({ 
      success: true, 
      message: "Başvurunuz başarıyla gönderildi! ✅",
      emailId: emailResult.id
    });

  } catch (error) {
    console.error("Form submission error:", error);
    return c.json({ 
      error: "Başvuru gönderilirken bir hata oluştu",
      details: error.message 
    }, 500);
  }
});

// Catch all for undefined routes
app.all("*", (c) => {
  return c.json({ 
    error: "Endpoint bulunamadı",
    availableEndpoints: ["/health", "/submit-form"]
  }, 404);
});

Deno.serve(app.fetch);
