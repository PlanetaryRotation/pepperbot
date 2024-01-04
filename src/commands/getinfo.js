import * as action from "../util/discordAction.js";

export default {
  name: "getinfo",
  description: "gets the info of a specific type of object",
  arguments: "info type, id. type help at any time for more info",
  execute(message, args) {
    if (args[0] === "help") {
        action.reply(message, "info types: user, channel, guild, guildMember (this is the same as user, but has different types)");
            return;
        }
    if (args[0] === "user") {
        const user = bot.users.cache.get(args[1])
        if (user === undefined) {
            action.reply(message, "user not found in cache")
            return;
        } else {
            const embed = action.createEmbed()
            embed.setTitle(user.username || user.id)
            embed.setDescription(
`
ID: ${user.id}
USERNAME: ${user.username}
AVATAR HASH: ${user.avatar}
AVATAR DECORATION: ${user.avatarDecoration}
BANNER HASH: ${user.banner}
IS BOT: ${user.bot}
CREATED AT: ${user.createdAt}
CREATED TIMESTAMP: ${user.createdTimestamp}
DEFAULT AVATAR URL: ${user.defaultAvatarURL}
DISCRIMINATOR: ${user.discriminator}
DISPLAY NAME: ${user.displayName}
GLOBAL NAME: ${user.globalName}
HEX ACCENT COLOR: ${user.hexAccentColor}
IS SYSTEM: ${user.system}
LEAGACY TAG: ${user.tag}

`
            )
        }
    }},
};
