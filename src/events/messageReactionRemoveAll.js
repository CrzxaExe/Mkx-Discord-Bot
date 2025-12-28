import { EmbedBuilder } from "discord.js";
import { findGuild } from "../utils/guild.js";

export default async function (client, message) {
  const guild = await findGuild(message.guild.id); // Find guild in database

  if (!guild?.modChannel) return; // If there is no moderator channel id in database, not will send anything

  const channel = await client.channels.fetch(guild.modChannel);

  if (!channel) return;

  // Embed message
  const emb = new EmbedBuilder()
    .setTitle("Semua reaksi pesan dihapus")
    .setDescription(
      `User ${
        message.author.globalName
          ? message.author.globalName
          : message.author.username
      }\n\nServer ${message.guild.name}\nChannel <#${
        message.channel.id
      }>\n\nContent: ${message.content}`
    )
    .setFooter({ text: "MKx" });

  channel.send({ embeds: [emb] });
}
