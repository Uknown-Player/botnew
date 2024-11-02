/*
       RESMI DARI Revan Developer
*/

global.prefa = ['','!','.',',','🐤','🗿'] 
// Setting Contact
global.namaown = "RevanCrash"
global.namabot = "RevanCrash v4"
global.versisc = " 𝟒.𝟎"
global.owner = ["6289509512231"]
global.tele = "https://wa.me/revancrash"
global.url = "https://www.youtube.com/revancrash"
global.namastore = "RevanCrash"

// Global Simbol
global.simbol = "𓉸"
global.wlcm = []
global.wlcmm = []
global.limitawal = {
    premium: "Infinity",
    free: 20
}

// Global Respon
global.mess = {
    success: '𝗗𝗼𝗻𝗲 𝗕𝗿𝗼',
    admin: `\`[ # ]\` Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !`,
    botAdmin: `\`[ # ]\` Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !`,
    OnlyOwner: `\`[ # ]\` Perintah Ini Hanya Bisa Digunakan Oleh Owner !`,
    OnlyGrup: `\`[ # ]\` Perintah Ini Hanya Bisa Digunakan Di Group Chat !`,
    private: `\`[ # ]\` Perintah Ini Hanya Bisa Digunakan Di Private Chat !`,
    wait: `\`[ # ]\` Wait Tunggu Sebentar`,
    notregist: `\`[ # ]\` Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu`,
    premium: `\`[ # ]\` khusus Murbug" Mau Join? Chat Owner`,
    endLimit: `\`[ # ]\` Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB`,
     bugrespon: `\`[ # ]\` 𝐑𝐄𝐕𝐀𝐍𝐂𝐑𝐀𝐒𝐇
     saber karo terget nome bug howa`,
     donebug: `\`[ # ]\` _𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥 𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 𝐁𝐲 𝐑𝐞𝐯𝐚𝐧𝐂𝐫𝐚𝐬𝐡_
     Berashi ho gaya ha `,
}


// Batas Setting
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})