import * as action from "../util/discordAction.js";

export default {
  name: "mymovie",
  description: "posts my movie",
  arguments: "none",
  execute(message, args) {
    action.reply(
      message,
      "https://cdn.discordapp.com/attachments/755150633191080073/1149158052784775219/My_Movie.mp4"
    );
  },
};
