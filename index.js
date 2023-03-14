require('dotenv').config(); // configured dotenv to set the token of our discord bot .
const { Client, GatewayIntentBits } = require('discord.js');
// creating new client.
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready',()=>{
    console.log(`Logged in as ${client.user.tag}!`);
});

// make sure this line comes in the last to login the user.

client.login(process.env.CLIENT_TOKEN); // loggin bot in the server
