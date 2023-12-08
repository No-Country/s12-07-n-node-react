import { model, Schema } from "mongoose";


const listCollection = 'favouriteLists'


const listsSchema = new Schema({
  owner: String,
  isShareable: Boolean,
  ownerId: {
    type: String,
    unique: true
  },
  id: {
    type: String,
    unique: true
  },
  list: [
    {
      title: String,
      id: Number,
    }
  ]
})


export const listModel = model(listCollection, listsSchema)
