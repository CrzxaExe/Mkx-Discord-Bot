import { GatewayIntentBits } from 'discord.js';
import AppClient from './src/AppClient.js';
import dotenv from 'dotenv';

// Setup Env
dotenv.config()

// Client class
const client = new AppClient({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
  intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent ],
  disableMentions: 'everyone'
});

// Class method init
client.setup();

process.stdout.write('\x1Bc');

// Logging an error
process.on('uncaughtException', (error) => {
  console.error("[System] Caught Error =>",error);
});
process.on('unhandledRejection', (reason, promise) => {
  console.error('[System] Unhandled Rejection =>', reason);
});

// Registering Slash Commands
(async () => {
  await import("./slashRegister.js")
})();