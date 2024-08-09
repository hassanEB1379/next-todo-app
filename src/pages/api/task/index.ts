import type { NextApiRequest, NextApiResponse } from "next";
import { tasks } from "@/db/tasks";
import { Task } from "@/types";

type Data = {
  tasks?: Task[];
  message?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === "POST") {
    setTimeout(() => {
      tasks.push(JSON.parse(req.body));

      res.status(200).json({});
    }, 2000);
  } else if (req.method === "GET") {
    const getTasks = tasks.filter((task: Task) => task.status !== 2);

    res.status(200).send({ tasks: getTasks });
  }
}
