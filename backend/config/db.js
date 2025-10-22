import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://ksaran0006_db_user:food@cluster0.ragbroc.mongodb.net/FoodDelivery').then(()=>console.log("DB Connected"));
   
}

