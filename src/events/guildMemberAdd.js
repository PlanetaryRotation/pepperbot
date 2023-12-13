import fs from "fs";

export default function (member, client) {
  if (member.guild.id === "1112819622505365556") {
    fs.appendFileSync(
      "../pepperbot/data/guildmembers.log",
      member.user.username + ` -- added by bot: ${Date()} \n`
    );
    const channel = client.channels.cache.get("1148814162273763418");
    channel.send(
      `added new guild member ${member.user.username} (${member.user.id}) to members list`
    );
  }
}
