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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923010405688";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923010405688";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_27_09_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDUyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDczLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjExLFxuICAgICAgICA0MixcbiAgICAgICAgMTI1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAzMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYsXG4gICAgICAgIDU4LFxuICAgICAgICA2NixcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE3LFxuICAgICAgICA3OSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDUzLFxuICAgICAgICA0NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NixcbiAgICAgICAgMTAzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQxLFxuICAgICAgICA1OCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDE0LFxuICAgICAgICA3MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxOCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0NixcbiAgICAgICAgODMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDg2LFxuICAgICAgICAzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjksXG4gICAgICAgIDc1LFxuICAgICAgICA1OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDg4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMixcbiAgICAgICAgNjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzksXG4gICAgICAgIDg2LFxuICAgICAgICA1MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1MixcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTksXG4gICAgICAgIDkyLFxuICAgICAgICA0NixcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYRG4zYkxUNU55VkROSk9YMVZiL2tjd2QwelhVNXRISlZFdFNudXdVVmtNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAxMDQwNTY4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkE5Q0FEQkM3RTE5N0Q5NERGNzg3QTdEOUMzQjZEODlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI2MTExNjU4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDEwNDA1Njg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFNThDNDgzQUVBRkMwQzgzQTE2MDhDMjA5MzEyMjIwOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjYxMTE2NThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMTA0MDU2ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjkwMjEwMEVCQzIzMTM2QzVENjU5N0RCQTI1NThGNkRCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNjExMTY2M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAxMDQwNTY4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkMwODUwMkM2MDk4QTZENzIwRTFBNzM0QjRCNUJDODNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI2MTExNjYzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImEyN21fSjFOU25DZHBDMlpucHVoNVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDcyM2U3MTItNDFmMy00NDM5LWI4MjYtZTZlZmI5ZDZmNGQ3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NCxcbiAgICAgIDExMixcbiAgICAgIDI4LFxuICAgICAgMjI1LFxuICAgICAgMTYzLFxuICAgICAgMTIzLFxuICAgICAgMTE2LFxuICAgICAgNDIsXG4gICAgICAxODYsXG4gICAgICAxNDksXG4gICAgICA2NCxcbiAgICAgIDkwLFxuICAgICAgMjUxLFxuICAgICAgMTk5LFxuICAgICAgMTcwLFxuICAgICAgMjA3LFxuICAgICAgMTgsXG4gICAgICAxNzcsXG4gICAgICAxNzksXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ0LFxuICAgICAgMTEzLFxuICAgICAgMzMsXG4gICAgICA4NCxcbiAgICAgIDE5NyxcbiAgICAgIDIwNixcbiAgICAgIDI3LFxuICAgICAgMjYsXG4gICAgICA1LFxuICAgICAgMzQsXG4gICAgICAyNDUsXG4gICAgICA0MCxcbiAgICAgIDE5OCxcbiAgICAgIDg5LFxuICAgICAgMTYyLFxuICAgICAgMTQsXG4gICAgICAxNjIsXG4gICAgICA3LFxuICAgICAgNyxcbiAgICAgIDExMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEMjE3WEM2UFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDEwNDA1Njg4OjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzOTUzNTYyNjk4NTQ5OTo0OUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJTVU5OWSBNQUxJS1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ012cXZQUUhFS1cvaWJjR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMS80WXkyc1RQaTM1S3BJSTc3dTRzaENUZitzU0I3UUN2OTJxdnlkU1hCaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJad1lKcGEwdDh4WWtxeVI3THoxS1pIVG5RR1E0VFppMUJkSU5xd0FYMC84dkJ4NVFZSTY1SDJhVDZhL1lmUGU1NzZRaXpML2hIY0RxaUtQSkNiVjVCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2cFhSbzlmOHI0YndjQ1lPTnhXNzVqQjhPR01UOU45cUlHemNJQ01iQjA2a2kyR1JUNFRzSFY0RzBEWDQ5WUwycHkxNEhPNENDUGhiZW5KSXh2WnZpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMTA0MDU2ODg6NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI2MTExNjU3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTkc0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFORzQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDZjZDT2pRbXRUQWJ4TSt2TUg2N2Q1dVlhYktUeE5BRE5EQlFZTkt4NmNRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMjMzMTQ1MDcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNTcxMzQwNDQ0MlwifSIKfQ=="  // PUT your SESSION_ID 


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
