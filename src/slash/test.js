import { ApplicationCommandOptionType } from 'discord.js';

export const run = (client, { interaction }) => {
  interaction.reply("Testing Conplete")
};

export const config = {
  name: "test",
  description: "Test command"
};
