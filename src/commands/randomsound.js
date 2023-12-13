import {
  createAudioPlayer,
  createAudioResource,
  getVoiceConnection,
  joinVoiceChannel,
} from "@discordjs/voice";
import fs from "fs";
import * as action from "../util/discordAction.js";

export default {
  name: "randomsound",
  description: "plays specified sound file",
  arguments: "",
  execute(message, args) {
    const audioPlayer = createAudioPlayer();
    const files = fs
      .readdirSync("resources/soundboard")
      .filter(
        (file) =>
          file.endsWith(".wav") ||
          file.endsWith(".ogg") ||
          file.endsWith(".webm") ||
          file.endsWith(".mp3") ||
          file.endsWith(".m4a")
      );
    const maxRan = files.length;

    const randomnum = Math.floor(Math.random() * maxRan);

    const audioResource = createAudioResource(
      `resources/soundboard/${files[randomnum]}`
    );

    let connection = getVoiceConnection(message.guild.id);
    if (!connection) {
      if (message.member.voice.channel) {
        let voiceState = message.member.voice;

        let connection = joinVoiceChannel({
          channelId: voiceState.channelId,
          guildId: voiceState.guild.id,
          adapterCreator: voiceState.guild.voiceAdapterCreator,
        });

        action.reply(message, `connected to <#${voiceState.channelId}>`);
      } else {
        action.reply(
          message,
          "the bot is not in a voice channel so a sound cannot be played, and you are not in a voice channel so it can't auto join. IDIOT!"
        );
        return;
      }
    }
    connection = getVoiceConnection(message.guild.id);
    connection.subscribe(audioPlayer);
    audioPlayer.play(audioResource);
    action.reply(message, `playing \`${files[randomnum]}\``);
  },
};
