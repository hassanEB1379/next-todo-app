import { Stack } from "@mantine/core";
import Task from "@/features/Task";

const Tasks = () => {
  return (
    <div>
      <Stack>
        <p>Tasks</p>
        <Task />
      </Stack>
    </div>
  );
};

export default Tasks;
