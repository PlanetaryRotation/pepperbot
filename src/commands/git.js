import * as action from "../util/discordAction.js";

export default {
  name: "git",
  description: "posts open pepper repo",
  arguments: "none",
  execute(message, args) {
    action.reply(message, "https://git.reidlab.online/ayeuhugyu/PepperBot");
  },
};
