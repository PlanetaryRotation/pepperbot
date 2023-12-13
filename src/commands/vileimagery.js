import { EmbedBuilder } from "discord.js";
import fs from "fs";
import * as action from "../util/discordAction.js";

const prefix = process.env.PREFIX;

export default {
  name: "vileimagery",
  description: "Do NOT run.",
  arguments: "file name",
  execute(message, args) {
    let proposedfilename = message.content.slice(
      prefix.length + this.name.length + 1
    );
    const embed = action.createEmbed();
    const images = fs
      .readdirSync("../pepperbot/resources/vileimagery")
      .filter((file) => file.endsWith(".png"));
    let file;
    let lsMode = false;
    let path;

    let possibleFilenames = {
      regular: proposedfilename,
      spaced: proposedfilename.replaceAll(" ", "_"),
      spacedPng: proposedfilename.replaceAll(" ", "_") + ".png",
      png: proposedfilename + ".png",
    };
    for (const value of Object.values(possibleFilenames)) {
      if (images.includes(value)) {
        file = value;
      }
    }
    if (proposedfilename === "ls") {
      lsMode = true;
      file = "ls";
      path = "../pepperbot/resources/vileimagery/ls.txt";
    }

    if (!file) {
      embed.setDescription(
        "unable to find your file in the vile imagery folder, instead it has been replaced with a random one. put `ls` as your args to upload a file of all names. try replacing spaces with _s."
      );
      const maxRan = images.length;
      const randomnum = Math.floor(Math.random() * maxRan);
      file = images[randomnum];
    }
    if (!lsMode) {
      embed.setTitle(file.replaceAll("_", " ").replaceAll(".png", ""));
      embed.setImage(`attachment://${file}`);
    }
    embed.setColor(0xff0000);
    if (!lsMode) {
      action.reply(message, {
        embeds: [embed],
        files: [`../pepperbot/resources/vileimagery/${file}`],
      });
    } else {
      action.sendMessage(message.channelId, {
        files: [
          {
            attachment: path,
            name: "ls.txt",
          },
        ],
      });
    }
  },
};
