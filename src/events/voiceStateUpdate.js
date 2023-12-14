import getVoiceConnection from "@discordjs/voice"

export default async function (oldState, newState) {
  if (oldState.channelId = getVoiceConnection(oldState.guild.id).id) {
    if (newState.channelId = undefined) {
        let channel = await client.channels.cache.get(oldState.channelId);
        if(!channel){
            console.log("unable to find voice channel");
            return;
        }
        memberCount = channel.members.size;
        if(MemberCount <= 1){
            channel.leave();
        }
    }
  }
}
