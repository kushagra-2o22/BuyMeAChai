import mongoose from "mongoose";

const connectDb = async () => {
    try {
      const conn = await mongoose.connect(`mongodb+srv://kushagracssingh:v7NJ26AOReoJudLT@cluster0.nfrmgay.mongodb.net/chai`, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }
  
  export default connectDb