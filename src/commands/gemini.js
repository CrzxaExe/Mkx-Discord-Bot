import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);

export const run = async (client, { msg, args }) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

    let prompt = args.join(" "), res = await model.generateContent(prompt)
    
    msg.send(res.response.text())
  } catch(err) {
    msg.send(err);
  }
};

export const config = {
  name: "gemini",
  alias: []
};
