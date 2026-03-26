const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "MSELACHUI-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU1oVmhkZkxGeCtLNThDS25hYmdhSXYwR3dZdmFmNWJSWTNUakJCYkVsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicHJuVytwT2hQSTNDamJMbVJsZU53SjdPMHVGcmZOMTMyMjRyVExFckJ4QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1REhWK25SeHF6bTVHaDBOUndNUXVBVGQ1ZFZhZ2tKL1pHL25jZGNLTUVJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3YXJTNnVualh3ZUp1bVhzOFl1Z3p4K1VrcG5uS3RGdGpMM1JZVjExdUEwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtBelB5MS9BN1hRYkpwSnhIS01JSHJWSEpINDkyYnorS3FOYzJaUG5EbkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJha1FmODROejRoKy8vaWVOYmNONnNicjJmSkNWNm1tUHljVThBdE92Mnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUNSMnM3K2lUczUwVW1uQ09tOVVya1lMdGhDS0V5VlM1U1AwMW9rSXprbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0RIQW5TSzBVeldTeUFXN0FQNTVuNUx6THlmM2dyUzlvNzM2S1p5cUFXZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkMwSHVNVHpLVkVERFZYandHNWFqMDBOMjRzMVNMUTRkT21yTG9YQ2ZBbDhPT3hYQ2FyR1h6dGt3N3BaWXRNbW1LNE13M0h4eHBWcEEyM2dQT284cGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUzLCJhZHZTZWNyZXRLZXkiOiJtUzhJY3M5ZFFFemlMNzRtb0V5WlZTamtPdWRYQUh5T1Q2aThSb0tyb3BNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NTYxOTYxNTA2NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUVCRTQ3M0E2RTdCRTJCMTYwMTgyNzMzQUNFQjIxMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzc0NTI4MTYwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTU2MTk2MTUwNjVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTU3ODY3N0U4QjI0QkUzM0JDRUQzODcxN0E2NkExRTcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3NDUyODE2MH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1NjE5NjE1MDY1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1NDQzNzk2MUNDMTA5QjY2QUJBQzI0NDcyRDc4Njc4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzQ1MjgxNjB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NTYxOTYxNTA2NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTBBQzU3QjdGQjQwOURFQzE3QkRGREQ3QjAzNEJBNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzc0NTI4MTYxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJtd1QtZG42cFE5bWg3clQ4c0hFQm1BIiwicGhvbmVJZCI6ImFiYzgzOTEzLTg4MTEtNGRjNi1hNzVjLWZmOGY5NWIwNWEyNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyMVlUSGp2SVIxMTdFUlVrL2dYaWROM1hVd0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiLzBMWUcyQ1JrV24xYXk2V0tGeWVIdzR0Wk9NPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBaRFBIRVFRIiwibWUiOnsiaWQiOiIyNTU2MTk2MTUwNjU6NDNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QivCdkJrwnZCl8J2Qoi3wnZCo8J2Qki7wnZCf8J2QqPCdkK7wnZCn8J2QnTAiLCJsaWQiOiIyNjgzMTE1MjI3NDY0ODk6NDNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPdWI2N1lHRUk3TmxNNEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI3VlQ3K0UxRXJBM1Q3UzJIdTRQSlNZdlErSXZTaGpKRzI1d2liMWdvL3lRPSIsImFjY291bnRTaWduYXR1cmUiOiJFTExGNUV3NC9DODUvVWJUYTEzYzd6S202ejRla05DWUt0bElVZ0pER1BKRnZhd1licjFzZFZ0RVA4ekhLQ3JubHZydnlEekRucFZPRHlKYUtqRWxEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoic1BzbHZUc09HZ1NmZjRmOVlScVJHUFVzTzVPZjBJY3BYdTlKa3NadEpjQ0hKd1ZkRW44Y1pENVUwYWhBVE91d3RMeUhOd1ZXNDdZdVk5dFpzRytJaUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU2MTk2MTUwNjU6NDNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZTFVKy9oTlJLd04wKzB0aDd1RHlVbUwwUGlMMG9ZeVJ0dWNJbTlZS1A4ayJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBZ1MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzc0NTI4MTU2LCJsYXN0UHJvcEhhc2giOiIzbWwxalMiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJPYyJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝐊𝐀𝐋𝐈-𝐌𝐃𝟏*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://res.cloudinary.com/dzfc5yopz/image/upload/file_00000000d82c722faaf51d22b7f83ade_l03mq3.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝐊𝐀𝐋𝐈-𝐌𝐃𝟏",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "𝐊𝐀𝐋𝐈-𝐌𝐃𝟏",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "255619615065",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "KHALI",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐊𝐀𝐋𝐈-𝐌𝐃𝟏*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://res.cloudinary.com/dzfc5yopz/image/upload/file_00000000d82c722faaf51d22b7f83ade_l03mq3.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'ᗩᗰ *𝐊𝐀𝐋𝐈-𝐌𝐃𝟏*❤️‍🔥",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "255619615065",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
