/*
 * Jangan Di Hapus!!
 * 
 * Creator @KingOfBear
 *
 * Youtubeku: https://youtu.be/pwLZpdfO8AU
 * 
 * Ingin tambah fitur tapi tidak bisa coding?
 * hubungi: https://wa.me/6288279268363
 * 
 */

import fetch from 'node-fetch' 
import moment from 'moment-timezone'
 let handler = async(m, { conn, usedPrefix, args, command }) => { 
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
  const time = moment.tz('Asia/Jakarta').format('HH')
  const ultah = new Date(`${ultahowner} 00:00:01`)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
     let name = db.data.users[m.sender].name 
     let vn = `https://github.com/Rendyzzx/op/raw/main/audio/Menu4.mp3`
 let fload = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 9998282719181899999,
    status: 404,
    surface : 404,
    message: `Rama`,
    orderTitle: `${ucapan()}`,
    thumbnail:   await conn.resize(await (await fetch(pp)).buffer(), 300, 250),
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
 let judul = ''
  const sections = [ 
                 { 
                   "rows": [
                {
                  "title": `π πππππΌ πππππππΌπ π`,
                  "description": "α΄α΄α΄Κα΄ΚΙͺα΄α΄Ι΄ sα΄α΄α΄α΄ α΄α΄Ι΄α΄ Κα΄α΄",
                  "rowId": ".allmenu"
                }, {
                  "title": "π  ππππΌπ  π",
                  "description": "α΄α΄Ι΄α΄ α΄α΄Ι΄α΄α΄Ι΄Ι’ ΙͺsΚα΄α΄",
                  "rowId": ".? quran"
                }, {
                  "title": "π  ππΏπππΌππ  π",
                  "description": "α΄α΄Ι΄α΄ α΄α΄α΄α΄α΄sΙͺ",
                  "rowId": ".? edukasi"
                }, {
                  "title": "π°  ππππ  π°",
                  "description": "α΄α΄Ι΄α΄ Κα΄ΚΙͺα΄α΄",
                  "rowId": ".? News"
                },  {
                  "title": "π?  ππΌππ  π?",
                  "description": "α΄α΄Ι΄α΄ Ι’α΄α΄α΄",
                  "rowId": ".game"
                }, {
                  "title": "π ππππΎ πππ π",
                  "description": "α΄α΄Ι΄α΄ α΄α΄Ιͺα΄ Κα΄Ι’",
                  "rowId": ".rpg"
                }, {
                  "title": "π  ππ  π",
                  "description": "xα΄ & Κα΄α΄ α΄Κ",
                  "rowId": ".xp"
                },  {
                  "title": "π  ππππ π",
                  "description": "α΄α΄Ι΄α΄ π·πΎ+",
                  "rowId": ".menunsfw"
                }, {
                  "title": "πΌοΈ  ππΌππΏππ ππππ  πΌοΈ",
                  "description": "α΄α΄Ι΄α΄ ?α΄α΄α΄ Κα΄Ι΄α΄α΄α΄",
                  "rowId": ".? image"
                }, {
                  "title": "π  ππππΎπππ  π",
                  "description": "α΄α΄Ι΄α΄ Κα΄α΄α΄ sα΄Ιͺα΄α΄α΄Κ",
                  "rowId": ".stikerr"
                }, {
                  "title": "π  ππππΌππ πΌππΌππ½ π",
                  "description": "α΄α΄Ι΄α΄ α΄α΄Κα΄Ι΄Ι’ α΄α΄α΄ΙͺΚ",
                  "rowId": ".kerangg"
                }, {
                  "title": "π  ππππππ  π",
                  "description": "α΄α΄Ι΄α΄ Η«α΄α΄α΄α΄s",
                  "rowId": ".menuquotes"
                }, {
                  "title": "ποΈ  πΌπΏπππ  ποΈ",
                  "description": "α΄α΄Ι΄α΄ α΄α΄α΄ΙͺΙ΄ Ι’Κα΄α΄",
                  "rowId": ".? admin"
                }, {
                  "title": "πͺ  ππππ  πͺ",
                  "description": "α΄α΄Ι΄α΄ Ι’Κα΄α΄",
                  "rowId": ".grup"
                }, {
                  "title": "π  πππππππ  π",
                  "description": "α΄α΄Ι΄α΄ α΄Ι΄α΄α΄α΄ α΄Κα΄α΄Ιͺα΄α΄",
                  "rowId": ".premium"
                }, {
                  "title": "π₯οΈ  ππππππππ  π₯οΈ",
                  "description": "α΄α΄ΚΙͺ sα΄sα΄α΄α΄α΄ α΄Ιͺ Κα΄α΄",
                  "rowId": ".internet"
                }, {
                  "title": "π­  πΌππππππππ  π­",
                  "description": "α΄α΄ΙͺΙ΄α΄α΄Ι΄ α΄Ι΄α΄Ι΄Κα΄α΄α΄s α΄Κα΄α΄",
                  "rowId": ".anonymous"
                }, {
                  "title": "βοΈ  πππππ & ππππ  βοΈ",
                  "description": "α΄α΄Ι΄α΄ Ι΄α΄ΚΙͺs & Κα΄Ι’α΄",
                  "rowId": ".menunulis"
                }, {
                  "title": "πΊ  πΏππππππΌπΏππ  πΊ ",
                  "description": "α΄α΄α΄‘Ι΄Κα΄α΄α΄ sα΄sα΄α΄α΄α΄ α΄Ιͺ Κα΄α΄",
                  "rowId": ".downloader"
                }, {
                  "title": "π§  πππππ  π§",
                  "description": "α΄α΄α΄Κs ΚΙ’ ΚΙͺsα΄ α΄Ιͺ Ι’α΄Ι΄α΄α΄α΄Ι΄ α΄Ιͺ Κα΄α΄",
                  "rowId": ".tools"
                }, {
                  "title": "π  πππ  π",
                  "description": "α΄α΄Ι΄α΄ α΄α΄ΚΙͺα΄",
                  "rowId": ".fun"
                }, {
                  "title": "π  πΏπΌππΌπ½πΌππ π",
                  "description": "sΙͺα΄α΄α΄Ι΄ sα΄sα΄α΄α΄α΄ α΄Ιͺ Κα΄α΄",
                  "rowId": ".? database"
                }, {
                  "title": "π  ππππ & πΌπ½πππ  π",
                  "description": "α΄α΄Ι΄Κ α΄ α΄α΄α΄ & α΄Κsα΄Ι΄",
                  "rowId": ".menuvote"
                }, {
                  "title": "ποΈ ππππππ½πΌπ πππΌππΌ ποΈ",
                  "description": "α΄Κα΄Κ sα΄α΄Κα΄α΄α΄",
                  "rowId": ".? audio"
                }, {
                  "title": "ποΈ  πππππΏ πππππΎ  ποΈ",
                  "description": "α΄α΄Ι΄Ι’α΄Κ α΄α΄sΙͺα΄ sΙͺΙ΄Ι’α΄α΄α΄",
                  "rowId": ".? sound"
                }, {
                  "title": "ποΈ  ππ πππππ ποΈ",
                  "description": "α΄α΄Ι΄α΄ α΄ Ι΄ Ιͺα΄α΄α΄α΄",
                  "rowId": ".vn"
                }, {
                  "title": "π€  ππ€π₯ππ₯ ππ§πππππ§π  π€",
                  "description": "α΄α΄α΄α΄α΄ α΄α΄α΄α΄ πΎΚΙͺα΄ Κα΄Κα΄Κα΄ Κα΄Κα΄α΄",
                  "rowId": ".topupff"
                }, {
                  "title": "β©οΈ  πΌππππ β©οΈ",
                  "description": "α΄α΄ΚΙͺ α΄Ι΄Ιͺα΄α΄ α΄Ιͺ Κα΄α΄",
                  "rowId": ".anime"
                }, {
                  "title": "βΉοΈ  ππππ  βΉοΈ",
                  "description": "ΙͺΙ΄?α΄ α΄α΄Ι΄α΄α΄Ι΄Ι’ Κα΄α΄",
                  "rowId": ".menuinfo"
                }, {
                  "title": "π§  πππππ  π§",
                  "description": "α΄ ΙͺΚα΄α΄x α΄α΄Ι΄α΄",
                  "rowId": ".menuvirtex"
                }, {
                  "title": "π§  ππ€πͺπ£π  π§",
                  "description": "α΄α΄Ι΄α΄ sα΄α΄Ι΄α΄ α΄α΄Ι΄Ι’α΄α΄Ι΄α΄",
                  "rowId": ".soundmenu"
                }, {
                  "title": "π  πππππ  π",
                  "description": "α΄α΄Ι΄α΄ α΄Κα΄sα΄s α΄α΄‘Ι΄α΄Κ",
                  "rowId": ".menuowner"
                }
              ] 
            }
          ]
         const listMessage = {
      text: `${ucapan()} ${name}`,
      footer: wm,
      mentions: await conn.parseMention(judul),
      title: judul.trim(),
      buttonText: "Klik Disini",
      sections
    }
    return conn.sendMessage(m.chat, listMessage, { quoted: fload, mentions: await conn.parseMention(judul)}, m, {
  'document':{'url':'https://youtu.be/ZzKJ6jrDTdY'},
'mimetype':global.dpdf,
'fileName':'γ Rama γ',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'previewType':'pdf',
contextInfo: { externalAdReply :{ showAdAttribution: true,
                        sourceUrl: 'https://youtu.be/ZzKJ6jrDTdY',
                        mediaType: 2,
                        description: `Rama`,
                        title: `π My Ultah: ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `Rama`,          previewType: 0,
                        thumbnail: await (await fetch(thumb)).buffer(),
                        mediaUrl: 'https://youtu.be/ZzKJ6jrDTdY'
                        
                      }}
})
conn.sendFile(m.chat, vn, 'haori.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true})
  }
handler.help = ['menu', '?', 'help']
handler.tags = ['main']
handler.command = /^(menu|\?|help)$/i

handler.fail = null

export default handler 

function ucapan() {
    let res = ''
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = ('Hi')
  if (time >= 0) {
    res = ('Selamat Malamπ')
  }
  if (time >= 4) {
    res = ('Selamat Pagiπ')
  }
  if (time >= 12) {
    res = ('Selamat SiangβοΈ')
  }
  if (time >= 16) {
    res = ('οΈ Selamat Malamπ')
  }
  if (time >= 23) {
    res = ('Selamat Malamπ')
  }
  return res
}