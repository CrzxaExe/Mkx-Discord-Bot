import { ApplicationCommandOptionType } from 'discord.js';

export const run = (client, { interaction }) => {
  interaction.reply("test")
};

export const config = {
  name: "test",
  description: "Test command"
};
