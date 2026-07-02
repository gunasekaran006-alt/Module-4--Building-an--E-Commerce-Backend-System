const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`\n✅ MongoDB Atlas Connected Successfully!`);
        console.log(`☁️  Cloud Host   : ${conn.connection.host}`);
        console.log(`🗄️  Database Name: ${conn.connection.name}\n`);
    } catch (error) {
        console.error(`\n❌ Error: ${error.message}\n`);
        process.exit(1);
    }
};

module.exports = connectDB;