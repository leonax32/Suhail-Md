const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254702391934";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_34_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NixcbiAgICAgICAgMTg2LFxuICAgICAgICA3NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgODEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjM4LFxuICAgICAgICA2NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1NixcbiAgICAgICAgMjI1LFxuICAgICAgICAzMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MCxcbiAgICAgICAgOTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODAsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY4LFxuICAgICAgICA3OSxcbiAgICAgICAgODcsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ3LFxuICAgICAgICA3MSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIzLFxuICAgICAgICA2NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1MixcbiAgICAgICAgNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDMxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NixcbiAgICAgICAgMTcwLFxuICAgICAgICA4MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEsXG4gICAgICAgIDExNixcbiAgICAgICAgOTgsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDk1LFxuICAgICAgICA2MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTcsXG4gICAgICAgIDIyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDYyLFxuICAgICAgICA3OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMixcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIwLFxuICAgICAgICA2NixcbiAgICAgICAgNTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDksXG4gICAgICAgIDQyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDkxLFxuICAgICAgICA2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiemY4V05jd09aMGI3RWZmYnQxcVpPS1lRVklRZ3NaYmdhOXlZR3EwdVVrND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MDIzOTE5MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE3RkNEQUI4NkUyRUY2NzI4NTk2ODJBRkJFNDVBMkNGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDE5MDAzNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzSjRnM092YlJVLXdFdTZPU0ZQQkRRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI0MTM5NWVlLTU4ZDMtNGMwYS05NDE2LWMyNWZlMjI4N2YxNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTIsXG4gICAgICAxNTksXG4gICAgICA2MCxcbiAgICAgIDIyNixcbiAgICAgIDgwLFxuICAgICAgMTMwLFxuICAgICAgNDEsXG4gICAgICA2NSxcbiAgICAgIDIzNSxcbiAgICAgIDE4LFxuICAgICAgOTUsXG4gICAgICA0NixcbiAgICAgIDE0NCxcbiAgICAgIDIzLFxuICAgICAgNzMsXG4gICAgICAxMTUsXG4gICAgICAxLFxuICAgICAgMjIwLFxuICAgICAgOTcsXG4gICAgICAxNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI2LFxuICAgICAgNzEsXG4gICAgICAyMzcsXG4gICAgICAxOTcsXG4gICAgICAyLFxuICAgICAgMjMsXG4gICAgICAyMjMsXG4gICAgICAyOCxcbiAgICAgIDEzMSxcbiAgICAgIDE2OSxcbiAgICAgIDk1LFxuICAgICAgOTYsXG4gICAgICAzMyxcbiAgICAgIDIyNCxcbiAgICAgIDE0OCxcbiAgICAgIDIwMyxcbiAgICAgIDYwLFxuICAgICAgNjksXG4gICAgICAxMyxcbiAgICAgIDE3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOQjlQRTRLMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzAyMzkxOTM0OjUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDU0OTc2ODQzODU5ODU6NTFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2Qk/CdkKHwnZCeIPCdkIjwnZCTIPCdkJbwnZCh8J2QovCdkLMg8J+Wpe+4j+KaoVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xXU2h0QUNFTXlJb0xRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM2lQSXo2cG0xQndySUYxY0kzcmFmQlo2cmxWeDYxdk9paUZiTWRVMlhHWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJha2JnM3hJWFVuTU0rc09naEpRbVhkZ3FnbXhBbUFDWmxRZzBOZ1FvYno0RXVoQWwwb2lucGhtNGxiQysrbHhWOWp3YWJQaUNCTGw3S1RXZHhLeW9Bdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsQVNla1B1VDBSVC91ZzRYMWxOSXIwSlpwWEZYM0lzdDRVcjBBdUx4SzdoWXFLd0pHbldjRFFKRnR1UFFubkR5TUtobWRoU01VTTdreE9SMVdlOGlpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDIzOTE5MzQ6NTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxOTAwMzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKZGhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpkaC5qc29uIjogIntcImtleURhdGFcIjpcIk9ub0R4dzg1SCtaa3VNdDJ3OUdzdm1zYUd4bkRzOThDQWtvaTFSV1hNMEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzA0NzQzNzMyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "💻",
  packname: process.env.PACK_NAME || "💻",
  botname : process.env.BOT_NAME  || "TECH WIZARD 💻",
  ownername:process.env.OWNER_NAME|| "Lenny💻",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
