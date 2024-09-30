import { EmbedBuilder } from "discord.js";
import { updateGuild } from "../utils/guild";

export const run = async (client, { msg, message, args, user }) => {
  const prefix = args[0] || "mkx";

  await updateGuild(message.guild.id, { prefix });

  let emb = new EmbedBuilder()
    .setTitle("Custom Prefix")
    .setDescription(`Mengubah prefix menjadi ${prefix}`)
    .setFooter({ text: "MKx" });
  msg.send({ embeds: [emb] });
};

export const config = {
  name: "prefix",
  des: "Ubah prefix sesuka anda",
  mod: true,
  alias: [],
};
