import { REST, Routes } from "discord.js";
import { consoleTime, errorF, normalF } from "./src/utils/console";
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
    console.log(errorF("[System]") + " Error load slash command =>" + err);
  }
}

const rest = new REST().setToken(process.env.BOT_TOKEN);

load("./src/slash")
  .then(async (e) => {
    try {
      console.log(
        normalF("[System" + consoleTime() + "]") + " Start to refresh"
      );

      await rest.put(Routes.applicationCommands(process.env.BOT_CLIENT), {
        body: e,
      });

      console.log(
        normalF("[System" + consoleTime() + "]") +
          " Successfully reloaded application (/) commands."
      );
    } catch (err) {
      console.log(err);
    }
  })
  .catch((err) => console.error(err));
