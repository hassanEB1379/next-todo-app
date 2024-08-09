import { Box, Checkbox, Group } from "@mantine/core";
import { Task as TaskType } from "@/types";

const Task = ({ name, status, id }: TaskType) => {
  return (
    <Box
      style={{
        border: "1px solid var(--mantine-color-blue-5)",
        padding: "6px 12px",
        borderRadius: "6px",
        minWidth: "300px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <p>{name}</p>
      <Group>
        <Checkbox />
      </Group>
    </Box>
  );
};

export default Task;
