import * as action from "../util/discordAction.js";

export default {
  name: "test",
  description: "test command",
  arguments: "all",
  execute(message, args) {
    (async () => {
      action.sendMessage(message.channelId, "channel send test");
      action.sendMainMessage("main message test");
      action.sendError("error test");
      const embed = action.createEmbed();
      embed.setTitle("EMBED TITLE");
      embed.setDescription("EMBED DESCRIPTION");
      action.sendMessage(message.channelId, { embeds: [embed] });
      const msg = await action.sendMainMessage("test");
      action.messageDelete(msg);
      action.reply(
        message,
        "discord action script test completed without errors"
      );
    })();
  },
};
