import * as action from "../util/discordAction.js";
import * as levels from "../util/levelsUtil.js";

export default {
  name: "rank",
  description: "gets the rank/exp of a user",
  arguments: "user id",
  execute(message, args) {
    action.reply(
      message,
      `${args[0]} is level ${levels.getLevel(
        message.guild.id,
        args[0]
      )} with a total exp of ${levels.getExp(message.guild.id, args[0])}`
    );
  },
};
