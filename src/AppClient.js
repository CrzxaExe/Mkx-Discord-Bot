import { Client, Collection, GatewayIntentBits } from 'discord.js';
import loadEvents from './utils/loadEvents.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Main File Process
export default class AppClient extends Client {
  constructor(opt) {
    super(opt)

    this.commands = new Collection();
    this.aliases = new Collection();
    this.slashes = new Collection();
  }

  async setup() {
    // Event Loader
    this.events = new loadEvents(this);
    this.events.init();

    // Command & slash command loader
    (await import('./utils/loadCommands.js')).default(this);
    (await import('./utils/loadInteraction.js')).default(this);

    // Login to discord bot process.env.BOT_TOKEN<token>
    this.login(process.env.BOT_TOKEN);
  }
}
