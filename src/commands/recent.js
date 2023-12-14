import fs from "fs"
import * as action from "../util/discordAction.js";

module.exports = {
    name: 'recent',
    description: 'sends most recent deleted message',
    execute(message, args) {
        const recent = fs.readFileSync(`./logs/deletedmessages/${message.guild.id}.log`)
        action.sendMessage(message.channelId, recent)
        action.messageDelete(message)
    },
};
