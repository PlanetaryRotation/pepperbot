import { joinVoiceChannel } from "@discordjs/voice";
import * as action from "../util/discordAction.js";

const guildId = process.env.GUILD_ID;

export default {
  name: "joinvc",
  description: "joins the vc that the user is currently in",
  arguments: "none",
  execute(message, args) {
    if (message.member.voice.channel) {
      let voiceState = message.member.voice;

      let connection = joinVoiceChannel({
        channelId: voiceState.channelId,
        guildId: voiceState.guild.id,
        adapterCreator: voiceState.guild.voiceAdapterCreator,
      });

      action.reply(message, `connected to <#${voiceState.channelId}>`);
    } else {
      action.reply(message, "u aint connected to a voice channel blud 😂😂😂");
    }
  },
};
