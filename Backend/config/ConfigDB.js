import mongoose from 'mongoose';

const ConfigDB = async () => {
    try {
        const connect = await mongoose.connect("mongodb://127.0.0.1:27017/rolebaseauth");
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default ConfigDB;