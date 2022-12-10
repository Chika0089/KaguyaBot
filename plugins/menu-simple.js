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
                  "title": `📝 𝙎𝙀𝙈𝙐𝘼 𝙋𝙀𝙍𝙄𝙉𝙏𝘼𝙃 📝`,
                  "description": "ᴍᴇᴍʙᴇʀɪᴋᴀɴ sᴇᴍᴜᴀ ᴍᴇɴᴜ ʙᴏᴛ",
                  "rowId": ".allmenu"
                }, {
                  "title": "🕋  𝙄𝙎𝙇𝘼𝙈  🕋",
                  "description": "ᴍᴇɴᴜ ᴛᴇɴᴛᴀɴɢ ɪsʟᴀᴍ",
                  "rowId": ".? quran"
                }, {
                  "title": "📘  𝙀𝘿𝙐𝙆𝘼𝙎𝙄  📘",
                  "description": "ᴍᴇɴᴜ ᴇᴅᴜᴋᴀsɪ",
                  "rowId": ".? edukasi"
                }, {
                  "title": "📰  𝙉𝙀𝙒𝙎  📰",
                  "description": "ᴍᴇɴᴜ ʙᴇʀɪᴛᴀ",
                  "rowId": ".? News"
                },  {
                  "title": "🎮  𝙂𝘼𝙈𝙀  🎮",
                  "description": "ᴍᴇɴᴜ ɢᴀᴍᴇ",
                  "rowId": ".game"
                }, {
                  "title": "📍 𝙀𝙋𝙄𝘾 𝙍𝙋𝙂 📍",
                  "description": "ᴍᴇɴᴜ ᴇᴘɪᴄ ʀᴘɢ",
                  "rowId": ".rpg"
                }, {
                  "title": "📊  𝙓𝙋  📊",
                  "description": "xᴘ & ʟᴇᴠᴇʟ",
                  "rowId": ".xp"
                },  {
                  "title": "🔞  𝙉𝙎𝙁𝙒 🔞",
                  "description": "ᴍᴇɴᴜ 𝟷𝟾+",
                  "rowId": ".menunsfw"
                }, {
                  "title": "🖼️  𝙍𝘼𝙉𝘿𝙊𝙈 𝙁𝙊𝙏𝙊  🖼️",
                  "description": "ᴍᴇɴᴜ ғᴏᴛᴏ ʀᴀɴᴅᴏᴍ",
                  "rowId": ".? image"
                }, {
                  "title": "🎇  𝙎𝙏𝙄𝘾𝙆𝙀𝙍  🎇",
                  "description": "ᴍᴇɴᴜ ʙᴜᴀᴛ sᴛɪᴄᴋᴇʀ",
                  "rowId": ".stikerr"
                }, {
                  "title": "🐚  𝙆𝙀𝙍𝘼𝙉𝙂 𝘼𝙅𝘼𝙄𝘽 🐚",
                  "description": "ᴍᴇɴᴜ ᴋᴇʀᴀɴɢ ᴀᴊᴀɪʙ",
                  "rowId": ".kerangg"
                }, {
                  "title": "📑  𝙌𝙐𝙊𝙏𝙀𝙎  📑",
                  "description": "ᴍᴇɴᴜ ǫᴜᴏᴛᴇs",
                  "rowId": ".menuquotes"
                }, {
                  "title": "🏛️  𝘼𝘿𝙈𝙄𝙉  🏛️",
                  "description": "ᴍᴇɴᴜ ᴀᴅᴍɪɴ ɢʀᴜᴘ",
                  "rowId": ".? admin"
                }, {
                  "title": "👪  𝙂𝙍𝙐𝙋  👪",
                  "description": "ᴍᴇɴᴜ ɢʀᴜᴘ",
                  "rowId": ".grup"
                }, {
                  "title": "🔝  𝙋𝙍𝙀𝙈𝙄𝙐𝙈  🔝",
                  "description": "ᴍᴇɴᴜ ᴜɴᴛᴜᴋ ᴘʀᴇᴍɪᴜᴍ",
                  "rowId": ".premium"
                }, {
                  "title": "🖥️  𝙄𝙉𝙏𝙀𝙍𝙉𝙀𝙏  🖥️",
                  "description": "ᴄᴀʀɪ sᴇsᴜᴀᴛᴜ ᴅɪ ʙᴏᴛ",
                  "rowId": ".internet"
                }, {
                  "title": "🎭  𝘼𝙉𝙊𝙉𝙔𝙈𝙊𝙐𝙎  🎭",
                  "description": "ᴍᴀɪɴᴋᴀɴ ᴀɴᴏɴʏᴍᴏᴜs ᴄʜᴀᴛ",
                  "rowId": ".anonymous"
                }, {
                  "title": "✒️  𝙉𝙐𝙇𝙄𝙎 & 𝙇𝙊𝙂𝙊  ✒️",
                  "description": "ᴍᴇɴᴜ ɴᴜʟɪs & ʟᴏɢᴏ",
                  "rowId": ".menunulis"
                }, {
                  "title": "📺  𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍  📺 ",
                  "description": "ᴅᴏᴡɴʟᴏᴀᴅ sᴇsᴜᴀᴛᴜ ᴅɪ ʙᴏᴛ",
                  "rowId": ".downloader"
                }, {
                  "title": "🔧  𝙏𝙊𝙊𝙇𝙎  🔧",
                  "description": "ᴛᴏᴏʟs ʏɢ ʙɪsᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴅɪ ʙᴏᴛ",
                  "rowId": ".tools"
                }, {
                  "title": "🎉  𝙁𝙐𝙉  🎉",
                  "description": "ᴍᴇɴᴜ ᴄᴇʀɪᴀ",
                  "rowId": ".fun"
                }, {
                  "title": "📂  𝘿𝘼𝙏𝘼𝘽𝘼𝙎𝙀 📂",
                  "description": "sɪᴍᴘᴀɴ sᴇsᴜᴀᴛᴜ ᴅɪ ʙᴏᴛ",
                  "rowId": ".? database"
                }, {
                  "title": "📋  𝙑𝙊𝙏𝙀 & 𝘼𝘽𝙎𝙀𝙉  📋",
                  "description": "ᴍᴇɴʜ ᴠᴏᴛᴇ & ᴀʙsᴇɴ",
                  "rowId": ".menuvote"
                }, {
                  "title": "🎙️ 𝙋𝙀𝙉𝙂𝙐𝘽𝘼𝙃 𝙎𝙐𝘼𝙍𝘼 🎙️",
                  "description": "ᴜʙᴀʜ sᴜᴀʀᴀᴍᴜ",
                  "rowId": ".? audio"
                }, {
                  "title": "🎙️  𝙎𝙊𝙐𝙉𝘿 𝙈𝙐𝙎𝙄𝘾  🎙️",
                  "description": "ᴅᴇɴɢᴀʀ ᴍᴜsɪᴄ sɪɴɢᴋᴀᴛ",
                  "rowId": ".? sound"
                }, {
                  "title": "🎙️  𝙑𝙉 𝙄𝙈𝙐𝙀𝙏 🎙️",
                  "description": "ᴍᴇɴᴜ ᴠɴ ɪᴍᴜᴇᴛ",
                  "rowId": ".vn"
                }, {
                  "title": "🤖  𝙏𝙤𝙥𝙐𝙥 𝙁𝙧𝙚𝙚𝙁𝙞𝙧𝙚  🤖",
                  "description": "ᴛᴏᴘᴜᴘ ᴇᴘᴇᴘ 𝟾ʙɪᴛ ʏᴀʜᴀʜᴀ ʜᴀʏᴜᴋ",
                  "rowId": ".topupff"
                }, {
                  "title": "⛩️  𝘼𝙉𝙄𝙈𝙀 ⛩️",
                  "description": "ᴄᴀʀɪ ᴀɴɪᴍᴇ ᴅɪ ʙᴏᴛ",
                  "rowId": ".anime"
                }, {
                  "title": "ℹ️  𝙄𝙉𝙁𝙊  ℹ️",
                  "description": "ɪɴғᴏ ᴛᴇɴᴛᴀɴɢ ʙᴏᴛ",
                  "rowId": ".menuinfo"
                }, {
                  "title": "🔧  𝙑𝙄𝙍𝙐𝙎  🔧",
                  "description": "ᴠɪʀᴛᴇx ᴍᴇɴᴜ",
                  "rowId": ".menuvirtex"
                }, {
                  "title": "🎧  𝙎𝙤𝙪𝙣𝙙  🎧",
                  "description": "ᴍᴇɴᴜ sᴏᴜɴᴅ ᴍᴇɴɢᴋᴀɴᴇ",
                  "rowId": ".soundmenu"
                }, {
                  "title": "👑  𝙊𝙒𝙉𝙀𝙍  👑",
                  "description": "ᴍᴇɴᴜ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ",
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
'fileName':'「 Rama 」',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'previewType':'pdf',
contextInfo: { externalAdReply :{ showAdAttribution: true,
                        sourceUrl: 'https://youtu.be/ZzKJ6jrDTdY',
                        mediaType: 2,
                        description: `Rama`,
                        title: `💌 My Ultah: ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
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
    res = ('Selamat Malam🌃')
  }
  if (time >= 4) {
    res = ('Selamat Pagi🌄')
  }
  if (time >= 12) {
    res = ('Selamat Siang☀️')
  }
  if (time >= 16) {
    res = ('️ Selamat Malam🌇')
  }
  if (time >= 23) {
    res = ('Selamat Malam🌙')
  }
  return res
}