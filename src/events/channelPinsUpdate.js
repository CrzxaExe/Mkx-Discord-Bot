import { EmbedBuilder } from "discord.js";
import { findGuild } from "../utils/guild";

export default async function (client, channel) {
  const guild = await findGuild(channel.guild.id);

  if (guild?.modChannel) return;

  const chnl = await client.channels.fetch(channel.id);

  if (!chnl) return;

  const emb = new EmbedBuilder()
    .setTitle("Channel Pin Update")
    .setDescription(`Channel di update <#${channel.id}>`)
    .setFooter({ text: "MKx" });

  chnl.send({ embeds: [emb] });
}
