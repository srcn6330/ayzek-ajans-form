import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle OPTIONS request (CORS preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { fullName, city, email, phone, age } = req.body;

    // Validate required fields
    if (!fullName || !city || !email || !phone || !age) {
      return res.status(400).json({ error: 'Tüm alanlar zorunludur' });
    }

    // Get Resend API Key from environment
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error('RESEND_API_KEY environment variable not set');
      return res.status(500).json({
        error: 'E-posta servisi yapılandırılmamış',
        message: 'Lütfen Vercel Dashboard\'dan RESEND_API_KEY ekleyin'
      });
    }

    // Send email using Resend
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'Ayzek Ajans <onboarding@resend.dev>',
        to: ['ayzekajans@gmail.com'],
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
      console.error('Resend API error:', errorData);
      return res.status(500).json({
        error: 'E-posta gönderilemedi',
        details: errorData
      });
    }

    const emailResult = await emailResponse.json();
    console.log('Email sent successfully:', emailResult);

    return res.status(200).json({
      success: true,
      message: 'Başvurunuz başarıyla gönderildi! ✅',
      emailId: emailResult.id
    });

  } catch (error: any) {
    console.error('Form submission error:', error);
    return res.status(500).json({
      error: 'Başvuru gönderilirken bir hata oluştu',
      details: error.message
    });
  }
}
