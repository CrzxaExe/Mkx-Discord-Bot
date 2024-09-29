import mongoose from "mongoose";

const GuildSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  guildId: { type: String, required: true },
  afkChannel: String,
  modChannel: String,
  joinChannel: String,
});

export default mongoose.model("guild", GuildSchema);
