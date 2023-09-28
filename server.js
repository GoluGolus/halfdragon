const express = require('express');
const { Client } = require('discord.js');

const app = express();
const client = new Client();

// Remplacez 'YOUR_BOT_TOKEN' par le token de votre bot Discord
const BOT_TOKEN = 'YOUR_BOT_TOKEN';

client.login(BOT_TOKEN);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

app.get('/api/discord-info', (req, res) => {
  // Ajoutez ici le code pour récupérer les informations du compte Discord
  const discordInfo = {
    username: client.user.username,
    avatarURL: client.user.displayAvatarURL(),
    // Ajoutez d'autres informations si nécessaire
  };

  res.json(discordInfo);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
