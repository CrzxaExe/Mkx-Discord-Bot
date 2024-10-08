import { EmbedBuilder } from "discord.js";

export const run = (client, { msg, args }) => {
  const prompt = args.join(" ");
  try {
    const result = eval(prompt);

    let emb = new EmbedBuilder()
      .setTitle("Math")
      .setDescription(`Soal ${prompt}\nJawab ${result}`)
      .setFooter({ text: "MKx" });
    msg.send({ embeds: [emb] });
  } catch (err) {
    msg.send("Error saat mengevaluasi " + err.message);
  }
};

export const config = {
  name: "math",
  des: "Matematika untuk anda",
  alias: [],
};
