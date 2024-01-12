import * as action from "../util/discordAction.js";
import * as levels from "../util/levelsUtil.js";
import { PermissionsBitsField } from "discord.js";

export default {
  name: "setlevel",
  description: "changes a user's level",
  arguments: "user id, level",
  execute(message, args) {
    const userPermissionPosition = message.member.roles.highest.position;
    const targetPermissionPosition = message.guild.members.cache.get(args[0])
      .roles.highest.position;
    if (userPermissionPosition <= targetPermissionPosition) {
      action.reply(
        message,
        "you cannot change the exp of someone with a higher or equal role to you"
      );
      return;
    } else {
      if (
        message.member.permissions.has(PermissionsBitsField.Flags.ManageMembers || PermissionsBitsField.Flags.Administrator)
      ) {
        levels.setExp(message.guild.id, args[0], args[1]);
        action.reply(message, `set exp of ${args[0]} to ${args[1]}`);
      } else {
        action.reply(
          message,
          "you don't have manage members permission"
        );
        return;
      }
    }
  },
};
