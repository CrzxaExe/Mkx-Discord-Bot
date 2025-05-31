import { ApplicationCommandOptionType } from "discord.js";
import axios from "axios";

export const run = async (client, { interaction, options }) => {
  try {
    interaction.reply("Fetching data ke api");
    const prompt = options.get("query"),
      res = await axios.post(
        process.env.REST + "gemini?key=" + process.env.APIKEY,
        {
          prompt: prompt.value,
        }
      );

    await interaction.editReply(res.data.result);
  } catch (err) {
    console.error(err);

    await interaction.editReply("Error saat fetching data ke API");
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
