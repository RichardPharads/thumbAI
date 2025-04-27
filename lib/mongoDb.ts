import {MongoClient , Db} from "mongodb"

const uri = process.env.MONGODB_URI as string;

let db:Db;
let client:MongoClient;

export async function connectDB(): Promise<Db>{
    if (db) return db;
    if (!client){
        client = new MongoClient(uri);
        await client.connect();
    }
    db = client.db();

    return db;
}

