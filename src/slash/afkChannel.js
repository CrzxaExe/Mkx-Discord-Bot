import { ApplicationCommandOptionType, EmbedBuilder } from "discord.js";
import { findGuild, updateGuild } from "../utils/guild";

export const run = async (client, { interaction, options }) => {
  const guild = await findGuild(interaction.guild.id),
    act = options.get("query");

  let emb = new EmbedBuilder();

  switch (act?.value) {
    case 0:
      const gd = await client.guilds.fetch(interaction.guild.id),
        channel = await gd.channels.cache.get(interaction.channel.id);

      updateGuild(interaction.guild.id, { afkChannel: channel.id });

      emb
        .setTitle("Set Afk Channel")
        .setDescription(`Set afk channel di @${channel.id}`)
        .setFooter({ text: "MKx" });
      break;
    case 1:
      updateGuild(interaction.guild.id, { afkChannel: "" });

      emb
        .setTitle("Delete Afk Channel")
        .setDescription(`Menghapus afk channel`)
        .setFooter({ text: "MKx" });
      break;

    default: {
      emb
        .setTitle(interaction.guild.name)
        .setDescription(
          `Afk channel: ${
            guild.afkChannel ? "@" + guild.afkChannel : "Belum di atur"
          }`
        )
        .setFooter({ text: "MKx" });
    }
  }

  interaction.reply({ embeds: [emb] });
};

export const config = {
  name: "afkchannel",
  description: "Setup channel afk server",
  mod: true,
  options: [
    {
      name: "query",
      description: "Query yang akan digunakan",
      type: ApplicationCommandOptionType.Integer,
      choices: [
        {
          name: "Atur channel ini menjadi afk channel",
          value: 0,
        },
        {
          name: "Hapus channel afk",
          value: 1,
        },
      ],
    },
  ],
};
