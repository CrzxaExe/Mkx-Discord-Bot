import { EmbedBuilder } from "discord.js";
import { findGuild } from "../utils/guild";

export default async function (client, oldMessage, newMessage) {
  // Find guild in database
  const guild = await findGuild(newMessage.guild.id);

  if (!guild?.modChannel) return; // If there is no moderator channel id in database, not will send anything

  const channel = await client.channels.fetch(guild.modChannel);

  if (!channel) return;

  // Embed message
  const emb = new EmbedBuilder()
    .setTitle("Pesan Berubah")
    .setDescription(
      `User ${
        newMessage.author.globalName
          ? newMessage.author.globalName
          : newMessage.author.username
      }\n\nServer ${newMessage.guild.name}\nChannel <#${
        newMessage.channelId
      }>\n\nSebelum: ${oldMessage.content}\nSesudah: ${newMessage.content}`
    )
    .setFooter({ text: "MKx" });

  channel.send({ embeds: [emb] });
}
