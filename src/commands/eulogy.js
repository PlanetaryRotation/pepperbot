import fs from "fs";
import * as action from "../util/discordAction.js";

const prefix = process.env.PREFIX;

export default {
  name: "eulogy",
  description: "generates a eulogy",
  arguments: "name",
  execute(message, args) {
    const msgnoprefix = message.content.slice(prefix.length + this.name.length);
    const name = msgnoprefix.slice(0, 2000);
    const jsonstring = fs.readFileSync("../pepperbot/data/eulogies.json");
    const parsedEulogies = JSON.parse(jsonstring);
    const maxRan = parsedEulogies.eulogies.length;

    const randomnum = Math.floor(Math.random() * maxRan);

    const eulogy = parsedEulogies.eulogies[randomnum];

    if (name.replaceAll(" ", "") === "") {
      action.reply(message, "no name supplied");
      return;
    }

    const replacedEulogy = eulogy.replaceAll("##NAME", name);
    action.reply(message, replacedEulogy);
  },
};
