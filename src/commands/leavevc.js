import { getVoiceConnection } from "@discordjs/voice";
import * as action from "../util/discordAction.js";

export default {
  name: "leavevc",
  description: "leaves vc that user is currently in",
  arguments: "none",
  execute(message, args) {
    if (getVoiceConnection(message.guild.id)) {
      const connection = getVoiceConnection(message.guild.id);
      connection.destroy();
      action.reply(
        message,
        `left voice channel <#${connection.joinConfig.channelId}>`
      );
    } else {
      action.reply(message, "im not connected to a voice channel here mf");
    }
  },
};
