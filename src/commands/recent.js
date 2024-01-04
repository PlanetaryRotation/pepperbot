import fs from "fs";
import * as action from "../util/discordAction.js";

export default {
  name: "recent",
  description: "sends most recent deleted message",
  execute(message, args) {
    if (message.author.bot) return;
    try {
      const recent = fs.readFileSync(
        `./logs/deletedmessages/${message.guild.id}.log`
      );
    } catch (err) {
      action.reply(
        message,
        "pepperbot has yet to log a deleted message in this server"
      );
      console.log(err);
      return;
    }
    const recent = fs.readFileSync(
      `../pepperbot/logs/deletedmessages/${message.guild.id}.log`,
      "utf8"
    );
    action.sendMessage(message.channelId, recent);
  },
};
