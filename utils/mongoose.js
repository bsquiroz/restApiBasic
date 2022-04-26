import mongoose from "mongoose";

export const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Mongodb connected");
    } catch (error) {
        console.error(error);
    }
};
