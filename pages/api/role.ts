import { NextApiRequest, NextApiResponse } from "next";


const permission: {
  [key: string]: number;
} = {
  '/admin': 16,
  '/dashboard': 3,
  '/home': 0
};



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const path: string = req.body.path;
  const role = req.body.roleCode;
  console.log(path, role);

  if (!permission[path] || permission[path] <= role) {
    res.status(200).json({ status: "done" });
    return;
  }
  res.status(400).json({ status: "not allowed" });
  return;
}
