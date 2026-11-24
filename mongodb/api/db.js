import { MongoClient } from "mongodb"


export async function connectDb() {
    try{
        const client = await MongoClient.connect("mongodb://admin:admin123@127.0.0.1:27017");
        return client.db("pokemon")
    }catch(err){
        console.log(err, "fail to connect")
    }
}