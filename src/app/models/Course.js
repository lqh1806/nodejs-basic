import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, maxLength: 255 },
  description: { type: String, maxLength: 600 },
  image: { type: String, maxLength: 255 },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
  slug: { type: String },
  videoId: { type: String, maxLength: 255 },
});

export default mongoose.model('Course', Course);
