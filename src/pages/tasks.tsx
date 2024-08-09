import { Stack } from "@mantine/core";
import Task from "@/features/Task";
import { Task as TaskType } from "@/types";
import { useQuery } from "@tanstack/react-query";

const Tasks = () => {
  const { isLoading, error, data } = useQuery<{ tasks: TaskType[] }>({
    queryKey: ["tasks"],
    queryFn: () =>
      fetch("http://localhost:3000/api/task", { method: "GET" }).then((res) =>
        res.json(),
      ),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <p>Tasks</p>
      <Stack mt="6px">
        {data?.tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            status={task.status}
          />
        ))}
      </Stack>
    </div>
  );
};

export default Tasks;
