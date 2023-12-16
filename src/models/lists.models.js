import { model, Schema } from "mongoose";


const listCollection = 'favouriteLists'

const content = new Schema({
  contentName: { type: String, required: true },
  contentId: { type: String, required: true },
  imageURL: { type: String, required: true },
  media_type: { type: String, required: true }
});

const listsSchema = new Schema({
  isShareable: { type: Boolean, default: false },
  ownerId: {
    type: String,
    unique: true,
    required: true
  },
  list: [content]
})


export const listModel = model(listCollection, listsSchema)
