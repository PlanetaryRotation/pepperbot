import { default as log } from "../util/log.js";
import * as action from "../util/discordAction.js";

const prefix = process.env.PREFIX;

export default {
  name: "dmuser",
  description: "forces bot to dm a user something (this will ghost ping them)",
  arguments: "user, message",
  execute(message, args) {
    let user = message.mentions.users.first();
    const guild = message.guild;

    if (!user) {
      user = args[0];
      if (!user) {
        return;
      }
    }
    const msgnoprefix = message.content.slice(
      prefix.length + this.name.length + user.id.length + 4
    );

    const msg = msgnoprefix.slice(0, 2000);

    let ableToSend = true;

    if (msg !== "") {
      user.send(msg).catch(() => {
        action.sendMessage(
          message.channelId,
          `${message.author}, cannot send message to ${user}, this is usually caused by them not being inside the server`
        );
        log(
          "forcesay.log",
          message,
          import.meta.url,
          `${message.author.username} (${message.author}) attempted to force bot to dm ${user} "${msg}"`
        );
        ableToSend = false;
      });
      action.messageDelete(message);
      if (ableToSend) {
        log(
          "forcesay.log",
          message,
          import.meta.url,
          `${message.author.username} (${message.author}) forced bot to dm ${user.username} (${user}) "${msg}"`
        );
      }
    }
  },
};
