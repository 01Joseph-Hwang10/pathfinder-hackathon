import type { NextApiRequest, NextApiResponse } from "next";

type Data = any;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = { url: req.url, body: req.body };
  res.status(200).json(data);
}
