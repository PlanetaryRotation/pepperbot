import * as action from "../util/discordAction.js";
import fs from "fs";

export default {
  name: "sendblacklist",
  description: "sends blacklist",
  arguments: "none",
  execute(message, args) {
    const filestring = fs.readFileSync(
      "../pepperbot/data/blacklisted.log",
      "utf8"
    );
    const blacklists = filestring.split("\n");
    let text = "";
    for (const file of blacklists) {
      text += file + "\n";
    }
    action.sendMessage(message.channelId, text);
  },
};
