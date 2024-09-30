import mongoose from "mongoose";

const GuildSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  guildId: { type: String, required: true },
  prefix: { type: String, default: "mkx" },
  afkChannel: String,
  modChannel: String,
  greetChannel: String,
});

export default mongoose.model("guild", GuildSchema);
