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
      msg.channel.send('⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄\n⠄⠄⠄⢠⣶⣶⣦⣤⣶⣦⣤⣶⣶⣤⡄⠄⡆⠄\n⠄⣂⣀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠄⡆⠄\n⢠⢻⣿⡿⣟⡛⠻⢿⣿⣿⡿⠿⠟⠻⢿⣿⣇⠄\n⢀⣺⣿⡟⠋⡉⢉⠚⢿⣿⠗⢊⠙⡛⢿⣿⡌⠄\n⠈⣝⣿⣿⣿⣧⣤⣤⣿⣿⣶⣤⣼⣿⣿⣿⡇⠄\n⠄⠙⣿⣿⣿⣿⣿⡿⣿⣿⣷⣿⣿⣿⣿⡟⠄⠄\n⠄⠄⣿⣿⣿⠛⣋⣩⣬⣥⣤⡍⢙⣿⣿⡇⠄⠄\n⠄⠄⠘⣿⣿⣴⣭⣿⣿⣿⣿⣵⣾⣿⠏⠄⠄⠄\n⠄⠄⠄⣿⣿⣿⣿⣷⣤⣴⣿⣿⣿⣿⠄⣠⠤⠄\n⢀⠄⠚⣿⣿⣷⡌⣁⣀⣀⣩⣴⣿⣿⠄⠈⣍⣛.');
    }
    
    if (msg.content === '!17') {
      msg.channel.send(':clown:  BOM DIA :clown:\n:clown: :flag_br: Eh a tRoPa dOs BoLSoRinGaRkkkk :flag_br: :clown:\n ̿̿ ̿̿ ̿̿ ̿ ̿ ̿з= :clown: =ε/̵͇̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿\n          (    .   )\n          /      \\ \n:clown:  Ta-Em-CHoK kk ¿ :clown:');
    }
  });

client.login(process.env.BOT_TOKEN);
