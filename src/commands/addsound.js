import fs from "fs";
import * as action from "../util/discordAction.js";
import request from "request"; // yes i know this is deprecated i will fix it later (no i won't)

function download(url, filename) {
  request
    .get(url)
    .on("error", console.log)
    .pipe(
      fs.createWriteStream(
        `resources/soundboard/${filename
          .toLowerCase()
          .replaceAll(" ", "_")
          .replaceAll("-", "_")}`
      )
    );
  return true;
}

export default {
  name: "addsound",
  description: "uploads a sound to the soundboard files",
  arguments: "none",
  execute(message, args) {
    if (message.attachments.first()) {
      const filename = message.attachments.first().name;
      if (
        filename.endsWith(".mp3") ||
        filename.endsWith(".wav") ||
        filename.endsWith(".ogg") ||
        filename.endsWith(".webm") ||
        filename.endsWith(".m4a") ||
        filename.endsWith(".mp4") ||
        filename.endsWith(".midi")
      ) {
        const filenameNoExtension = filename.split(".")[0];
        const files = fs.readdirSync("resources/soundboard");
        if (filenameNoExtension) {
          if (!(files.includes(filename) || filenameNoExtension === "ls")) {
            let possibleFilenames = {
              regular: filenameNoExtension,
              spaced: filenameNoExtension.replaceAll(" ", "_"),
              spacedmp3: filenameNoExtension.replaceAll(" ", "_") + ".mp3",
              mp3: filenameNoExtension + ".mp3",
              spacedogg: filenameNoExtension.replaceAll(" ", "_") + ".ogg",
              ogg: filenameNoExtension + ".ogg",
              spacedwav: filenameNoExtension.replaceAll(" ", "_") + ".wav",
              wav: filenameNoExtension + ".wav",
              spacedwebm: filenameNoExtension.replaceAll(" ", "_") + ".webm",
              webm: filenameNoExtension + ".webm",
            };
            let invalid = false;
            for (const i = 0; i < possibleFilenames.length; i++) {
              if (files.includes(possibleFilenames[i])) {
                invalid = true;
              }
            }
            if (!invalid) {
              const success = download(
                message.attachments.first().url,
                filename
              );
              if (success) {
                action.reply(
                  message,
                  `downloaded your file to \`resources/soundboard/${filename
                    .toLowerCase()
                    .replaceAll(" ", "_")
                    .replaceAll(
                      "-",
                      "_"
                    )}\`, if this name is different than the one you put, that's normal. all files are lowercased and "fixed."`
                );
              } else {
                action.reply(
                  message,
                  "an unknown error occurred while attempting to download your file. see the console for details (id put it here but its probably too long for discord)"
                );
              }
            } else {
              action.reply(
                message,
                `invalid file name! the file name either already exists, or you named it ls. don't name it ls. detected file name: \`${filename}\``
              );
            }
          } else {
            action.reply(
              message,
              `invalid file name! the file name either already exists, or you named it ls. don't name it ls. detected file name: \`${filename}\``
            );
          }
        } else {
          action.reply(
            message,
            "error has occurred; filename could not be split"
          );
        }
      } else {
        action.reply(
          message,
          `invalid file extention; only \`mp3\`, \`wav\`, \`ogg\`, \`webm\`, and \`m4a\` files are supported. \`${
            filename.split(".")[1]
          }\` is not.`
        );
      }
    } else {
      action.reply(message, "no file detected");
    }
  },
};
