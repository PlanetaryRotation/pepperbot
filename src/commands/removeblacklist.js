import * as action from "../util/discordAction.js";
import fs from "fs";

const whitelist = ["440163494529073152"];
const prefix = process.env.PREFIX;

export default {
  name: "removeblacklist",
  description: "removes a blacklist",
  arguments: "none",
  execute(message, args) {
    if (whitelist.includes(message.author.id)) {
      if (message.author.bot) return;
      const msgnoprefix = message.content.slice(
        prefix.length + this.name.length + 1
      );
      const filestring = fs.readFileSync(
        "../pepperbot/data/blacklisted.log",
        "utf8"
      );
      const blacklists = filestring.split("\n");
      if (!blacklists.includes(msgnoprefix)) {
        action.reply(message, "id is not blacklisted");
        return;
      }
      const index = blacklists.indexOf(msgnoprefix);
      if (index > -1) {
        blacklists.splice(index, 1);
      }
      let text = "";
      for (const file of blacklists) {
        text += file + "\n";
      }

      fs.writeFileSync("../pepperbot/data/blacklisted.log", text);

      action.reply(message, `removed \`${msgnoprefix}\`  from blacklist file`);
    } else {
      action.reply(message, "not whitelisted");
    }
  },
};
