import { MongoClient } from "mongodb"


export async function connectDb(db) {
    try{
        const client = await MongoClient.connect("mongodb://admin:admin123@127.0.0.1:27017");
        return client.db(db)
    }catch(err){
        console.log(err, "fail to connect")
    }
}