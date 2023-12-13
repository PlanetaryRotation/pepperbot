import * as action from "../util/discordAction.js";

export default {
  name: "links",
  description: 'posts "important" links',
  arguments: "none",
  execute(message, args) {
    const embed = action.createEmbed();
    embed.setTitle("very imphortance linkers");
    embed.setDescription(`
        https://reidlab.online
        https://goop.network -- VERY IMPORTANT!!!!
        pepper.church releasing [TIME] (never (not anytime soon))
        `);

    action.reply(message, { embeds: [embed] });
  },
};
