import mongoose from "mongoose";

const monsterSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    suite: { type: String, required: true },
    city: { type: String, required: true },
    zipcode: { type: String, required: true },
    geo: {
      lat: { type: String, required: true },
      lng: { type: String, required: true },
    },
  },
  phone: { type: String, required: true },
  website: { type: String, required: true },
  company: {
    name: { type: String, required: true },
    catchPhrase: { type: String, required: true },
    bs: { type: String, required: true },
  },
  image_url: { type: String, required: true },
});

const Monster =
  mongoose.models.Monster || mongoose.model("Monster", monsterSchema);

export default Monster;
