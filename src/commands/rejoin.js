import getVoiceConnection from "@discordjs/voice"
import * as action from "../util/discordAction.js";

module.exports = {
    name: 'rejoin',
    description: 'Rejoin the voice channel',
    execute(message, args) {
        const connection = getVoiceConnection(message.guild.id);
        if (connection) {
            try {
                connection.rejoin()
            } catch (err) {
                action.sendError(err)
            }
        } else {
            action.reply(message, "no active voice connection in this guild")
        }
    },
};
