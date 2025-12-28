import { GatewayIntentBits } from "discord.js";
import { consoleTime, errorF } from "./src/utils/console.js";
import AppClient from "./src/AppClient.js";
import dotenv from "dotenv";
import express from "express";

// Setup Env
dotenv.config();

// Client class
const client = new AppClient({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  disableMentions: "everyone",
});

process.stdout.write("\x1Bc");

// Class method init
client.setup();

const server = express().listen(3000, () =>
  console.log("[System" + consoleTime() + "] Start server")
);

// Logging an error
process.on("uncaughtException", (error) => {
  console.error(
    errorF("[System" + consoleTime() + "]") + " Caught Error =>",
    error
  );
});
process.on("unhandledRejection", (reason, promise) => {
  console.error(
    errorF("[System" + consoleTime() + "]") + " Unhandled Rejection =>",
    reason
  );
});

// Registering Slash Commands
(async () => {
  await import("./slashRegister.js");
})();
