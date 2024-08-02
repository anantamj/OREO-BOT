import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone' 
import fs from 'fs' 

//OwnerShip
global.owner = [
  [process.env.OWNER_NUMBER || '918414837681', process.env.OWNER_NAME || 'Developer Mj 🤖', true],
  ['918414837681', 'Mj ❤️✨', true]
]
global.mods = []
global.prems = []

global.author = process.env.OWNER_NAME || 'Mj The Techie'
global.botname = process.env.BOT_NAME || 'Eren'
global.oname = author
global.bname = botname

//Extra Shortcuts
global.smlink = process.env.SOCIAL_MEDIA_LINK || 'https://www.instagram.com/mj.exe.____?igsh=MXB3bjdvaXgxMDZ5MQ=='
global.gclink = process.env.GROUP_LINK || 'https://whatsapp.com/channel/0029VaXNXHt8F2pCDdNq0p3E'
 
//Apikeys
global.shizokeys = 'shizo'

//Sticker Watermarks
global.packname = process.env.BOT_NAME || 'Eren Yeager 🥵'
global.stkpack = process.env.BOT_NAME || 'Eren Yeager 🥵'
global.stkowner = process.env.OWNER_NAME || 'Mj ❤️✨'

//Watermark
global.maker = process.env.MAKER || 'Made with ❤️'

//global emojis
global.wait = '*⌛ _Ruko zara💗✨..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//management
global.bug = '*!! Sorry 💢 !!*\nSomething went wrong 🌋'
global.stop = '*!! 🎭 Unfortunately 💔 !!*\nBot system is not Responding 🙃'

//TimeLines
global.botdate = `*⫹⫺ Date:*  ${moment.tz('Asia/Kolkata').format('DD/MM/YY')}`
global.bottime = `*⫹⫺ Time:* ${moment.tz('Asia/Kolkata').format('HH:mm:ss')}`

//Hosting Management
global.serverHost = 1
global.getQrWeb = 0
global.renderHost = 0
global.replitHost = 0

//global.pairingNumber = "" //put your bot number here

global.mods = ['918414837681','918414837681']
global.prems = ['918414837681','918414837681']
global.allowed = ['918414837681','918414837681']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = [
  '29d4b59a4aa687ca',
  '5LTV57azwaid7dXfz5fzJu',
  'cb15ed422c71a2fb',
  '5bd33b276d41d6b4',
  'HIRO',
  'kurrxd09',
  'ebb6251cc00f9c63',
]
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']



let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
