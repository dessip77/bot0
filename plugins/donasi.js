let handler = async m => m.reply(`
╭─〘 FAÇA DOAÇÃO 〙
│ • 𝗔𝗫𝗜𝗦 [6696159143]
│ • 𝗗𝗔𝗡𝗔 [6696159143]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
