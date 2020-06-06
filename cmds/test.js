const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    message.channel.send("This test has worked!")
}
module.exports.help = {
    name: 'test'
}