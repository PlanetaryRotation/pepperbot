import * as action from "../util/discordAction.js";

export default {
  name: "getfromcache",
  description: "gets a value from the bot's cache, please know this is going to cause a lot of issues and will take a while to fix",
  arguments: "cache type, subtype, etc. type help at any time for more info",
  execute(message, args) {
    if (args[0] === "help") {
      action.reply(message, "cache types: client, guild");
      return;
    }
    if (args[0] === "client") {
        if (args[1] === "help") {
            action.reply(message, "client caches: users, uptime, guilds, emojis, channels");
            return;
        }
        if (args[1] === "user") {
            action.reply(message, message.client.users.cache);
            return;
        }
        if (args[1] === "uptime") {
            action.reply(message, message.client.uptime);
            return;
        }
        if (args[1] === "guilds") {
            action.reply(message, message.client.guilds.cache);
            return;
        }
        if (args[1] === "emojis") {
            action.reply(message, message.client.emojis.cache);
            return;
        }
        if (args[1] === "channels") {
            action.reply(message, message.client.channels.cache);
            return;
        }
    }
    if (args[0] === "guild") {
        const guild = message.guild
        if (args[1] === "help") {
            action.reply(message, "guild caches: bans, channels, commands, emojis, explicitContentFilter, features, members, preferredLocale, presences, stageInstances, stickers, scheduledEvents, roles");
            return;
        }
        if (args[1] === "bans") {
            action.reply(message, guild.bans.cache);
            return;
        }
        if (args[1] === "channels") {
            action.reply(message, guild.channels.cache);
            return;
        }
        if (args[1] === "commands") {
            action.reply(message, guild.commands.cache);
            return;
        }
        if (args[1] === "emojis") {
            action.reply(message, guild.emojis.cache);
            return;
        }
        if (args[1] === "explicitContentFilter") {
            action.reply(message, guild.explicitContentFilter.cache);
            return;
        }
        if (args[1] === "features") {
            action.reply(message, guild.features);
            return;
        }
        if (args[1] === "members") {
            action.reply(message, guild.members.cache);
            return;
        }
        if (args[1] === "preferredLocale") {
            action.reply(message, guild.preferredLocale);
            return;
        }
        if (args[1] === "presences") {
            action.reply(message, guild.presences.cache);
            return;
        }
        if (args[1] === "stageInstances") {
            action.reply(message, guild.stageInstances.cache);
            return;
        }
        if (args[1] === "stickers") {
            action.reply(message, guild.stickers.cache);
            return;
        }
        if (args[1] === "scheduledEvents") {
            action.reply(message, guild.scheduledEvents.cache);
            return;
        }
        if (args[1] === "roles") {
            action.reply(message, guild.roles.cache);
            return;
        }
    }
  },
};
