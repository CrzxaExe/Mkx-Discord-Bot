import { ApplicationCommandOptionType } from 'discord.js';
import { getVoiceConnection } from '@discordjs/voice';

export const run = async (client, { interaction }) => {
  const connection = getVoiceConnection(interaction.guild.id).destroy();
  await interaction.reply({ content: "Testing Conplete", ephemeral: true })
};

export const config = {
  name: "leave",
  description: "Keluar dari channel"
};
