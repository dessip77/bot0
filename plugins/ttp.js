const { sticker2 } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn, text }) => {
  if (text) {
    let stiker = await sticker2(null, global.API('xteam', '/ttp', { file: '', text }))
    conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  }
}
handler.help = ['ttp 〘texto〙']
handler.tags = ['sticker']
handler.command = /^ttp$/i
handler.owner = true
handler.mods = true
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler

