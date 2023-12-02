import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
    Name : {type : String, required : true}, 
    ingredients : [{type : String, required : true}],
    instructions : {type : String, required : true},
    imageUrl : {type :  String, required : true},
    cookingTime : {type : Number, required : true}, 
    userOwner : {type : mongoose.Schema.Types.ObjectId, ref : "users", required : true}
})

const  RecipeModel = mongoose.model("recipes", RecipeSchema)

export default RecipeModel