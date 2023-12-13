import dotenv from "dotenv";
import fs from "fs";
dotenv.config();
import {
  REST,
  Routes,
  ApplicationCommandOptionType,
  SlashCommandBuilder,
} from "discord.js";

let commands = [];

const commandFiles = fs
  .readdirSync("src/commands/")
  .filter((file) => file.endsWith(".js"));

async () => {
  for (const file of commandFiles) {
    const command = await import(`./commands/${file}`);
    commands.push(
      `
    {
        name: "${command.name}",
        description: "${command.description}"
    }
    `.toJSON()
    );
  }
};
//console.log(commands);

const rest = new REST().setToken(process.env.TOKEN);

export default async () => {
  try {
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log("slash commands registered");
  } catch (error) {
    console.log(error);
  }
};
