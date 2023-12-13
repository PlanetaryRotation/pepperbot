export default function (client) {
  console.log(`${client.user.tag} is online.`);
  const channel = client.channels.cache.get("1148814162273763418");
  channel.send("pepperbot restart complete");
}
