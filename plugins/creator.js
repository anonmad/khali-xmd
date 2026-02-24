const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "creator",
    alias: ["coder", "dev", "owner"],
    desc: "Show bot creator information",
    category: "info",
    react: "🐯",
    filename: __filename
}, async (conn, mek, m, { from, sender, reply }) => {
    try {

        const ownerInfo = {
            name: "MSELACHUI-TECH",
            number: "+260769355624",
            photo: "https://files.catbox.moe/qyskpc.jpg",
            bio: "Founder & Developer of 𝚳𝐒𝚵𝐋𝚫-𝐂𝚮𝐔𝚰-𝚾𝚳𝐃³⁰³"
        };

        const caption = `
*╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*
*│ ╌─̇─̣⊰ 𝚳𝐒𝚵𝐋𝚫-𝐂𝚮𝐔𝚰-𝚾𝚳𝐃 ⊱┈─̇─̣╌*
*│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣*
*│❀ 👑 𝐂𝐫𝐞𝐚𝐭𝐨𝐫:* ${ownerInfo.name}
*│❀ 📞 𝐍𝐮𝐦𝐛𝐞𝐫:* ${ownerInfo.number}
*│❀ 📝 𝐁𝐢𝐨:* ${ownerInfo.bio}
*│*
*│❀ 🤖 𝐁𝐨𝐭:* ${config.BOT_NAME}
*│❀ ⚡ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧:* ${config.VERSION || "5.0.0"}
*╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*

> 📌 ᴘᴏᴡᴇʀ ʙʏ 𝚳𝐒𝚵𝐋𝚫-𝐂𝚮𝐔𝚰-𝚾𝚳𝐃
`;

        await conn.sendMessage(from, {
            image: { url: ownerInfo.photo },
            caption,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363423019441144@newsletter',
                    newsletterName: '𝚳𝐒𝚵𝐋𝚫-𝐂𝚮𝐔𝚰-𝚾𝚳𝐃',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (err) {
        console.error("CREATOR ERROR:", err);
        reply(
`*╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*
*│ ╌─̇─̣⊰ 𝚳𝐒𝚵𝐋𝚫-𝐂𝚮𝐔𝚰-𝚾𝚳𝐃 ⊱┈─̇─̣╌*
*│❌ 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐄𝐫𝐫𝐨𝐫*
*│⏳ Please try again later*
*╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*

> 📌 ᴘᴏᴡᴇʀ ʙʏ 𝚳𝐒𝚵𝐋𝚫-𝐂𝚮𝐔𝚰-𝚾𝚳𝐃
        );
    }
});
