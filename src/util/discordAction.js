import discord from "discord.js";
import { default as log } from "./log.js";
import * as index from "../index.js";
import { IntegrationExpireBehavior } from "discord.js";
const client = index.client;

const bannedWords = {
  "@everyone": "@ everyone",
  "@here": "@ here"
};

export function checkMessage(message) {
  var correctedMessage = message
  for (const [word, replacement] of bannedWords) {
    correctedMessage = correctedMessage.replace(word, replacement);
  }
  return correctedMessage
}

export async function sendMainMessage(message) {
  try {
    var newMessage = checkMessage(message)
    const channel = client.channels.cache.get("1148814162273763418");
    const msg = await channel.send(newMessage);
    return msg;
  } catch (err) {
    sendError(toString(err).slice(err.length - 1750, err.length));
    console.log(err);
    return undefined;
  }
}

export function sendError(message) {
  const channel = client.channels.cache.get("1148814162273763418");
  let msg;
  try {
    msg = channel.send(`**error:** ${message}
<@440163494529073152> you fucked something`);
    console.log(message);
  } catch (err) {
    console.log(err);
    return undefined;
  }
  return msg;
}

export function messageDelete(message) {
  if (!message) {
    sendError("attempt to delete undefined message");
    return undefined;
  }
  if (message.deletable) {
    try {
      message.delete();
    } catch (err) {
      sendError(err.rawError.message);
      console.log(err);
      return undefined;
    }
  } else {
    sendError(
      `unable to delete message: ${message.url}. most likely caused by invalid permissions`
    );
    console.log(
      `unable to delete message: ${message.url}. most likely caused by invalid permissions`
    );
    return undefined;
  }
}

export async function sendMessage(channelId, message) {
  const channel = client.channels.cache.get(channelId);
  let msg;
  if (channel) {
    try {
      var newMessage = checkMessage(message)
      msg = await channel.send(newMessage);
      return msg;
    } catch (err) {
      sendError(err.rawError.message);
      console.log(err);
      return undefined;
    }
  } else {
    sendError(`unable to find channel: <#${channelId}>`);
  }
}

export async function reply(triggerMessage, message) {
  try {
    var newMessage = checkMessage(message)
    let msg = await triggerMessage.reply(newMessage);
    return msg;
  } catch (err) {
    sendError(err.rawError.message);
    console.log(err);
    return undefined;
  }
}

export function createEmbed() {
  const embed = new discord.EmbedBuilder();
  embed.setColor(0xff0000);
  embed.setThumbnail(
    "https://cdn.discordapp.com/attachments/755150633191080073/1149152214850469908/Map_Icon.png"
  );

  return embed;
}

export function edit(message, newcontent) {
  try {
    var newMessage = checkMessage(newcontent)
    message.edit(newMessage);
  } catch (err) {
    console.log(typeof message.edit);
    sendError(err);
  }
}
