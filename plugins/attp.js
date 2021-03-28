const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn, text }) => {
  if (text) conn.sendFile(m.chat, global.API('xteam', '/attp', { file: '', text }), 'attp.webp', '', m, false, { asSticker: true })
  else throw 'cade O texto?'
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']
handler.command = /^attp$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = false

handler.fail = null

module.exports = handler

