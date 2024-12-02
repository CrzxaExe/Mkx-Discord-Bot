import { REST, Routes } from "discord.js";
import fs from "fs/promises";
import dotenv from "dotenv";

dotenv.config();

async function load(dir) {
  try {
    const files = await fs.readdir(dir);
    const out = [];

    for (const file of files) {
      let mod = await import(`${dir}/${file}`);
      out.push({ ...mod.config });
    }

    return out;
  } catch (err) {
    console.log(err);
  }
}

const rest = new REST().setToken(process.env.BOT_TOKEN);

load("./src/slash")
  .then(async (e) => {
    try {
      console.log("[System] Start to refresh");

      await rest.put(Routes.applicationCommands(process.env.BOT_CLIENT), {
        body: e,
      });

      console.log("[System] Successfully reloaded application (/) commands.");
    } catch (err) {
      console.log(err);
    }
  })
  .catch((err) => console.error(err));
