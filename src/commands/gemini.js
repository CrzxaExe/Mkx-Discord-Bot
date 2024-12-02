import { GoogleGenerativeAI } from "@google/generative-ai";
import { EmbedBuilder } from "discord.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);

export const run = async (client, { msg, args }) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = args.join(" "),
      res = await model.generateContent(prompt);

    sendPartial(msg, { text: res.response.text(), prompt });
  } catch (err) {
    msg.send(JSON.stringify(err));
  }
};

export const config = {
  name: "gemini",
  des: "Bertanya dengan gemini AI",
  alias: ["gmn"],
};

const sendPartial = async (msg, { text, prompt }) => {
  let emb = [];
  for (let i = 0; i < text.length; i += 1000) {
    emb.push(
      new EmbedBuilder()
        .setTitle(prompt)
        .setDescription(text.substring(i, i + 1000))
    );
  }

  await msg.send({ embeds: [...emb] });
};
