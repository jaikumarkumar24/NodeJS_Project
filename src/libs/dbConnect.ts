import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/nodejs_project')
const db = mongoose.connection;
export default db;