// pages/api/bounties.ts
import type { NextApiRequest, NextApiResponse } from "next";

// This is a simple in-memory data store for the example
// In a real-world application, you would replace this with database storage
const bountiesStore: any[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Parse the request body to get the new bounty data
    const bounty = req.body;

    // Add the new bounty to the in-memory data store
    bountiesStore.push(bounty);

    // Return the saved bounty and a status of 201 (Created)
    res.status(201).json(bounty);
  } else {
    // Return an error for unsupported methods
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
