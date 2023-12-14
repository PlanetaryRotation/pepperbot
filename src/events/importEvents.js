import { default as guildMemberAdd } from "./guildMemberAdd.js";
import { default as messageCreate } from "./messageCreate.js";
import { default as messageDelete } from "./messageDelete.js";
import { default as ready } from "./ready.js";
import { default as interactionCreate } from "./interactionCreate.js";
import { default as voiceStateUpdate } from "./voiceStateUpdate.js";

const events = {
  guildMemberAdd,
  messageCreate,
  messageDelete,
  ready,
  interactionCreate,
  voiceStateUpdate,
};

export default events;
