import { ApplicationCommandOptionType, EmbedBuilder } from "discord.js";

export const run = (client, { interaction, options }) => {
  const prompt = options.getString("query");

  try {
    const result = eval(prompt);

    let emb = new EmbedBuilder()
      .setTitle("Math")
      .setDescription(`Soal ${prompt}\nJawab **${result}**`)
      .setFooter({ text: "MKx" });
    interaction.reply({ embeds: [emb] });
  } catch (err) {
    interaction.reply("Error saat mengevaluasi " + err.message);
  }
};

export const config = {
  name: "math",
  description: "Matematika untukmu",
  options: [
    {
      name: "query",
      description: "Masukan input",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],
};
