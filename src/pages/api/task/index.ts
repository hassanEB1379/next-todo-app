import type { NextApiRequest, NextApiResponse } from "next";
import { tasks } from "@/db/tasks";
import { Task } from "@/types";

type Data = {
  tasks: Task[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === "POST") {
    tasks.push(JSON.parse(req.body));
  } else if (req.method === "GET") {
    const getTasks = tasks.filter((task: Task) => task.status !== 2);

    res.status(200).send({ tasks: getTasks });
  }
}
