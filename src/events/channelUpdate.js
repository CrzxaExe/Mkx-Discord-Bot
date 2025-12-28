import { EmbedBuilder } from "discord.js";
import { findGuild } from "../utils/guild.js";

export default async function (client, oldChannel, newChannel) {
  const guild = await findGuild(newChannel.guild.id);

  if (guild?.modChannel) return;

  const channel = await client.channels.fetch(newChannel.id);

  if (!channel) return;

  const emb = new EmbedBuilder()
    .setTitle("Channel Update")
    .setDescription(`Channel di update <#${newChannel.id}>`)
    .setFooter({ text: "MKx" });

  channel.send({ embeds: [emb] });
}
