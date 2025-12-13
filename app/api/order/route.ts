// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
//     const CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

//     const message = `
// 🛒 NEW ORDER RECEIVED

// 📦 Product: ${body.productTitle}
// 🔗 URL: ${body.productUrl}

// 👤 Name: ${body.name}
// 📧 Email: ${body.email}
// 📱 Phone: ${body.phone}
// 🏠 Address: ${body.address}

// ⏰ ${new Date().toLocaleString()}
// `;

//     const telegramRes = await fetch(
//       `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           chat_id: CHAT_ID,
//           text: message,
//         }),
//       }
//     );

//     const data = await telegramRes.json();

//     if (!data.ok) {
//       console.error("TELEGRAM ERROR:", data);
//       return NextResponse.json({ error: "Telegram error" }, { status: 500 });
//     }

//     return NextResponse.json({ success: true });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// }
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, address, productTitle, productUrl } =
      await req.json();

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

    const message = `
🛒 *NEW ORDER*
--------------------

📦 *Product:* ${productTitle}
🔗 *URL:* ${productUrl}

👤 *Name:* ${name}
📧 *Email:* ${email}
📱 *Phone:* ${phone}
🏠 *Address:* ${address}
`;

    // 1️⃣ Send to Telegram
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    // 2️⃣ Send to Google Sheets Webhook
    await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        address,
        productTitle,
        productUrl,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}
