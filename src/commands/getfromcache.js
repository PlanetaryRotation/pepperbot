import * as action from "../util/discordAction.js";
import fs from "fs"
import fsextra from "fs-extra"

export default {
    name: "getfromcache",
    description: "gets a value from the bot's cache, please know this is going to cause a lot of issues and will take a while to fix",
    arguments: "cache type, subtype, etc. type help at any time for more info",
    execute(message, args) {
    if (args[0] === "help") {
        action.reply(message, "cache types: client, guild");
        return;
    }
    let msg
    const clientCaches = {
        "users": message.client.users.cache,
        "uptime": message.client.uptime,
        "guilds": message.client.guilds.cache,
        "emojis": message.client.emojis.cache,
        "channels": message.client.channels.cache
    }
    const guildCaches = {
        "bans": message.guild.bans.cache,
        "channels": message.guild.channels.cache,
        "commands": message.guild.commands.cache,
        "emojis": message.guild.emojis.cache,
        "explicitContentFilter": message.guild.explicitContentFilter,
        "features": message.guild.features,
        "members": message.guild.members.cache,
        "preferredLocale": message.guild.preferredLocale,
        "presences": message.guild.presences.cache,
        "stageInstances": message.guild.stageInstances.cache,
        "stickers": message.guild.stickers.cache,
        "scheduledEvents": message.guild.scheduledEvents.cache,
        "roles": message.guild.roles.cache
    }
    if (args[0] === "client") {
        if (args[1] === "help") {
            let text = ""
            for (const [key, value] of Object.entries(clientCaches)) {
                text += `${key} `
            }
            action.reply(message, text);
            return;
        } else {
            msg = clientCaches[args[1]]
        }
    }
    if (args[0] === "guild") {
        if (args[1] === "help") {
            let text = ""
            for (const [key, value] of Object.entries(guildCaches)) {
                text += `${key} `
            }
            action.reply(message, text);
            return;
        } else {
            msg = guildCaches[args[1]]
        }
    }
    fsextra.ensureFileSync("../pepperbot/getcachecontainer.json")
    fs.writeFileSync("../pepperbot/getcachecontainer.json", msg)
    action.reply(message, {
        files: [
            {
                attachment: "../pepperbot/getcachecontainer.json",
                name: "cache.json",
            },
        ],
    })},
};
