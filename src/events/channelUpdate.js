import { EmbedBuilder } from "discord.js";
import { findGuild } from "../utils/guild";

export default async function (client, oldChannel, newChannel) {
  let guild = await findGuild(newChannel.guild.id);

  if (guild?.modChannel) return;

  let channel = await client.channels.fetch(newChannel.id);

  if (!channel) return;

  let emb = new EmbedBuilder()
    .setTitle("Channel Update")
    .setDescription(`Channel di update <#${newChannel.id}>`)
    .setFooter({ text: "MKx" });

  channel.send({ embeds: [emb] });
}
