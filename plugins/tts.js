import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
	let [chara, text] = args.join` `.split`|`
	let kimak = `Ex: ${usedPrefix + command} codebahasa|text
Contoh: ${usedPrefix + command} id|seorang anak menyelamatkan burungnya yang lepas
	
*Note*
┌〔 𝙆𝙤𝙙𝙚 𝘽𝙖𝙝𝙖𝙨𝙖 〕
├ Daftar bahasa yang didukung:
├ https://cloud.google.com/translate/docs/languages
└────`
	if (!(chara && text)) throw `${kimak}`
	let res = await(await fetch(`https://saipulanuar.ga/api/text-to-audio/tts?text=${text}&idbahasa=${chara}&apikey=${bear}`)).buffer()
	await conn.sendMessage(m.chat, { audio: { url: res }, ptt: true, mimetype: 'audio/mpeg' }, { quoted: m })
}
handler.help = ['tts']
handler.tags = ['misc']
handler.command = /^(tts)$/i

export default handler
