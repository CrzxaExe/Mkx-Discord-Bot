import { EmbedBuilder } from "discord.js";
import { findGuild } from "../utils/guild.js";

export default async function (client, oldMember, newMember) {
  console.log("New Member ", newMember);
  const guild = await findGuild(client.guild.id);

  if (!guild?.modChannel) return;

  const channel = await client.channels.fetch(guild.modChannel);

  if (!channel) return;

  const emb = new EmbedBuilder()
    .setTitle("User Server Update")
    .setDescription(`Guild update`)
    .setFooter({ text: "MKx" });
}
