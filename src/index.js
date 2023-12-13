import { GatewayIntentBits, Partials, Client } from "discord.js";
import events from "./events/importEvents.js";
import register from "./register-commands.js";

export const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildVoiceStates,
  ],
  partials: [Partials.Message, Partials.Channel],
});

client.on("ready", (rclient) => {
  events.ready(rclient);
});

client.on("guildMemberAdd", (member) => {
  events.guildMemberAdd(member, client);
});

client.on("messageDelete", async (message) => {
  events.messageDelete(message);
});

client.on("messageCreate", async (message) => {
  events.messageCreate(message, client);
});

client.on("interactionCreate", (interaction) => {
  events.interactionCreate(interaction);
});

register();

client.login(process.env.TOKEN);
