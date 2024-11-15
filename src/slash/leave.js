import { getVoiceConnection } from "@discordjs/voice";

export const run = async (client, { interaction }) => {
  const connection = getVoiceConnection(interaction.guild.id).destroy();

  if (!connection)
    await interaction.reply({
      content: "Bot tidak sedang berada pada voice channel apapun",
      ephemeral: true,
    });

  await interaction.reply({
    content: "Keluar dari voice channel",
    ephemeral: true,
  });
};

export const config = {
  name: "leave",
  description: "Keluar dari channel",
};
