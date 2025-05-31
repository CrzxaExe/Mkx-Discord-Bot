import { Client, Collection, GatewayIntentBits } from "discord.js";
import { actionF, consoleTime } from "./utils/console.js";
import mongoose from "mongoose";
import loadEvents from "./utils/loadEvents.js";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Main File Process
export default class AppClient extends Client {
  constructor(opt) {
    super(opt);

    this.commands = new Collection();
    this.aliases = new Collection();
    this.slashes = new Collection();
  }

  async setup() {
    // Event Loader
    this.events = new loadEvents(this);
    this.events.init();

    // Connect to mongodb, please check your database
    mongoose
      .connect(process.env.MONGODB)
      .then((connected) =>
        console.log(
          actionF("[System" + consoleTime() + "]") +
            " Connected to Database" +
            connected
        )
      ),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
      };

    // Client Side
    // Command & slash command loader

    (await import("./utils/loadCommands.js")).default(this);
    (await import("./utils/loadInteraction.js")).default(this);

    // Login to discord bot process.env.BOT_TOKEN<token>
    this.login(process.env.BOT_TOKEN);
  }
}
