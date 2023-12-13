const ignore = ["console.log"];
import * as action from "../util/discordAction.js";
import fs from "fs";

export default {
  name: "sendlog",
  description: "sends log file (if the file is valid)",
  arguments: "m, mobile",
  execute(message, args) {
    let mobileMode = false;
    if (args.includes("m") || args.includes("mobile")) {
      mobileMode = true;
    }
    //let msgnoprefix = message.content.slice(
    //prefix.length + this.name.length + 1,
    //);
    let msgnoprefix = args[0];
    if (!msgnoprefix.endsWith(".log")) {
      msgnoprefix += ".log";
    }

    const logs = fs
      .readdirSync("../pepperbot/logs/")
      .filter((file) => file.endsWith(".log"));
    if (!logs.includes(msgnoprefix)) {
      action.reply(message, "invalid log file");
      return;
    }
    if (ignore.includes(msgnoprefix)) return;
    const path = `../pepperbot/logs/${msgnoprefix}`;
    if (!mobileMode) {
      action.sendMessage(message.channelId, {
        files: [
          {
            attachment: path,
            name: "file.log",
          },
        ],
      });
    } else {
      const filestring = fs.readFileSync(path, "utf8");
      action.sendMessage(
        message.channelId,
        filestring.slice(filestring.length - 500, filestring.length)
      );
    }
  },
};
