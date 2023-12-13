import fs from "fs";
import * as action from "../util/discordAction.js";
const prefix = process.env.PREFIX;

function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

const whitelist = ["440163494529073152", "611625001950380032"];

export default {
  name: "addguildmember",
  description:
    "manually adds a guild member to the members list, whitelist required",
  arguments: "member",
  execute(message, args) {
    if (whitelist.includes(message.author.id)) {
      if (message.author.bot) return;
      const msgnoprefix = message.content.slice(
        prefix.length + this.name.length + 1
      );
      const user = msgnoprefix.slice(0, 2000);

      if (user !== "") {
        fs.appendFileSync("../pepperbot/data/guildmembers.log", user + "\n");
        action.reply(
          message,
          `operation completed (🤖); added ${user} to members file`
        );
      }
    }
  },
};