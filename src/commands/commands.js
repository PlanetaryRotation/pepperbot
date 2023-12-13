import { EmbedBuilder } from "discord.js";
import * as action from "../util/discordAction.js";
import fs from "fs";

export default {
  name: "commands",
  description: "displays commands list",
  arguments: "none",
  execute(message, args) {
    (async () => {
      let text = "";

      const commandFiles = fs
        .readdirSync("src/commands/")
        .filter((file) => file.endsWith(".js"));

      for (const file of commandFiles) {
        const command = await import(`./${file}`);
        text += `p/${command.default.name} - ${command.default.description} - command arguments: ${command.default.arguments}\n \n`;
      }
      const embed = action.createEmbed();
      embed.setTitle("PepperBot Commands");
      embed.setDescription(text);

      action.reply(message, { embeds: [embed] });
    })();
  },
};
