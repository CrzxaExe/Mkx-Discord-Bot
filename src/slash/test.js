import { ApplicationCommandOptionType } from "discord.js";

export const run = (client, { interaction }) => {
  interaction.reply("Test");
};

export const config = {
  name: "test",
  description: "Test command",
};
