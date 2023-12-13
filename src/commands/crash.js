const whitelist = ["440163494529073152"];
import * as action from "../util/discordAction.js";
import { default as log } from "../util/log.js";

export default {
  name: "crash",
  description: "crashes the bot (throws an error), requires whitelist",
  arguments: "none",
  execute(message, args) {
    if (whitelist.includes(message.author.id)) {
      action.reply(message, "crashing bot...");
      log(
        "errors.log",
        message,
        import.meta.url,
        "force crashed at " + Date() + "\n"
      );
      throw "crash command executed";
    } else {
      action.reply(message, "UNAUTHORIZED");
      return;
    }
  },
};
