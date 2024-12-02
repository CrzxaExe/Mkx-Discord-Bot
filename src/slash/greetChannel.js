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

      updateGuild(interaction.guild.id, { greetChannel: channel.id });

      emb
        .setTitle("Set Greet Channel")
        .setDescription(`Set channel sambutan di @${channel.id}`)
        .setFooter({ text: "MKx" });
      break;
    case 1:
      updateGuild(interaction.guild.id, { greetChannel: "" });

      emb
        .setTitle("Delete Greet Channel")
        .setDescription(`Menghapus channel sambutan`)
        .setFooter({ text: "MKx" });
      break;

    default: {
      emb
        .setTitle(interaction.guild.name)
        .setDescription(
          `Greet channel: ${
            guild.greetChannel ? "@" + guild.greetChannel : "Belum di atur"
          }`
        )
        .setFooter({ text: "MKx" });
    }
  }

  interaction.reply({ embeds: [emb] });
};

export const config = {
  name: "greetchannel",
  description: "Setup channel sambutan server",
  mod: true,
  options: [
    {
      name: "query",
      description: "Query yang akan digunakan",
      type: ApplicationCommandOptionType.Integer,
      choices: [
        {
          name: "Atur channel ini menjadi channel sambutan",
          value: 0,
        },
        {
          name: "Hapus channel sambutan",
          value: 1,
        },
      ],
    },
  ],
};
