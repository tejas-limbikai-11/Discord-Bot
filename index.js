import dotenv from "dotenv";
dotenv.config();

import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith("create")) {
        const url = message.content.split("create")[1];
        return message.reply({
            content: "Generating short URL for " + url,
        });
    }
    message.reply({
        content: "Hi from Bot",
    });
});

client.on("interactionCreate", (interaction) => {
    interaction.reply("Pong!!");
});

client.login(process.env.DISCORD_BOT_TOKEN);

