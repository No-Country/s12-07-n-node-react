import { model, Schema } from "mongoose";


const listCollection = 'favouriteLists'


const listsSchema = new Schema({
  owner: String,
  isShareable: Boolean,
  ownerId: {
    type: String,
    unique: true
  },
  list: [
    {
      title: String,
      id: Number,
      image: String
    }
  ]
})


export const listModel = model(listCollection, listsSchema)
