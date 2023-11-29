import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username : {type : String, required: true, unique : true},
    password : {type : String, required: true}
})

const  UserModel = mongoose.model("users", UserSchema)

export default UserModel