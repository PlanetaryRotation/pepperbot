import { getVoiceConnection } from "@discordjs/voice";
import * as action from "../util/discordAction.js";

export default {
  name: "rejoin",
  description: "rejoin the voice channel",
  execute(message, args) {
    const connection = getVoiceConnection(message.guild.id);
    if (connection) {
      try {
        connection.rejoin();
        action.reply(message, "remade voice connection");
      } catch (err) {
        action.sendError(err);
      }
    } else {
      action.reply(message, "no active voice connection in this guild");
    }
  },
};
