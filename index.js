const Discord = require('discord.js')
const fs = require('fs');

const bot = new Discord.Client();

const PREFIX = '?';

const Token = ''

bot.once('ready', () => {
    console.log('Zeus has awaken...');
});

bot.commandss = new Discord.Collection();
fs.readdir("./cmds/", (err, files) => {
    if(err) console.log(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands to load");
        return; 
    }

    console.log(`**Loading ${jsfiles.length} commands**`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`)
        console.log(`${i + 1}: ${f} loaded!`)
        bot.commandss.set(props.help.name, props);

    });
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(/\s+/g);
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(PREFIX)) return;

    let cmd = bot.commandss.get(command.slice(PREFIX.length));
    if(cmd) cmd.run(bot, message, args);

});

bot.on('message', message=> {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){


    }
})

/// Keep as last
bot.login(Token)