import { EmbedBuilder } from "discord.js";
import { findGuild } from "../utils/guild";

export default async function (client, channel) {
  const guild = await findGuild(channel.guild.id); // Find guild in database

  if (!guild?.modChannel) return;

  const mod = await client.channels.fetch(guild.modChannel);

  if (!mod) return;

  // Embed message
  const emb = new EmbedBuilder()
    .setTitle("Channel dihapus")
    .setDescription(`Channel <#${channel.id}>`)
    .setFooter({ text: "MKx" });

  mod.send({ embeds: [emb] });
}
