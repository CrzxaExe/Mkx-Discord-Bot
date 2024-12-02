import { ApplicationCommandOptionType } from "discord.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);

export const run = async (client, { interaction, options }) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    interaction.reply("Fetching data ke gemini");
    const prompt = options.get("query"),
      res = await model.generateContent(prompt.value);

    await interaction.editReply(res.response.text());
  } catch (err) {
    console.log(err);
  }
};

export const config = {
  name: "gemini",
  description: "Tanya dengan AI milik google yang bernama Gemini",
  options: [
    {
      name: "query",
      description: "Apa yang ingin ditanyakan",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],
};
