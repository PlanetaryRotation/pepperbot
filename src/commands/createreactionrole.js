import * as action from "../util/discordAction.js";
import fs from "fs";
import { default as log } from "../util/log.js";

let collectors = [];

const whitelist = ["440163494529073152", "436321340304392222"];

export default {
  name: "createreactionrole",
  description: "creates reaction role, requires whitelist",
  arguments: "emoji, user",
  execute(message, args) {
    (async () => {
      if (whitelist.includes(message.author.id)) {
        let emoji = args[0];
        let role = message.mentions.roles.first();
        if (!role) {
          log("failed.log", message, __filename, `role variable missing`);
          return;
        }
        if (!emoji) {
          log("failed.log", message, __filename, `emoji variable missing`);
          return;
        }

        const embed = action.createEmbed();

        embed.setTitle(role.name);
        embed.setDescription(
          "React with " + emoji + " to recieve the " + role.name + " role."
        );

        const reactMessage = await action.sendMessage(message.channelId, {
          embeds: [embed],
        });

        const collectorFilter = function (reaction) {
          return true;
        };

        reactMessage.react(emoji);

        const collector = message.createReactionCollector({
          filter: collectorFilter,
        });
        collectors.push(collector);

        collector.on("collect", (reaction, user) => {
          console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
        });
      } else {
        action.reply(message, "UNAUTHORIZED");
        const path = require("path");
        const scriptName = path.basename(__filename);
      }
    })();
  },
};
