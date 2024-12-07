const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "996999056529";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "996999056529";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_25_12_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzksXG4gICAgICAgIDUzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE1LFxuICAgICAgICA2MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjksXG4gICAgICAgIDM1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNixcbiAgICAgICAgODIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4LFxuICAgICAgICAzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDU1LFxuICAgICAgICA0NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjksXG4gICAgICAgIDUsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5NixcbiAgICAgICAgODUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI5LFxuICAgICAgICA3MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMyLFxuICAgICAgICA4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDgsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI1LFxuICAgICAgICA5OCxcbiAgICAgICAgOSxcbiAgICAgICAgMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDY4LFxuICAgICAgICA1OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDczLFxuICAgICAgICA1OCxcbiAgICAgICAgODYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA2MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDMzLFxuICAgICAgICAzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjJFMVhNYUFCN3dmNmZwSU9KTEE5RHVsWTZDcFpiN3lYbll1bXFwRjEzOHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInlJeHNwaTFaU20tWjB5X3o1QU1XN3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWFmNWI0MjYtZjYwYS00OTA2LTllYzMtMTQ5MjY1NDAwNWRmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM2LFxuICAgICAgMTU4LFxuICAgICAgMjEyLFxuICAgICAgMjA4LFxuICAgICAgNTYsXG4gICAgICAxNDYsXG4gICAgICAxNixcbiAgICAgIDE4NCxcbiAgICAgIDE1MixcbiAgICAgIDU3LFxuICAgICAgNjIsXG4gICAgICAyMzgsXG4gICAgICA0NSxcbiAgICAgIDE5LFxuICAgICAgMjcsXG4gICAgICAyNSxcbiAgICAgIDIsXG4gICAgICAxNTYsXG4gICAgICAyNTIsXG4gICAgICAxMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDYsXG4gICAgICAxMDYsXG4gICAgICAyMjksXG4gICAgICA4LFxuICAgICAgMTc2LFxuICAgICAgMjUzLFxuICAgICAgMTY4LFxuICAgICAgMjA0LFxuICAgICAgMjQ1LFxuICAgICAgMzMsXG4gICAgICAyNTUsXG4gICAgICAxOTksXG4gICAgICAyNixcbiAgICAgIDEzMyxcbiAgICAgIDEwMyxcbiAgICAgIDE2MixcbiAgICAgIDEyNixcbiAgICAgIDEyMSxcbiAgICAgIDQxLFxuICAgICAgMTQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjc5TENTQk44XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5OTY5OTkwNTY1Mjk6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwk4ap4oCiU1VOTlnigKLwk4aqIFxcbuKAolxcbuKAolxcbuKAolxcbuKAolxcbuKAolxcbuKAolxcbuKAolxcbuKAolxcbuKAolxcbuKAolxcbuKAolxcbuKAolxcbuKAolxcbuKAolxcbuKAolxcbuKAolxcbuKAolxcbuKAolxcbuKAolxcbuKAolxcbuKAolxcbuKAolxcbuKAolxcbuKAolxcbuKAolxcbuKAolxcbuKAolxcbvCThqnigKJBV0FO4oCi8JOGqlwiLFxuICAgIFwibGlkXCI6IFwiNzQ2MjU2MjcyMDE1Mzg6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFNSNXFNQ0VKUGgwTG9HR0EwZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWbzI2TXdZc0M2MW8wVW1nTnh6SU1vRjY0VFFHVTR2ZWlVWm95b1R1VWs0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklXN2FNWkxBeG1XS3F1aVlVcVNzbmlUM3dBSjNNT2lqYlNMempHaS9aektNRUFGenFJMWRuWlpZMVpxTGJYMjdMbGlWN3VzNThzdFgxa3pEaUQ4R0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImJtclAvZUtVRWpUdldvekMyUTAzblEvQVV2ZFNlamtweE1YbUFjWkNuRzBCRzAwU1V1SW05QmtJTE14TzN2cnh2d01ZZW9HU2hzWXRxZVVKSnFJcENRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk5Njk5OTA1NjUyOToxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM1NzA3MTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFKzNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUUrMy5qc29uIjogIntcImtleURhdGFcIjpcIktmdDBycThkRWhFenRpZnhSNENPR0xDTE5yTUZyM0swS01qM2FnN2Q3R009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjExOTQ0NjkyLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "〆Sᴜɴɴʏ᭄Mᴀʟɪᴋ࿐",
  packname: process.env.PACK_NAME || "〆Sᴜɴɴʏ᭄Mᴀʟɪᴋ࿐",
  botname : process.env.BOT_NAME  || "〆Sᴜɴɴʏ᭄Mᴀʟɪᴋ࿐",
  ownername:process.env.OWNER_NAME|| "〆Sᴜɴɴʏ᭄Mᴀʟɪᴋ࿐",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LAN〆Sᴜɴɴʏ᭄Mᴀʟɪᴋ࿐env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
