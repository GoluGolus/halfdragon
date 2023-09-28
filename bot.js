const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const token = 'MTE1NjkxMzExMTA2OTA5Nzk4NA.GiDwT0.kKdBBNAwnw1YBiBponxh8puESCVVlpkxzKmHe0';

client.on('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
    console.log(`${message.author.tag} a dit : ${message.content}`);
});

client.login(token);
