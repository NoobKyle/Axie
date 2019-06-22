const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

//Print to console the log.
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

//Keep the bot secret code on heroku.
client.login(process.env.BOT_TOKEN);


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

client.on('message', msg=>{
    if(msg.content ==="spill the beans"){
        msg.reply('Are you sure?' );
    }
});

client.on('message', msg=>{
    if(msg.content ==="go on Axie"){
        msg.reply('Kyle likes Tshego' + ' please dont be mad at me');
    }
});
