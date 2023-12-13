const whitelist = ["440163494529073152"];
import * as action from "../util/discordAction.js";
import { default as log } from "../util/log.js";

const prefix = process.env.PREFIX;

export default {
  name: "pepperannouncement",
  description: "PEPPER ANNOUNCEMENT SYSTEM",
  arguments: "title, text",
  execute(message, args) {
    if (whitelist.includes(message.author.id)) {
      const title = args[0];
      const msgnoprefix = message.content.slice(
        prefix.length + this.name.length + title.length + 2
      );
      const msg = msgnoprefix.slice(0, 2000);
      const embed = action.createEmbed();

      embed.setTitle(title);
      embed.setDescription(msg);
      action.sendMessage("1171660137946157146", { embeds: [embed] });
      action.messageDelete(message);
    } else {
      action.reply(message, "UNAUTHORIZED");
      return;
    }
  },
};
