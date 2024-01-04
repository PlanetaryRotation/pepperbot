import * as action from "../util/discordAction.js";

export default {
  name: "getinfo",
  description: "gets the info of a specific type of object",
  arguments: "info type, id. type help at any time for more info",
  execute(message, args) {
        if (args[0] === "help") {
        action.reply(message, "info types: user, channel, guild, guildMember (this is the same as user, but has different stuff. put the guild id then the user id), stageInstance (put guild id then stage instance id), guildScheduledEvent (put guild id then guild scheduled event id)");
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
        }
        if (args[0] === "channel") {
        const channel = bot.channels.cache.get(args[1])
            /*let channelTypes = {
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
                [16]: "media"
            }*/
        if (channel === undefined) {
            action.reply(message, "channel not found in cache")
            return;
        } else {
            const embed = action.createEmbed()
            embed.setTitle(channel.name || channel.id)
            if (channel.type === 0) { // text
                embed.setDescription(
`
TYPE: ${channel.type} (text)
NAME: ${channel.name}
CREATED AT: ${channel.createdAt}
CREATED TIMESTAMP: ${channel.createdTimestamp}
DEFAULT AUTO ARCHIVE DURATION: ${channel.defaultAutoArchiveDuration}
DEFAULT THREAD RATE LIMIT PER USER: ${channel.defaultAutoArchiveDuration}
DELETABLE: ${channel.deletable}
GUILD: ${channel.guild.id}
ID: ${channel.id}
LAST MESSAGE: ${channel.lastMessageId}
LAST PIN AT: ${channel.lastPinAt}
LAST PIN TIMESTAMP: ${channel.lastPinTimestamp}
MANAGEABLE: ${channel.manageable}
MEMBERS: ${channel.members}
IS NSFW: ${channel.nsfw}
PARENT: ${channel.parent.id}
IS PARTIAL: ${channel.partial}
PERMISSIONS LOCKED: ${channel.permissionsLocked}
POSITION: ${channel.position}
RATE LIMIT PER USER: ${channel.rateLimitPerUser}
RAW POSITION: ${channel.rawPosition}
URL: ${channel.url}
VIEWABLE: ${channel.viewable}
`
                )
                if (channel.type === 1) { // dm
                    embed.setDescription(
`
TYPE: ${channel.type} (dm)
CREATED AT: ${channel.createdAt}
CREATED TIMESTAMP: ${channel.createdTimestamp}
ID: ${channel.id}
LAST MESSAGE: ${channel.lastMessageId}
LAST PIN AT: ${channel.lastPinAt}
LAST PIN TIMESTAMP: ${channel.lastPinTimestamp}
IS PARTIAL: ${channel.partial}
RECIPIENT: ${channel.recipient.id}
URL: ${channel.url}
`
                    )
                }
                if (channel.type === 2) { // voice
                    embed.setDescription(
`
TYPE: ${channel.type} (voice)
NAME: ${channel.name}
BITRATE: ${channel.bitrate}
DELETEABLE: ${channel.deletable}
FULL: ${channel.full}
GUILD: ${channel.guild.id}
JOINABLE: ${channel.joinable}
LAST MESSAGE: ${channel.lastMessageId}
MANAGEABLE: ${channel.manageable}
IS NSFW: ${channel.nsfw}
PARENT: ${channel.parent.id}
POSITION: ${channel.position}
RATE LIMIT PER USER: ${channel.rateLimitPerUser}
RAW POSITION: ${channel.rawPosition}
RTC REGION: ${channel.rtcRegion}
SPEAKABLE: ${channel.speakable}
USER LIMIT: ${channel.userLimit}
VIDEO QUALITY MODE: ${channel.videoQualityMode}
VIEWABLE: ${channel.viewable}
CREATED AT: ${channel.createdAt}
CREATED TIMESTAMP: ${channel.createdTimestamp}
ID: ${channel.id}
IS PARTIAL: ${channel.partial}
URL: ${channel.url}
`
                    )
                }
                if (channel.type === 3) { // group dm
                    embed.setDescription(
`
TYPE: ${channel.type} (group dm)
NAME: ${channel.name}
ICON HASH: ${channel.icon}
CREATED AT: ${channel.createdAt}
CREATED TIMESTAMP: ${channel.createdTimestamp}
ID: ${channel.id}
IS PARTIAL: ${channel.partial}
RECIPIENTS: ${channel.recipients}
URL: ${channel.url}
`
                    )
                }
                if (channel.type === 4) { // category
                    embed.setDescription(
`
TYPE: ${channel.type} (category)
NAME: ${channel.name}
CREATED AT: ${channel.createdAt}
CREATED TIMESTAMP: ${channel.createdTimestamp}
DELETEABLE: ${channel.deletable}
GUILD: ${channel.guild.id}
MANAGEABLE: ${channel.manageable}
PERMISSIONS LOCKED: ${channel.permissionsLocked}
POSITION: ${channel.position}
RAW POSITION: ${channel.rawPosition}
VIEWABLE: ${channel.viewable}
ID: ${channel.id}
IS PARTIAL: ${channel.partial}
URL: ${channel.url}
`
                    )
                }
                if (channel.type === 5) { // announcement
                    embed.setDescription(
`
TYPE: ${channel.type} (announcement)
NAME: ${channel.name}
CREATED AT: ${channel.createdAt}
CREATED TIMESTAMP: ${channel.createdTimestamp}
DELETEABLE: ${channel.deletable}
GUILD: ${channel.guild.id}
MANAGEABLE: ${channel.manageable}
PERMISSIONS LOCKED: ${channel.permissionsLocked}
POSITION: ${channel.position}
RAW POSITION: ${channel.rawPosition}
VIEWABLE: ${channel.viewable}
DEFAULT AUTO ARCHIVE DURATION: ${channel.defaultAutoArchiveDuration}
DEFAULT THREAD RATE LIMIT PER USER: ${channel.defaultThreadRateLimitPerUser}
LAST PIN AT: ${channel.lastPinAt}
LAST PIN TIMESTAMP: ${channel.lastPinTimestamp}
PARENT: ${channel.parent.id}
TOPIC: ${channel.topic}
ID: ${channel.id}
IS PARTIAL: ${channel.partial}
URL: ${channel.url}
`
                    )
                }
                if (channel.type === 6) { // store
                    embed.setDescription(
`
what the hell did you find
there is nothing for this
it is a "store channel"
what the hell does that mean
`
                    )
                }
                if (channel.type === (10 || 11 || 12)) { // thread channels / forum posts?
                    embed.setDescription(
`
TYPE: ${channel.type} (forum posts (?))
NAME: ${channel.name}
CREATED AT: ${channel.createdAt}
CREATED TIMESTAMP: ${channel.createdTimestamp}
DELETEABLE: ${channel.deletable}
GUILD: ${channel.guild.id}
PERMISSIONS LOCKED: ${channel.permissionsLocked}
POSITION: ${channel.position}
RAW POSITION: ${channel.rawPosition}
VIEWABLE: ${channel.viewable}
LAST PIN AT: ${channel.lastPinAt}
LAST PIN TIMESTAMP: ${channel.lastPinTimestamp}
PARENT: ${channel.parent.id}
APPLIED TAGS: ${channel.appliedTags}
ARCHIVED: ${channel.archived}
ARCHIVED AT: ${channel.archivedAt}
ARCHIVED TIMESTAMP: ${channel.archivedTimestamp}
AUTO ARCHIVE DURATION: ${channel.autoArchiveDuration}
EDUITABLE: ${channel.editable}
INVITABLE: ${channel.invitable}
JOINABLE: ${channel.joinable}
JOINED: ${channel.joined}
LOCKED: ${channel.locked}
MANAGEABLE: ${channel.manageable}
MEMBER COUNT: ${channel.memberCount}
MESSAGE COUNT: ${channel.messageCount}
OWNER ID: ${channel.ownerId}
RATE LIMIT PER USER: ${channel.rateLimitPerUser}
SENDABLE: ${channel.sendable}
TOTAL MESSAGES SENT: ${channel.totalMessagesSent}
UNARCHIVEABLE: ${channel.unarchiveable}
ID: ${channel.id}
IS PARTIAL: ${channel.partial}
URL: ${channel.url}
`
                    )
                }
                if (channel.type === 13) { // stage voice
                    embed.setDescription(
`
TYPE: ${channel.type} (stage)
NAME: ${channel.name}
BITRATE: ${channel.bitrate}
DELETEABLE: ${channel.deletable}
FULL: ${channel.full}
GUILD: ${channel.guild.id}
JOINABLE: ${channel.joinable}
MANAGEABLE: ${channel.manageable}
IS NSFW: ${channel.nsfw}
PARENT: ${channel.parent.id}
POSITION: ${channel.position}
RAW POSITION: ${channel.rawPosition}
RTC REGION: ${channel.rtcRegion}
SPEAKABLE: ${channel.speakable}
USER LIMIT: ${channel.userLimit}
VIDEO QUALITY MODE: ${channel.videoQualityMode}
VIEWABLE: ${channel.viewable}
STAGE INSTANCE: ${channel.stageInstance.id}
TOPIC: ${channel.topic}
CREATED AT: ${channel.createdAt}
CREATED TIMESTAMP: ${channel.createdTimestamp}
ID: ${channel.id}
IS PARTIAL: ${channel.partial}
URL: ${channel.url}
`
                    )
                }
                if (channel.type === 14) { // directory
                    embed.setDescription(
`
wth is a "directory" channel
`
                    )
                }
                if (channel.type === 15) { // forum
                    embed.setDescription(
`
TYPE: ${channel.type} (forum)
NAME: ${channel.name}
DELETEABLE: ${channel.deletable}
GUILD: ${channel.guild.id}
JOINABLE: ${channel.joinable}
MANAGEABLE: ${channel.manageable}
IS NSFW: ${channel.nsfw}
PARENT: ${channel.parent.id}
POSITION: ${channel.position}
RAW POSITION: ${channel.rawPosition}
AVAILABLE  TAGS: ${channel.availableTags}
DEFAULT AUTO ARCHIVE DURATION: ${channel.defaultAutoArchiveDuration}
DEFAULT FORUM LAYOUT: ${channel.defaultForumLayout}
DEFAULT REACTION EMOJI: ${channel.defaultReactionEmoji}
DEFAULT SORT ORDER: ${channel.defaultSortOrder}
DEFAULT THREAD RATE LIMIT PER USER: ${channel.defaultThreadRateLimitPerUser}
VIEWABLE: ${channel.viewable}
CREATED AT: ${channel.createdAt}
CREATED TIMESTAMP: ${channel.createdTimestamp}
ID: ${channel.id}
IS PARTIAL: ${channel.partial}
URL: ${channel.url}
`
                    )
                }
                if (channel.type === 16) { // media
                    embed.setDescription(
`
wth is a "media" channel
`
                    )
                }
            }

        }
        }
        if (args[0] === "guild") {
            const guild = bot.guilds.cache.get(args[1])
            if (guild === undefined) {
                action.reply(message, "guild not found in cache")
                return;
            } else {
                const embed = action.createEmbed()
                embed.setTitle(guild.name || guild.id)
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
            )
        }
        }
        if (args[0] === "guildMember") {
            const member = bot.guilds.cache.get(args[1]).members.cache.get(args[2])
            if (member === undefined) {
                action.reply(message, "member not found in guild's cache")
                return;
            } else {
                const embed = action.createEmbed()
                embed.setTitle(member.name || member.id)
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
            )
        }
        }
        if (args[0] === "stageInstance") {
            const stage = bot.guilds.cache.get(args[1]).stageInstances.cache.get(args[2])
            if (stage === undefined) {
                action.reply(message, "stage instance not found in guild's cache")
                return;
            } else {
                const embed = action.createEmbed()
                embed.setTitle(stage.topic || stage.id)
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
                )
            }
        }
        if (args[0] === "guildScheduledEvent") {
            const event = bot.guilds.cache.get(args[1]).scheduledEvents.cache.get(args[2])
            if (event === undefined) {
                action.reply(message, "event not found in guild's cache")
                return;
            } else {
                const embed = action.createEmbed()
                embed.setTitle(event.topic || event.id)
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
                )
            }
        }
    }
}
