import * as action from "../util/discordAction.js";
import fs from "fs";

export default {
  name: "pepper",
  description: "RPG (random pepper generator)",
  arguments: "none",
  execute(message, args) {
    const peppers = fs.readdirSync("../pepperbot/resources/peppers");
    const maxRan = peppers.length;

    const randomnum = Math.floor(Math.random() * maxRan);

    const embed = action.createEmbed();
    embed.setTitle("RANDOM PEPPER!!!");
    embed.setImage(`attachment://${peppers[randomnum]}`);
    action.reply(message, {
      embeds: [embed],
      files: [`../pepperbot/resources/peppers/${peppers[randomnum]}`],
    });
  },
};
