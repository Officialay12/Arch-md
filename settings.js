/* 

   Contact: https://wa.me/2349159180375
   Telegram: https://t.me/Ednut_x    
   Developer : https://wa.me/2349159180375
  
*/

const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")
require('dotenv').config(); 

//======= Change settings =======\\
global.owner = process.env.OWNER_NUMBER || "2349159180375"
global.botname = process.env.BOT_NAME || "αrch md"
global.ownername = process.env.OWNER_NAME || "SUNG"; //set bot owner name here 
global.prefix = process.env.PREFIX || "."; // your desired prefix symbol only
global.timezone = process.env.TIME_ZONE || "Africa/Lagos";
global.author = process.env.AUTHOR  || "Ednut";
global.packname = process.env.PACK_NAME  || "Sung Md ²⁵";
global.startup = process.env.STARTUP_MSG === 'true';
global.typeMenu = process.env.MENU_TYPE  || "v2";
global.onlypc = process.env.ONLYPC_MSG  || "Sorry buddy the bot won't work directly in group chat to reduce spam use in private chat";
global.onlygroup = process.env.ONLYGC_MSG  || "Sorry buddy the bot won't work directly in private chat to reduce spam use in group";


global.simbol = "♘"
global.tempatDB = 'database.json' // dont change might cause big errors 
global.pairing_code = true // if deploying on panel set true if on any other platform leave it false

// Settings Image Url
global.image = {
menu: "https://files.catbox.moe/bj888g.jpg", 
reply: "https://files.catbox.moe/9nrqqg.jpg", 
}

// Message Command 
global.mess = {
	owner: "*Access Denied* This feature is for SUNG shadow owners only!",
	admin: "*Access Denied* This feature is for group admins only!!",
	botAdmin: "*Access Denied* This feature is only for when the SUNG/bot/ is an admin.!",
	group: "*Access Denied* This feature is for shadow monarchs/groups/ only!",
	private: "*Access Denied* This feature is for private chat only!!",
	ban: "*Access Denied* you have been banned contact owner to unban!!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
