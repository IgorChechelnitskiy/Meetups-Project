import {MongoClient} from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect("mongodb+srv://korsar:korsar123@cluster0.8417z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    const db = client.db();

    const meetupCollection = await db.collection("meetups");
    const result = await meetupCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({message: `Meetup was successfully created`});
  }
}

export default handler;