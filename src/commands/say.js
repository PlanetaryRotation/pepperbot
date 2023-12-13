import { default as log } from "../util/log.js";
import * as action from "../util/discordAction.js";

const prefix = process.env.PREFIX;

export default {
  name: "say",
  description: "forces bot to say something",
  arguments: "message",
  execute(message, args) {
    if (message.author.bot) return;
    const msgnoprefix = message.content.slice(prefix.length + this.name.length);
    const msg = msgnoprefix.slice(0, 2000);

    if (msg !== "") {
      action.sendMessage(message.channelId, msg);
      action.messageDelete(message);
      log(
        "forcesay.log",
        message,
        import.meta.url,
        `${message.author.username} (${message.author}) forced bot to say "${msg}"`
      );
    }
  },
};
