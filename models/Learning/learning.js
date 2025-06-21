const mongoose = require("mongoose");

const LearningContentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  subject: { type: String, required: true },
  section: { type: String, required: true },
  language: { type: String, default: "English" },
  contentType: {
    type: String,
    enum: ["text", "image", "pdf", "link"],
    required: true,
  },
  textContent: String,
  videoUrl: String,
  audioUrl: String,
  imageUrls: [String],
  downloadables: [String],

  gamification: {
    xp: { type: Number, default: 0 },
    badge: { type: String },
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("LearningContent", LearningContentSchema);
