import mongoose from 'mongoose';


// const MONGO_DB_URL = 'mongodb://localhost:27017/file_sharing';
const MONGO_DB_URL = 'mongodb+srv://admin:fileToShare@cluster0.fqydn.mongodb.net/file_sharing?retryWrites=true&w=majority&appName=Cluster0';
export const dbConnection = async()=>{
    try{
        await mongoose.connect(MONGO_DB_URL,{
            useNewUrlParser : true,
            useUnifiedTopology : true,
        });
        console.log("DB Connection Successfull");
    }catch(error){
        console.log("Error while making connection with Db ",error.message);
        alert("Error while making connection with Db ");
    }
}