import {NextApiRequest , NextApiResponse}  from 'next'

import { connectDB } from '@/lib/mongoDb'

export default async function handler (req: NextApiRequest , res: NextApiResponse){
    const db = await connectDB();
    const usersCollection = db.collection('users')

    switch (req.method){
        case 'GET':{
            try {
                const users = await usersCollection.find().toArray()
                return res.status(200).json(users)
            } catch (error) {
                return res.status(500).json({message: 'Error'})
            }            
        }
        case "POST":
        try {
        const { name, email } = req.body;
        if (!name || !email) {
          return res.status(400).json({ message: "Name and email are required." });
        }
        const result = await usersCollection.insertOne({ name, email });
        return res.status(201).json(result);
      } catch (error) {
        return res.status(500).json({ message: "Failed to create user." });
      }
      default:
      res.setHeader("Allow", ["GET", "POST"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
