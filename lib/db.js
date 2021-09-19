import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://masoud:g7vWLC2INojOSK1j@cluster0.wlefm.mongodb.net/Cluster0?retryWrites=true&w=majority"
  );
  return client;
}
