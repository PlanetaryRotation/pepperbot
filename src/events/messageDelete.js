import { default as log } from "../util/log.js";

export default function (message) {
  try {
    log(
      "deletedmessages.log",
      message,
      import.meta.url,
      `deleted message from ${message.author.username} (${message.author}) with: "${message.content}"`,
      true
    );
  } catch {
    function sendError(message) {
      const channel = client.channels.cache.get("1148814162273763418");
      let msg;
      try {
        msg = channel.send(`**error:** ${message}`);
      } catch (err) {
        sendError(err.rawError.message);
        console.log(err);
        return undefined;
      }
      return msg;
    }
    sendError("undefined error");
  }
}
