import { findGuild } from "../utils/guild";

export default async function (client, oldUser, newUser) {
  const guild = await findGuild(newUser.guild.id);

  if (!guild?.modChannel) return;

  const channel = await client.channels.fetch(newUser.guild.id);
}
