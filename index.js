const Discord = require('discord.js')
const config = require('./config.json')
const fs = require('fs');

const bot = new Discord.Client();

const PREFIX = config.prefix;


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
const introEmbed = new Discord.MessageEmbed()
.setTitle("Zeus Introduction")
.addField("**About Zeus: ** ", "Hi, my name is Zeus. I am an open source bot coded by RiiZu#6305. I will serve as an open source bot that ANYONE can use to help make their servers so much cooler! If any of you would like to use me in your own server, you can find my repository -> **[here](https://github.com/xRiiZu/Zeus)** <-. If you have any questions you can message RiiZu#6305")
.setColor("#00c7ff")

bot.on('message', message => {

    var msg = message.content.toUpperCase();


    if (msg.includes('FAGGOT')) {
        message.delete()
        message.reply("Watch what you say in the server!")
    }
    if  (msg.includes("N I G G E R")) {
        message.delete()
        message.reply("Watch what you say in the server!")
    }
    if (msg.includes('NIGGER')) {
        message.delete()
        message.reply("Watch what you say in the server!")
    }
    if (msg.includes('NIGGA')) {
        message.delete()
        message.reply("Watch what you say in the server!")
    }
    if (msg.includes('NI99ER')) {
        message.delete()
        message.reply("Watch what you say in the server!")
    }
    if (msg.includes("HEY ZEUS")) {
        message.reply("hi, how can I help you? If you would like to use me you can do !commands")
    }
    if (msg.includes("HEY ZEUS")) {
        message.reply("hi, how can I help you? If you would like to use me you can do !commands")
    }
    if (msg.includes("HEY BOT")) {
        message.reply("hi, how can I help you? If you would like to use me you can do !commands")
    }
    if (msg.includes("HI BOT")) {
        message.reply("hi, how can I help you? If you would like to use me you can do !commands")
    }
    if (msg.includes("HI ZEUS")) {
        message.reply("hi, how can I help you? If you would like to use me you can do !commands")
    }
    if (msg.includes("CAN I GET SOME HELP")) {
        message.reply("If you need help with commands you can do !commands or you can message the server owner or an admin")
    }
    if (msg.includes("I NEED SOME HELP")) {
        message.reply("If you need help with commands you can do !commands or you can message the server owner or an admin")
    }
    if (msg.includes("GONNA KILL MYSELF")) {
        message.reply("Plese don't. You are loved. Please call the suicide hotline and let someone help you 1 (800)273-8255")
    }
    if (msg.includes("GOING TO KILL MYSELF")) {
        message.reply("Plese don't. You are loved. Please call the suicide hotline and let someone help you 1 (800)273-8255")
    }
    if (msg.includes("GONNA KMS")) {
        message.reply("Plese don't. You are loved. Please call the suicide hotline and let someone help you 1 (800)273-8255")
    }
    if (msg.includes("GOING TO KMS")) {
        message.reply("Plese don't. You are loved. Please call the suicide hotline and let someone help you 1 (800)273-8255")
    }
    if (msg.includes("GOING TO JUST KMS")) {
        message.reply("Plese don't. You are loved. Please call the suicide hotline and let someone help you 1 (800)273-8255")
    }
    if (msg.includes("GONNA JUST KMS")) {
        message.reply("Plese don't. You are loved. Please call the suicide hotline and let someone help you 1 (800)273-8255")
    }
    if (msg.includes("GOING TO JUST KILL MYSELF")) {
        message.reply("Plese don't. You are loved. Please call the suicide hotline and let someone help you 1 (800)273-8255")
    }
    if (msg.includes("GONNA JUST KILL MYSELF")) {
        message.reply("Plese don't. You are loved. Please call the suicide hotline and let someone help you 1 (800)273-8255")
    }
    if (msg.includes("WANNA JUST KILL MYSELF")) {
        message.reply("Plese don't. You are loved. Please call the suicide hotline and let someone help you 1 (800)273-8255")
    }
    if (msg.includes("WANNA KILL MYSELF")) {
        message.reply("Plese don't. You are loved. Please call the suicide hotline and let someone help you 1 (800)273-8255")
    }
    if (msg.includes("WANT TO JUST KILL MYSELF")) {
        message.reply("Plese don't. You are loved. Please call the suicide hotline and let someone help you 1 (800)273-8255")
    }
    if (msg.includes("WANT TO KILL MYSELF")) {
        message.reply("Plese don't. You are loved. Please call the suicide hotline and let someone help you 1 (800)273-8255")
    }
    if (msg.includes("SHOOT UP A SCHOOL")) {
        message.reply("Yea, dude keep that shit outta here.")
    }
    if (msg.includes("GOOD MORNING BOT")) {
        message.reply("good morning. If there's anything you need, you can use !commands to see all the things I can do!")
    }
    if (msg.includes("GOOD AFTERNOON BOT")) {
        message.reply("good morning. If there's anything you need, you can use !commands to see all the things I can do!")
    }
    if (msg.includes("GOODNIGHT BOT")) {
        message.reply("goodnight. See you later.")
    }
    if (msg.includes("ZEUS INTRODUCE YOURSELF")) {
        message.channel.send(introEmbed)
    }



});


bot.on('message', message=> {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){


    }
})

/// Keep as last
bot.login(config.token)