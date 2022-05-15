import mongoose from  "mongoose"
export const connectMongoDB =()=>
{
    const conStr = process.env.MONGO_CLIENT;
   //console.log(process.env);
   // console.log(conStr);
    try
    {
        const connect = mongoose.connect(conStr);
        connect && console.log("connect to mongodb");
    
    }
    catch(error)
    {
        console.log(error);
    }
}