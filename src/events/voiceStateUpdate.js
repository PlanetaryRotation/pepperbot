import { getVoiceConnection } from "@discordjs/voice";

export default async function (oldState, newState, client) {
  if (oldState.channelId === null || typeof oldState.channelId == "undefined") {
    return;
  }
  const guild = oldState.guild;

  let connection;
  try {
    connection = getVoiceConnection(guild.id);
  } catch (err) {
    console.log(err);
    const debugchannel = client.channels.cache.get("1148814162273763418");
    debugchannel.send(
      "invalid voiceStateUpdate: no guild found. check console for details <@440163494529073152>"
    );
    return;
  }
  if (connection) {
    if (connection.joinConfig.channelId === oldState.channelId) {
      if (newState.channelId !== undefined) {
        if (
          guild.members.cache.filter(
            (member) =>
              member.voice.channelId === connection.joinConfig.channelId
          ).size <= 1
        ) {
          connection.destroy();
          const debugchannel = client.channels.cache.get("1148814162273763418");
          debugchannel.send(
            `left <#${connection.joinConfig.channelId}> due to nobody being in it`
          );
        }
      }
    }
  }
}
