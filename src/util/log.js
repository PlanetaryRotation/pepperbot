import fs from "fs";

export default function (file, message, from, msg) {
  try {
    fs.appendFileSync(
      `../pepperbot/logs/${file}`,
      `AT: ${Date()}
SCRIPT: ${from}
IN: <#${message.channel.id}>
MESSAGE CONTENT: ${message.content} 
ADDITIONAL INFORMATION: ${msg}
\n`
    );
  } catch (err) {}
}

// TEMPLATE:
// const log = require('../util/log.js').execute()
// log('failed.log', message, __filename, `additional content`)
