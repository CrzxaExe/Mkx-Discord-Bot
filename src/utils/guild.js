import mongoose from "mongoose";
import GuildSchema from "../models/GuildSchema";

// Guild Schema function

// Create new field
const createGuild = async (data) => {
  let guild = await GuildSchema.findOne({ guildId: data.guildId }); // Find

  if (guild) return { message: "Guild sudah ada" }; // If found, return error json

  // Create new field
  guild = new GuildSchema({
    _id: new mongoose.Types.ObjectId(),
    guildId: data.guildId,
  });
  await guild.save(); // Save filed

  return guild;
};

// Find field
const findGuild = async (id) => {
  let guild = await GuildSchema.findOne({ guildId: id }); // Find

  if (!guild) guild = createGuild({ guildId: id }); // If not found, create new one

  return guild;
};

// Update field
const updateGuild = async (id, data) => {
  let guild = await GuildSchema.findOne({ guildId: id }); // find

  if (!guild) guild = await createGuild({ guildId: id }); // If not found, create new one

  let ret = await GuildSchema.findOneAndUpdate({ guildId: id }, data); // Find and update the field
  return ret;
};

export { createGuild, findGuild, updateGuild };
