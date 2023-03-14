require('dotenv').config(); // configured dotenv to set the token of our discord bot .
const Discord = require("discord.js"); 

// creating the client to log our bot in the server .
const client = new Discord.Client();

client.on('ready',()=>{
    console.log(`Logged in as ${client.user.tag}!`);
});


