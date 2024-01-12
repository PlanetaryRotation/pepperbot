import * as action from "../util/discordAction.js";

export default {
  name: "getinfo",
  description: "gets the info of a specific type of object",
  arguments: "info type, id. type help at any time for more info",
  execute(message, args) {
    if (args[0] === "help") {
      action.reply(
        message,
        "info types: user, channel, guild, guildMember (this is the same as user, but has different stuff. put the guild id then the user id), stageInstance (put guild id then stage instance id), guildScheduledEvent (put guild id then guild scheduled event id)"
      );
      return;
    }
    if (args[0] === "user") {
      const user = bot.users.cache.get(args[1]);
      if (user === undefined) {
        action.reply(message, "user not found in cache");
        return;
      } else {
        const embed = action.createEmbed();
        embed.setTitle(user.username || user.id);
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
        );
      }
    }
    if (args[0] === "channel") {
      const channel = bot.channels.cache.get(args[1]);
      const channelTypes = {
        [0]: "text",
        [1]: "dm",
        [2]: "voice",
        [3]: "group",
        [4]: "category",
        [5]: "announcement",
        [6]: "store",
        [10]: "announcementThread",
        [11]: "publicThread",
        [12]: "privateThread",
        [13]: "stageVoice",
        [14]: "directory",
        [15]: "forum",
        [16]: "media",
      };
      if (channel === undefined) {
        action.reply(message, "channel not found in cache");
        return;
      } else {
        const embed = action.createEmbed();
        embed.setTitle(channel.name || channel.id)`
TYPE: ${channel.type} (${channelTypes[channel.type]})
NAME: ${channel.name || "undefined"}
CREATED AT: ${channel.createdAt || "undefined"}
CREATED TIMESTAMP: ${channel.createdTimestamp || "undefined"}
DEFAULT AUTO ARCHIVE DURATION: ${
          channel.defaultAutoArchiveDuration || "undefined"
        }
DEFAULT THREAD RATE LIMIT PER USER: ${
          channel.defaultAutoArchiveDuration || "undefined"
        }
DELETABLE: ${channel.deletable || "undefined"}
GUILD: ${channel.guild.id || "undefined"}
ID: ${channel.id || "undefined"}
LAST MESSAGE: ${channel.lastMessageId || "undefined"}
LAST PIN AT: ${channel.lastPinAt || "undefined"}
LAST PIN TIMESTAMP: ${channel.lastPinTimestamp || "undefined"}
MANAGEABLE: ${channel.manageable || "undefined"}
MEMBERS: ${channel.members.size || "undefined"}
IS NSFW: ${channel.nsfw || "undefined"}
IS NSFW: ${channel.nsfw || "undefined"}
PARENT: ${channel.parentId || "undefined"}
IS PARTIAL: ${channel.partial || "undefined"}
PERMISSIONS LOCKED: ${channel.permissionsLocked || "undefined"}
POSITION: ${channel.position || "undefined"}
RATE LIMIT PER USER: ${channel.rateLimitPerUser || "undefined"}
RAW POSITION: ${channel.rawPosition || "undefined"}
URL: ${channel.url || "undefined"}
VIEWABLE: ${channel.viewable || "undefined"}
BITRATE: ${channel.bitrate || "undefined"}
RECIPIENT: ${channel.recipient.id || "undefined"}
RECIPIENTS: ${channel.recipients.size || "undefined"}
FULL: ${channel.full || "undefined"}
JOINABLE: ${channel.joinable || "undefined"}
RTC REGION: ${channel.rtcRegion || "undefined"}
SPEAKABLE: ${channel.speakable || "undefined"}
USER LIMIT: ${channel.userLimit || "undefined"}
VIDEO QUALITY MODE: ${channel.videoQualityMode || "undefined"}
TOPIC: ${channel.topic || "undefined"}
APPLIED TAGS: ${channel.appliedTags || "undefined"}
ARCHIVED: ${channel.archived || "undefined"}
ARCHIVED AT: ${channel.archivedAt || "undefined"}
ARCHIVED TIMESTAMP: ${channel.archivedTimestamp || "undefined"}
AUTO ARCHIVE DURATION: ${channel.autoArchiveDuration || "undefined"}
EDITABLE: ${channel.editable || "undefined"}
INVITABLE: ${channel.invitable || "undefined"}
JOINED: ${channel.joined || "undefined"}
LOCKED: ${channel.locked || "undefined"}
MEMBER COUNT: ${channel.memberCount || "undefined"}
MESSAGE COUNT: ${channel.messageCount || "undefined"}
OWNER ID: ${channel.ownerId || "undefined"}
SENDABLE: ${channel.sendable || "undefined"}
UNARCHIVEABLE: ${channel.unarchiveable || "undefined"}
STAGE INSTANCE: ${channel.stageInstance.id || "undefined"}
STAGE INSTANCE PRIVACY LEVEL: ${channel.privacyLevel || "undefined"}
DEFAULT MESSAGE NOTIFICATIONS: ${
          channel.defaultMessageNotifications || "undefined"
        }
DESCRIPTION: ${channel.description || "undefined"}
GUILD SCHEDULED EVENT ENTITY ID: ${
          channel.stageInstance.entityId || "undefined"
        }
ENTITY TYPE: ${channel.entityType || "undefined"}
IMAGE HASH: ${channel.image || "undefined"}
NAME: ${channel.name || "undefined"}
SCHEDULED END AT: ${channel.scheduledEndAt || "undefined"}
SCHEDULED END TIMESTAMP: ${channel.scheduledEndTimestamp || "undefined"}
SCHEDULED START AT: ${channel.scheduledStartAt || "undefined"}
SCHEDULED START TIMESTAMP: ${channel.scheduledStartTimestamp || "undefined"}
STATUS: ${channel.status || "undefined"}
URL: ${channel.url || "undefined"}
`;
      }
    }
  },
};
if (args[0] === "guild") {
  const guild = bot.guilds.cache.get(args[1]);
  if (guild === undefined) {
    action.reply(message, "guild not found in cache");
    return;
  } else {
    const embed = action.createEmbed();
    embed.setTitle(guild.name || guild.id);
    embed.setDescription(
      `
NAME: ${guild.name}
ID: ${guild.id}
AFK CHANNEL: ${guild.afkChannelID}
AFK TIMEOUT: ${guild.afkTimeout}
APPLICATION ID: ${guild.applicationID}
APPROXIMATE MEMBER COUNT: ${guild.approximateMemberCount}
APPROXIMATE PRESENCE COUNT: ${guild.approximatePresenceCount}
AVAILABLE: ${guild.available}
BANNER HASH: ${guild.banner}
BANS: ${guild.bans.cache.size}
CHANNELS: ${guild.channels.cache.size}
COMMANDS: ${guild.commands.cache.size}
CREATED AT: ${guild.createdAt}
CREATED TIMESTAMP: ${guild.createdTimestamp}
DEFAULT MESSAGE NOTIFICATIONS: ${guild.defaultMessageNotifications}
DESCRIPTION: ${guild.description}
DISCOVERY SPLASH HASH: ${guild.discoverySplash}
EMOJIS: ${guild.emojis.cache.size}
ICON HASH: ${guild.icon}
JOINED AT: ${guild.joinedAt}
JOINED TIMESTAMP: ${guild.joinedTimestamp}
IS LARGE: ${guild.large}
MAXIMUM BITRATE: ${guild.maximumBitrate}
MAXIMUM MEMBERS: ${guild.maximumMembers}
MAXIMUM PRESENCES: ${guild.maximumPresences}
MAXIMUM STAGE VIDEO CHANNEL USERS: ${guild.maxStageVideoChannelUsers}
MAXIMUM VIDEO CHANNEL USERS: ${guild.maxVideoChannelUsers}
MEMBER COUNT: ${guild.memberCount}
GUILD MFA LEVEL: ${guild.mfaLevel}
NAME ACRONYM: ${guild.nameAcronym}
OWNER ID: ${guild.ownerId}
PARTNERED: ${guild.partnered}
PREFERRED LOCALE: ${guild.preferredLocale}
PREMIUM PROGRESS BAR ENABLED: ${guild.premiumProgressBarEnabled}
PREMIUM SUBSCRIPTION COUNT: ${guild.premiumSubscriptionCount}
PREMIUM TIER: ${guild.premiumTier}
PRESENCES: ${guild.presences.cache.size}
PUBLIC UPDATES CHANNEL: ${guild.publicUpdatesChannelId}
ROLES: ${guild.roles.cache.size}
RULES CHANNEL: ${guild.rulesChannelId}
SAFETY ALERTS CHANNEL: ${guild.safetyAlertsChannelId}
SCHEDULED EVENTS: ${guild.scheduledEvents.cache.size}
SHARD ID: ${guild.shardId}
SPLASH HASH: ${guild.splash}
STAGE INSTANCES: ${guild.stageInstances.cache.size}
STICKERS: ${guild.stickers.cache.size}
SYSTEM CHANNEL: ${guild.systemChannelId}
VANITY URL CODE: ${guild.vanityURLCode}
VANITY URL USES: ${guild.vanityURLUses}
VERIFICATION LEVEL: ${guild.verificationLevel}
VERIFIED: ${guild.verified}
VOICE STATES: ${guild.voiceStates.cache.size}
WIDGET CHANNEL: ${guild.widgetChannel.id}
WIDGET ENABLED: ${guild.widgetEnabled}
`
    );
  }
}
if (args[0] === "guildMember") {
  const member = bot.guilds.cache.get(args[1]).members.cache.get(args[2]);
  if (member === undefined) {
    action.reply(message, "member not found in guild's cache");
    return;
  } else {
    const embed = action.createEmbed();
    embed.setTitle(member.name || member.id);
    embed.setDescription(
      `
BANNABLE: ${member.bannable}
COMMUNICATION DISABLED UNTIL: ${member.communicationDisabledUntil}
COMMUNICATION DISABLED UNTIL TIMESTAMP: ${member.communicationDisabledUntilTimestamp}
DISPLAY COLOR: ${member.displayColor}
DISPLAY HEX COLOR: ${member.displayHexColor}
DM CHANNEL: ${member.dmChannel.id}
JOINED AT: ${member.joinedAt}
JOINED TIMESTAMP: ${member.joinedTimestamp}
KICKABLE: ${member.kickable}
MANAGEABLE: ${member.manageable}
MODERATEABLE: ${member.moderateable}
NICKNAME: ${member.nickname}
PENDING: ${member.pending}
PREMIUM SINCE: ${member.premiumSince}
PREMIUM SINCE TIMESTAMP: ${member.premiumSinceTimestamp}
CLIENT PRESCENCE STATUS: ${member.presence.clientStatus}
ROLES: ${member.roles.cache.size}
VOICE STATE: ${member.voice.channelId}
`
    );
  }
}
if (args[0] === "stageInstance") {
  const stage = bot.guilds.cache.get(args[1]).stageInstances.cache.get(args[2]);
  if (stage === undefined) {
    action.reply(message, "stage instance not found in guild's cache");
    return;
  } else {
    const embed = action.createEmbed();
    embed.setTitle(stage.topic || stage.id);
    embed.setDescription(
      `
CHANNEL: ${stage.channel.id}
CREATED AT: ${stage.createdAt}
CREATED TIMESTAMP: ${stage.createdTimestamp}
GUILD: ${stage.guild.id}
GUILD SCHEDULED EVENT ENTITY ID: ${stage.guildScheduledEvent.entityId}
GUILD SCHEDULED EVENT ID: ${stage.guildScheduledEventId}
ID: ${stage.id}
STAGE INSTANCE PRIVACY LEVEL: ${stage.privacyLevel}
TOPIC: ${stage.topic}
`
    );
  }
}
if (args[0] === "guildScheduledEvent") {
  const event = bot.guilds.cache
    .get(args[1])
    .scheduledEvents.cache.get(args[2]);
  if (event === undefined) {
    action.reply(message, "event not found in guild's cache");
    return;
  } else {
    const embed = action.createEmbed();
    embed.setTitle(event.topic || event.id);
    embed.setDescription(
      `
CHANNEL: ${event.channel.id}
CREATED AT: ${event.createdAt}
CREATED TIMESTAMP: ${event.createdTimestamp}
CREATOR: ${event.creator.id}
DESCRIPTION: ${event.description}
ENTITY ID: ${event.entityId}
GUILD SCHEDULED EVENT ENTITY METADATA LOCATION: ${event.entityMetadata.location}
ENTITY TYPE: ${event.entityType}
GUILD: ${event.guild.id}
ID: ${event.id}
IMAGE HASH: ${event.image}
NAME: ${event.name}
PRIVACY LEVEL: ${event.privacyLevel}    
SCHEDULED END AT: ${event.scheduledEndAt}
SCHEDULED END TIMESTAMP: ${event.scheduledEndTimestamp}
SCHEDULED START AT: ${event.scheduledStartAt}
SCHEDULED START TIMESTAMP: ${event.scheduledStartTimestamp}
STATUS: ${event.status}
URL: ${event.url}
USER COUNT: ${event.userCount}
`
    );
  }
}
