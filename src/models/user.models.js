import { model, Schema } from "mongoose";

const usersCollection = 'users'

const userSchema = new Schema({
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
  needsNotificacion: Boolean
})

export const userModel = model(usersCollection, userSchema)
