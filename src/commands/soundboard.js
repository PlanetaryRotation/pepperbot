import {
  createAudioPlayer,
  createAudioResource,
  getVoiceConnection,
  joinVoiceChannel,
} from "@discordjs/voice";
import fs from "fs";
import * as action from "../util/discordAction.js";

const prefix = process.env.PREFIX;

export default {
  name: "soundboard",
  description: "plays specified sound file",
  arguments: "file",
  execute(message, args) {
    const audioPlayer = createAudioPlayer();
    let proposedfilename = message.content.slice(
      prefix.length + this.name.length + 1
    );
    const files = fs.readdirSync("resources/soundboard");
    let file;
    let lsmode = false;
    let stopmode = false;

    let possibleFilenames = {
      regular: proposedfilename,
      spaced: proposedfilename.replaceAll(" ", "_"),
      spacedmp3: proposedfilename.replaceAll(" ", "_") + ".mp3",
      mp3: proposedfilename + ".mp3",
      spacedogg: proposedfilename.replaceAll(" ", "_") + ".ogg",
      ogg: proposedfilename + ".ogg",
      spacedwav: proposedfilename.replaceAll(" ", "_") + ".wav",
      wav: proposedfilename + ".wav",
      spacedwebm: proposedfilename.replaceAll(" ", "_") + ".webm",
      webm: proposedfilename + ".webm",
      spacedm4a: proposedfilename.replaceAll(" ", "_") + ".m4a",
      m4a: proposedfilename + ".m4a",
    };
    for (const value of Object.values(possibleFilenames)) {
      if (files.includes(value)) {
        file = value;
      }
    }
    if (proposedfilename === "ls") {
      fs.writeFileSync("resources/soundboard/ls.txt", "");
      lsmode = true;
      for (let file = 0; file < files.length; file++) {
        if (files[file] !== "ls.txt") {
          fs.appendFileSync("resources/soundboard/ls.txt", `${files[file]}\n`);
        }
      }
    }
    if (proposedfilename === "stop") {
      let connection = getVoiceConnection(message.guild.id);
      connection.subscribe(audioPlayer);
      audioPlayer.stop();
      message.reply("stopped audio playback");
      return;
    }

    if (!file && !lsmode && !stopmode) {
      action.reply(
        message,
        "unable to find your file in the soundboard folder put `ls` as your args to upload a file of all names. try replacing spaces with _s. you proposed: " +
          proposedfilename
      );
      return;
    }
    if (!lsmode) {
      const audioResource = createAudioResource(`resources/soundboard/${file}`);

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
      action.reply(message, `playing \`${file}\``);
    } else {
      action.sendMessage(message.channelId, {
        files: [
          {
            attachment: "resources/soundboard/ls.txt",
            name: "ls.txt",
          },
        ],
      });
    }
  },
};
