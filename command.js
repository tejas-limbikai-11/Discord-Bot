import { REST, Routes } from "discord.js";

const commands = [
    {
        name: "ping",
        description: "Replies with Pong!",
    },
];

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_BOT_TOKEN);

try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands("1327263880233226281"), { body: commands });

    console.log("Successfully reloaded application (/) commands.");
} catch (error) {
    console.error(error);
}
