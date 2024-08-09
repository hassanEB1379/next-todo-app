import type { NextApiRequest, NextApiResponse } from "next";
import { Task } from "@/types";
import { tasks } from "@/db/tasks";

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === "DELETE") {
    const { taskId } = req.query;

    tasks.forEach((task: Task) => {
      if (task.id === Number(taskId)) {
        task.status = 2;
      }
    });
  } else if (req.method === "PUT") {
    const { taskId } = req.query;

    tasks.forEach((task: Task) => {
      if (task.id === Number(taskId)) {
        task.status = 1;
      }
    });
  }
}
