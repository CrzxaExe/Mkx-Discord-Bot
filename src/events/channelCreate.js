import { EmbedBuilder } from "discord.js";
import { findGuild } from "../utils/guild";

export default async function (client, channel) {
  let guild = await findGuild(channel.guild.id); // Find guild in database

  if (!guild?.modChannel) return;

  let mod = await client.channels.fetch(guild.modChannel);

  // Embed message
  const emb = new EmbedBuilder()
    .setTitle("Channel dibuat")
    .setDescription(`Channel <#${channel.id}>`)
    .setFooter({ text: "MKx" });

  mod.send({ embeds: [emb] });
}
