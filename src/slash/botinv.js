import { ApplicationCommandOptionType } from 'discord.js';

export const run = (client, { interaction }) => {
  interaction.reply(`https://discord.com/oauth2/authorize?client_id=${process.env.BOT_CLIENT}&scope=bot&permissions=8`)
};

export const config = {
  name: "botinv",
  description: "Undang bot ke via link"
};
