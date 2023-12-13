import * as action from "../util/discordAction.js";
import fs from "fs";

const prefix = process.env.PREFIX;
const whitelist = ["440163494529073152"];

export default {
  name: "addblacklist",
  description: "adds a blacklist",
  arguments: "none",
  execute(message, args) {
    if (whitelist.includes(message.author.id)) {
      if (message.author.bot) return;
      const msgnoprefix = message.content.slice(
        prefix.length + this.name.length + 1
      );
      const user = msgnoprefix.slice(0, 2000);

      if (user !== "") {
        fs.appendFileSync("../pepperbot/data/blacklisted.log", user + "\n");
        action.reply(
          message,
          `operation completed (🤖); added ${user} to blacklisted file`
        );
      }
    }
  },
};
