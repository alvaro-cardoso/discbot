require("dotenv").config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Pai ta On.`);
  });

client.on('message', msg => {

    if (msg.content == '!guga') {
        msg.react("🐒");
    }

    if (msg.content === '!guga') {
      msg.channel.send('Ararararara!');
    }

    if (msg.content === '!bn') {
      msg.channel.send('⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄\n
      ⠄⠄⠄⢠⣶⣶⣦⣤⣶⣦⣤⣶⣶⣤⡄⠄⡆⠄\n
      ⠄⣂⣀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠄⡆⠄\n
      ⢠⢻⣿⡿⣟⡛⠻⢿⣿⣿⡿⠿⠟⠻⢿⣿⣇⠄\n
      ⢀⣺⣿⡟⠋⡉⢉⠚⢿⣿⠗⢊⠙⡛⢿⣿⡌⠄\n
      ⠈⣝⣿⣿⣿⣧⣤⣤⣿⣿⣶⣤⣼⣿⣿⣿⡇⠄\n
      ⠄⠙⣿⣿⣿⣿⣿⡿⣿⣿⣷⣿⣿⣿⣿⡟⠄⠄\n
      ⠄⠄⣿⣿⣿⠛⣋⣩⣬⣥⣤⡍⢙⣿⣿⡇⠄⠄\n
      ⠄⠄⠘⣿⣿⣴⣭⣿⣿⣿⣿⣵⣾⣿⠏⠄⠄⠄\n
      ⠄⠄⠄⣿⣿⣿⣿⣷⣤⣴⣿⣿⣿⣿⠄⣠⠤⠄\n
      ⢀⠄⠚⣿⣿⣷⡌⣁⣀⣀⣩⣴⣿⣿⠄⠈⣍⣛.');
    }
  });

client.login(process.env.BOT_TOKEN);