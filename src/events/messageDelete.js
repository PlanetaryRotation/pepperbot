import { default as log } from "../util/log.js";
import fs from "fs"
import fsextra from "fs-extra"

export default function (message) {
  try {
    log(
      "deletedmessages.log",
      message,
      import.meta.url,
      `deleted message from ${message.author.username} (${message.author}) with: "${message.content}"`,
      true
    );
    fsextra.ensureFileSync(`../pepperbot/logs/deletedmessages/${message.guild.id}.log`);
    fs.writeFileSync(`../pepperbot/logs/deletedmessages/${message.guild.id}.log`, message.content)
  } catch (err) {
    console.log(err.slice(0, 2000))
  }
}
