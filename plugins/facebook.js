const axios = require("axios");
const { cmd } = require("../command");

// ADEEL-MD stylish captions (ROTATING)
const fbTitles = [
`╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭
│ ╌─̇─̣⊰ 𝚳𝐒𝚵𝐋𝚫-𝐂𝚮𝐔𝚰-𝚾𝚳𝐃 ⊱┈─̇─̣╌
│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣
│❀ 📥 Facebook Video
│❀ ✅ Download Successful
│❀ ⚡ Quality: HD
╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝚳𝐒𝚵𝐋𝚫-𝐂𝚮𝐔𝚰-𝚾𝚳𝐃`,

`╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭
│ ╌─̇─̣⊰ ᗩᗪᗴᗴᒪ ᙭ᗰᗪ ⊱┈─̇─̣╌
│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣
│❀ 🎬 Facebook Video Ready
│❀ 🚀 Fast Download
│❀ 📦 No Watermark
╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝚳𝐒𝚵𝐋𝚫-𝐂𝚮𝐔𝚰-𝚾𝚳𝐃`
];

let fbTitleIndex = 0;

cmd({
  pattern: "fb",
  alias: ["facebook", "fbvideo"],
  react: "📥",
  desc: "Download Facebook videos",
  category: "download",
  use: ".fb <facebook url>",
  filename: __filename
}, async (conn, mek, m, { from, reply, args }) => {
  try {
    const fbUrl = args[0];

    if (!fbUrl || !fbUrl.includes("facebook.com")) {
      return reply(
`╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭
│ ╌─̇─̣⊰ 𝚳𝐒𝚵𝐋𝚫-𝐂𝚮𝐔𝚰-𝚾𝚳𝐃 ⊱┈─̇─̣╌
│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣
│❌ Invalid Facebook URL
│✎ Example:
│ .fb https://facebook.com/xxxx
╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭`
      );
    }

    await conn.sendMessage(from, { react: { text: "⏳", key: m.key } });

    await conn.sendMessage(from, {
      text:
`╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭
│ ╌─̇─̣⊰ 𝚳𝐒𝚵𝐋𝚫-𝐂𝚮𝐔𝚰-𝚾𝚳𝐃 ⊱┈─̇─̣╌
│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣
│🔍 Processing Link
│📥 Fetching Video
╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭`
    }, { quoted: mek });

    // 🔥 ARSLAN FACEBOOK API
    const apiUrl = `https://arslan-apis.vercel.app/download/facebook?url=${encodeURIComponent(fbUrl)}`;
    const { data } = await axios.get(apiUrl, { timeout: 30000 });

    if (!data || data.status !== true || !data.download_url) {
      return reply(
`╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭
│ ╌─̇─̣⊰ 𝚳𝐒𝚵𝐋𝚫-𝐂𝚮𝐔𝚰-𝚾𝚳𝐃 ⊱┈─̇─̣╌
│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣
│❌ Download Failed
│⚠️ Video may be private
╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭`
      );
    }

    const caption = fbTitles[fbTitleIndex];
    fbTitleIndex = (fbTitleIndex + 1) % fbTitles.length;

    await conn.sendMessage(from, {
      video: { url: data.download_url },
      caption,
      mimetype: "video/mp4"
    }, { quoted: mek });

    await conn.sendMessage(from, { react: { text: "✅", key: m.key } });

  } catch (err) {
    console.error("FB ERROR:", err);
    reply(
`╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭
│ ╌─̇─̣⊰ 𝚳𝐒𝚵𝐋𝚫-𝐂𝚮𝐔𝚰-𝚾𝚳𝐃 ⊱┈─̇─̣╌
│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣
│❌ Facebook Download Error
│⏳ Try again later
╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭`
    );
  }
});
