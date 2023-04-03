import mongoose from "mongoose";

const Schema = mongoose.Schema;

const trackSchema = new Schema(
  {
    publisherId: {
      type: String,
      required: true,
    },
    audioId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Track = mongoose.model("Track", trackSchema);
export default Track;
