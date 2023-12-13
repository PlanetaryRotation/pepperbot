import * as action from "../util/discordAction.js";

export default {
  name: "guildmembers",
  description:
    "sends a file including all past guild members (may not be accurrate, is mostly manually updated) -- note: also includes allies",
  arguments: "none",
  execute(message, args) {
    const path = `../pepperbot/data/guildmembers.log`;
    action.sendMessage(message.channelId, {
      files: [
        {
          attachment: path,
          name: "guildmembers.log",
        },
      ],
    });
  },
};
