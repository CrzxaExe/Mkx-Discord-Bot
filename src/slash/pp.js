import { ApplicationCommandOptionType, EmbedBuilder } from "discord.js";

export const run = async (client, { interaction, options }) => {
  const user = await interaction.guild.members.fetch(options.getUser("target"));
  const pp = new EmbedBuilder()
    .setTitle(`${user.nickname || user.user.globalName}'s Photo Profile`)
    .setDescription("Nih")
    .setImage(user.displayAvatarURL({ size: 4096, format: "png" }));

  await interaction.reply({ embeds: [pp] });
};

export const config = {
  name: "pp",
  description: "Mengambil photo profile seseorang",
  options: [
    {
      name: "target",
      description: "Target yang akan diambil",
      type: ApplicationCommandOptionType.User,
      required: true,
    },
  ],
};
