import { ApplicationCommandOptionType, EmbedBuilder } from "discord.js";

export const run = async (client, { interaction, options }) => {
  const user = await interaction.guild.members.fetch(options.getUser("target"));

  const data = new EmbedBuilder()
    .setTitle(`${user.nickname || user.user.globalName}`)
    .setDescription(
      `
        ID ${user.user.id}
        Bot ${user.user.bot}
        Role ${user.roles.cache.map((e) => `<@&${e.id}>`).join(", ")}
      `.trim()
    )
    .setTimestamp(user.guild.joinedTimestamp)
    .setImage(user.displayAvatarURL({ size: 4096, format: "png" }));

  await interaction.reply({ embeds: [data] });
};

export const config = {
  name: "user",
  description: "Mengambil data dari target",
  options: [
    {
      name: "target",
      description: "Target yang akan diambil",
      type: ApplicationCommandOptionType.User,
      required: true,
    },
  ],
};
