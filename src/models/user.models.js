import { model, Schema } from "mongoose";


const usersCollection = 'users'


const userSchema = new Schema({
  id: String,
  name: String,
  surname: String,
  password: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    unique: true,
    required: true
  },
  token: String,
  phone: String,
})


export const userModel = model(usersCollection, userSchema)
