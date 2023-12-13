import * as dotenv from "dotenv";
dotenv.config();

import { default as log } from "../util/log.js";
import fs from "fs";
import discord from "discord.js";

let commands = new discord.Collection();

const commandFiles = fs
  .readdirSync("src/commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  (async () => {
    const command = await import(`../commands/${file}`);
    commands.set(command.default.name, command.default);
  })();
}

function parseargs(string) {
  const args = string.split(" ");
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "") {
      args.splice(i, 1);
    }
  }
  return args;
}

const prefix = process.env.PREFIX;

export default function (message, client) {
  const blacklistnosplit = fs.readFileSync("data/blacklisted.log", "utf8");
  const blacklist = blacklistnosplit.split("\n");

  if (message.channel.type === 1) {
    log(
      "directmessages.log",
      message,
      import.meta.url,
      `direct message from ${message.author.username} (${message.author}) with:
\`"${message.content}"\``
    );
    const channel = client.channels.cache.get("1148814162273763418");
    channel.send(
      `direct message from ${message.author.username} (\`${message.author.id}\`) with: "${message.content}"`
    );
  }
  if (!message.content.startsWith(prefix)) return;
  if (blacklist.includes(message.author.id)) {
    message.reply("blacklisted smh");
    return;
  }

  const command = message.content
    .slice(prefix.length)
    .split(/ +/)
    .shift()
    .toLowerCase();
  const args = parseargs(message.content.slice(prefix.length + command.length));

  if (!commands.has(command)) {
    message.reply("idiot thats not a command");
    return;
  }
  log(
    "commands.log",
    message,
    import.meta.url,
    `use of command: ${command} by: ${message.author.username} (\`${message.author}\`)"`,
    true
  );
  (async () => {
    commands.get(command).execute(message, args, client);
  })();
}
