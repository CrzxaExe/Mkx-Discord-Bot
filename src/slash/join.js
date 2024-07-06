import { ApplicationCommandOptionType } from 'discord.js';
import { joinVoiceChannel } from '@discordjs/voice';

export const run = async (client, { interaction, options }) => {
  const voiceChannel = (options.getChannel("channel"))?.id || interaction.member.voice.channelId

  if (!voiceChannel) return await interaction.reply({ content: "Kamu harus join voice channel dulu", ephemeral: true });
  const connection = await joinVoiceChannel({
    channelId: voiceChannel,
    guildId: interaction.guildId,
    adapterCreator: interaction.guild.voiceAdapterCreator
  })
  // console.log(connection)
  await interaction.reply({ content: "Mencoba masuk ke voice channel", ephemeral: true });
};

export const config = {
  name: "join",
  description: "Masuk ke voice channel user",
  options: [
    {
      name: "channel",
      description: "Channel yang akan dituju",
      type: ApplicationCommandOptionType.Channel
    }
  ]
};