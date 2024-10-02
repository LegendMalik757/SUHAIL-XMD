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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_26_10_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTcxLFxuICAgICAgICA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDcwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAzNixcbiAgICAgICAgMTMxLFxuICAgICAgICAyOSxcbiAgICAgICAgNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA2MixcbiAgICAgICAgMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3LFxuICAgICAgICAyNixcbiAgICAgICAgNDUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTksXG4gICAgICAgIDc5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNixcbiAgICAgICAgMTQyLFxuICAgICAgICA2OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI3LFxuICAgICAgICA4MixcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM1LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjMsXG4gICAgICAgIDk3LFxuICAgICAgICA0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDczLFxuICAgICAgICAxMzYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyOCxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgODEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI2LFxuICAgICAgICAzNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgODksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzksXG4gICAgICAgIDM3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDksXG4gICAgICAgIDIxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgNDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExLFxuICAgICAgICAzOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQzLFxuICAgICAgICAyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDM1LFxuICAgICAgICA5MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxNEowSFFaT2tWWmdYelhod1Vxcy9qaXFWZjdrYU9OYUxPWXU0RVdxSUd3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAxMDQwNTY4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiREVGQUYyN0ZFMzA1QTcwNzAyNDIwN0RBQUIzMkQzQTFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI3ODc1NjAyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDEwNDA1Njg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzMzE1QUI2RjVBMUU0QUYyQUI4REE0NkQyNDA5MjlDQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjc4NzU2MDNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibUw3cGVRaUZRUXlJX3RzZkJIOFk4UVwiLFxuICBcInBob25lSWRcIjogXCJjMDkzMzIxMy0zNDIzLTRjODQtYmQ2OC00MTc4NTM1YWVmNjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzEsXG4gICAgICA5LFxuICAgICAgMjEzLFxuICAgICAgOTUsXG4gICAgICAxMTEsXG4gICAgICA4MCxcbiAgICAgIDg4LFxuICAgICAgMTE3LFxuICAgICAgMTc0LFxuICAgICAgMixcbiAgICAgIDUyLFxuICAgICAgMTg1LFxuICAgICAgMjA5LFxuICAgICAgMjMzLFxuICAgICAgNjksXG4gICAgICAyNDksXG4gICAgICAzMCxcbiAgICAgIDU3LFxuICAgICAgMTk4LFxuICAgICAgNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDIsXG4gICAgICA0LFxuICAgICAgMTI4LFxuICAgICAgMTQ3LFxuICAgICAgMTI5LFxuICAgICAgMjMsXG4gICAgICAyMTUsXG4gICAgICAxMzAsXG4gICAgICA3MixcbiAgICAgIDE2LFxuICAgICAgODgsXG4gICAgICAxMjksXG4gICAgICAxMDQsXG4gICAgICA2NSxcbiAgICAgIDcyLFxuICAgICAgMTYzLFxuICAgICAgMjEyLFxuICAgICAgMTQ1LFxuICAgICAgMjM1LFxuICAgICAgMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUVdYMVpIQjVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAxMDQwNTY4ODo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzk1MzU2MjY5ODU0OTk6NjBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiU1VOTlleX14pKSDwn5WK77iP8J+kjVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00zcXZQUUhFSTJVOWJjR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMS80WXkyc1RQaTM1S3BJSTc3dTRzaENUZitzU0I3UUN2OTJxdnlkU1hCaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmcVJhaVhmUVFYQmhXSzcyZ1VkN1hzcC9JYi9lRk9ySjVrWHU1c25sYUcyc3pMYTJseXF5MHBoODdrY3J0SDhUbjltY0tRbkZZR3ZyT3ZZOXJJTm9Cdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCaHcxQ1dCeWhyNnR5bnBySzU1eFlyTVpyNXAyNk43Sjl6dmJoN09iay8vSUFnbmMvTU1KQ0JkTnZOM1p2YkFmRFlSNFgxN0pWZ2tNQitBVEM4SzVEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMTA0MDU2ODg6NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3ODc1NjAxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRUQwXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFRDAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJab3dRcWY2cVpYRE5TSmVVWVBVRFJNaDFyVi9WM3YzeVd2ek9wakVQQWNvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMjMzMTQ1MDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjc1MzAzMDUwODdcIn0iCn0="  // PUT your SESSION_ID 


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
