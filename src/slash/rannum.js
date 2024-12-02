import { ApplicationCommandOptionType, EmbedBuilder } from "discord.js";

export const run = (client, { interaction, options }) => {
  const max = options.getInteger("max") || 0,
    min = options.getInteger("min") || 0;

  const emb = new EmbedBuilder()
    .setTitle("Random Number Generator")
    .setDescription(
      `Angka yang didapat ${Math.floor(Math.random() * max + min)}`
    )
    .setFooter({ text: "MKx" });
  interaction.reply({ embeds: [emb] });
};

export const config = {
  name: "rannum",
  description: "Random Number Generator",
  options: [
    {
      name: "max",
      description: "Maksimal dari random number",
      type: ApplicationCommandOptionType.Integer,
    },
    {
      name: "min",
      description: "Minimal dari random number",
      type: ApplicationCommandOptionType.Integer,
    },
  ],
};
