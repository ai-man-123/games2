//
//Lower case
global.DeveloperMode = 'false' //true Or false
global.linkGC = ['']//TARUH DISINI LINK GRUP MU

global.owner = ['60102810046','436507776335335'] // Owner
global.mods = ['60102810046'] // moderator
global.prems = ['60102810046','6285718146858','436507776335335','62895801224266','6281273157920']  //premium
global.wait = '[ ❗ ] Wait'
global.eror = '[ ❗ ] EROR FEATURE'
global.apiloss = '[ ❗ ] APIKEY HABIS HUBUNGI OWNER UNTUK MENAMBAH LIMIT APIKEY'

//Simpel Api
global.apiLol = '4ef1b11287339c1b10699ece'//TARUH APIKEY//PUT YOUR APIKEY HERE
global.webLol = 'https://api.lolhuman.xyz/api/'
//

//BOT WM
global.botwm = '×͜× Aiman 亗ᴮᵒᵗ'//Change This to your name bot

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'UGwqFfEQ',//MASUKKAN APIKEY
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ' 
}

// Sticker WM
global.packname = '*͘⁴̅⁰͍⁴̵〆*\'re fine'//GANTI WM MU
global.author = '@botOfficial'

global.multiplier = 39 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
