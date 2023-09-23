const fs = require('fs')
const chalk = require('chalk')
const petik = '```'

global.owner = ['6283838077485']
global.ownvcard = '+62 838-3807-7485'
global.nomerOwner = '6283838077485'
global.nameowner = '𝗝𝗮𝗮 𝗢𝗙𝗖'
global.namebot = 'ComotBotz-MD'
global.email = `jaaofc@gmail.com`
global.foto = `https://telegra.ph/file/0ade60bdfdad5f1867779.jpg`
global.link = `https://chat.whatsapp.com/Hhr2WsHzJhjDRSTACXHyO2`
global.apikey = '113ca848b39af5584ab4ab54'
global.apikeyotp = "bf1e69dd239b113d7b7cd43d1ef42232"
global.prefa = ['.']
global.prefix = '#'
global.autoRecord = true
global.anticall = false

//Name stiker
global.packname = 'Comot-MD'
global.author = '𝗝𝗔𝗔 𝗢𝗙𝗖\n'

// image
global.dbimg = fs.readFileSync('./image/logo.jpg')

global.mess = {
    wait: `𝗣𝗿𝗼𝘀𝗲𝘀 𝗸𝗮𝗸`,
    succes: `𝗦𝘂𝗸𝘀𝗲𝘀 𝗸𝗮𝗸`,
    publics: `𝗦𝘂𝗸𝘀𝗲𝘀 𝗽𝘂𝗯𝗹𝗶𝗰`,
    selfs: `𝗦𝘂𝗸𝘀𝗲𝘀 𝘀𝗲𝗹𝗳`,
    admin: `𝗔𝗱𝗺𝗶𝗻 𝗼𝗻𝗹𝘆 𝗸𝗮𝗸`,
    botAdmin: `𝗕𝗼𝘁 𝗵𝗮𝗿𝘂𝘀 𝗺𝗲𝗻𝗷𝗮𝗱𝗶 𝗮𝗱𝗺𝗶𝗻 𝗸𝗮𝗸`,
    owner: `𝗢𝘄𝗻𝗲𝗿 𝗼𝗻𝗹𝘆 𝗸𝗮𝗸`,
    prem: `𝗣𝗿𝗲𝗺 𝗼𝗻𝗹𝘆 𝗸𝗮𝗸`,
    group: `𝗚𝗿𝗼𝘂𝗽 𝗼𝗻𝗹𝘆 𝗸𝗮𝗸`,
    private: `𝗣𝗿𝗶𝘃𝗮𝘁𝗲 𝗼𝗻𝗹𝘆 𝗸𝗮𝗸`,
    error: `𝗛𝗮𝗶 𝗸𝗮𝗸 𝗳𝗶𝘁𝘂𝗿 𝗲𝗿𝗼𝗿 𝘀𝗶𝗹𝗮𝗵𝗸𝗮𝗻 𝗹𝗮𝗽𝗼𝗿 𝗸𝗲 𝗼𝘄𝗻𝗲𝗿 𝟰𝟬𝟰`,
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})