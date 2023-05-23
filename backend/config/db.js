import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const uri = "mongodb+srv://ryannguyen:Ryan666@cluster0.cqkrctj.mongodb.net/?retryWrites=true&w=majority"
        await mongoose.connect(uri);
        console.log('MongoDB Connected !!!');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
  };

export default connectDB;