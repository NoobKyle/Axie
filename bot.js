const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(auth.token);


client.on('message', msg => {
    if (msg.content === 'Axie') {
      msg.reply('Hey, how are you?');
    }
  });

client.on('message', msg=>{
    if(msg.content ==="tell me about yourself"){
        msg.reply('Axie is my name, I am Kyle\'s personal assistant around discord' );
    }
});
