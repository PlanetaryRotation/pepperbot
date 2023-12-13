import discord from "discord.js";
import { default as log } from "./log.js";
import * as index from "../index.js";
import { IntegrationExpireBehavior } from "discord.js";
const client = index.client;

export async function sendMainMessage(message) {
  try {
    const channel = client.channels.cache.get("1148814162273763418");
    const msg = await channel.send(message);
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
    msg = channel.send(`**error:** ${message}`);
    console.log(message);
  } catch (err) {
    sendError(err.rawError.message);
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
      msg = await channel.send(message);
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
    let msg = await triggerMessage.reply(message);
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
    message.edit(newcontent);
  } catch (err) {
    console.log(typeof message.edit);
    sendError(err);
  }
}
