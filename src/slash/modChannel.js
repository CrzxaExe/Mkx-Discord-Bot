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

      updateGuild(interaction.guild.id, { modChannel: channel.id });

      emb
        .setTitle("Set Mod Channel")
        .setDescription(`Set moderator channel di @${channel.id}`)
        .setFooter({ text: "MKx" });
      break;
    case 1:
      updateGuild(interaction.guild.id, { modChannel: "" });

      emb
        .setTitle("Delete Mod Channel")
        .setDescription(`Menghapus moderator channel`)
        .setFooter({ text: "MKx" });
      break;

    default: {
      emb
        .setTitle(interaction.guild.name)
        .setDescription(
          `Moderation channel: ${
            guild.modChannel ? "@" + guild.modChannel : "Belum di atur"
          }`
        )
        .setFooter({ text: "MKx" });
    }
  }

  interaction.reply({ embeds: [emb] });
};

export const config = {
  name: "modchannel",
  description: "Setup channel moderator server",
  mod: true,
  options: [
    {
      name: "query",
      description: "Query yang akan digunakan",
      type: ApplicationCommandOptionType.Integer,
      choices: [
        {
          name: "Atur channel ini menjadi moderator channel",
          value: 0,
        },
        {
          name: "Hapus channel moderator",
          value: 1,
        },
      ],
    },
  ],
};
