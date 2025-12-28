import { EmbedBuilder } from "discord.js";
import { findGuild } from "../utils/guild.js";

export default async function (client, oldUser, newUser) {
  // console.log(oldUser);
  const guild = await findGuild(newUser.id);

  if (!guild?.modChannel) return;

  const channel = await client.channels.fetch(newUser.id);

  const emb = new EmbedBuilder()
    .setTitle(`${newUser.nickname || newUser.user.globalName}`)
    .setDescription(`User update <@${newUser.id}>`)
    .setFooter({ text: "MKx" });

  channel.send({ embeds: [emb] });
}
