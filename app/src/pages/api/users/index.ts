import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "api-key": process.env.MONGODB_DATA_API_KEY as string,
      },
    };
    const fetchBody = {
      dataSource: process.env.MONGODB_DATA_SOURCE,
      database: "sturdy-lamp-db",
      collection: "users",
    };
    const baseUrl = `${process.env.MONGODB_DATA_API_URL}/action`;
  
    try {
      switch (req.method) {
        case "GET":
          const readData = await fetch(`${baseUrl}/find`, {
            ...fetchOptions,
            body: JSON.stringify({
              ...fetchBody,
            }),
          });
          const readDataJson = await readData.json();
          res.status(200).json(readDataJson.documents);
          break;
        default:
          res.status(405).end();
          break;
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error });
    }
  }
  