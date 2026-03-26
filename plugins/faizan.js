const { cmd } = require("../command");
const os = require("os");

cmd({
    pattern: "chui",
    alias: ["chui"],
    desc: "chui full introduction",
    category: "info",
    react: "🐯",
    filename: __filename
}, async (conn, mek, m, { from }) => {
    try {

        const uptime = process.uptime();
        const h = Math.floor(uptime / 3600);
        const min = Math.floor((uptime % 3600) / 60);
        const sec = Math.floor(uptime % 60);

        const text = `
╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭
│ ╌─̇─̣⊰ 𝐊𝐀𝐋𝐈-𝐌𝐃𝟏 _³⁰³_ ⊱┈─̇─̣╌
│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣
│❀ 👤 *Name:* Khali 
│❀ 🧑‍💼 *Nick:* ¢нσℓσ
│❀ 🎂 *Age:* 21
│❀ 🧬 *Caste:* RedEYES
│❀ 🌍 *Country:* Tanzania 🇹🇿
│❀ 🏙️ *City:* (GUNGU KGM TZ)
│
│❀ 🤖 *Bot Name:* 𝐊𝐀𝐋𝐈-𝐌𝐃𝟏
│❀ 👑 *Owner:* khali
│❀ 📞 *Owner No:* +255619615065
│❀ 🔣 *Prefix:* .
│❀ ⚙️ *Mode:* ᴘᴜʙʟɪᴄ
│❀ 🔌 *Baileys:* ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ
│
│❀ ⏳ *Uptime:* ${h}h ${min}m ${sec}s
│❀ 💻 *Platform:* ${os.platform()}
╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭

> 📌 ᴘᴏᴡᴇʀ ʙʏ *𝐊𝐀𝐋𝐈-𝐌𝐃𝟏*
`;

        await conn.sendMessage(from, {
            text,
            contextInfo: {
                mentionedJid: [m.sender]
            }
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
    }
});
