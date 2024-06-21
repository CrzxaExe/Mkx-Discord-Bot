import { ApplicationCommandOptionType, EmbedBuilder } from 'discord.js';

export const run = async (client, { interaction, options }) => {
  //interaction.reply("Mengambil photo profile");

  let user = await interaction.guild.members.fetch(options.getUser("target"));
  let pp = new EmbedBuilder()
     .setTitle(`Photo Profile`)
     .setDescription("Nih")
     .setImage(user.displayAvatarURL({ size: 4096, format: "png" }))

  await interaction.reply({ content: "pp", embeds: [pp] })
};

export const config = {
  name: "pp",
  description: "Mengambil photo profile seseorang",
  options: [
    {
      name: "target",
      description: "Target yang akan diambil",
      type: ApplicationCommandOptionType.User,
      required: true
    }
  ]
};
