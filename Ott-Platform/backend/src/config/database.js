import mongoose from "mongoose";

const  connectDB = async () => {
    try {
        const res = await mongoose.connect(process.env.DB_URL)
        console.log(`DB connection sucessfully`)
    } catch (error) {
        console.log(`Error at connectDB function and error is ${error.message}`);
        process.exit(1)
    }
}

export {
    connectDB
}


// 0.0.0.0/0
