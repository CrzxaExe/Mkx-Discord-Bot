import { ApplicationCommandOptionType, EmbedBuilder } from 'discord.js';

export const run = async (client, { interaction, options }) => {
  let user = await interaction.guild.members.fetch(options.getUser("target"));
  // console.log(user)
  let data = new EmbedBuilder()
     .setTitle(`${user.nickname || user.user.globalName}`)
     .setDescription(`Bot ${user.user.bot}`)
     .setImage(user.displayAvatarURL({ size: 4096, format: "png" }))

  await interaction.reply({ embeds: [data] })
};

export const config = {
  name: "user",
  description: "Mengambil data dari target",
  options: [
    {
      name: "target",
      description: "Target yang akan diambil",
      type: ApplicationCommandOptionType.User,
      required: true
    }
  ]
};
