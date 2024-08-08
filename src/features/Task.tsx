import { Box, Button, Checkbox, Group } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

const Task = () => {
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
      <p>Sample task</p>
      <Group>
        <Checkbox />
        <Button p={0} variant="transparent">
          <IconTrash color="var(--mantine-color-red-5)" />
        </Button>
      </Group>
    </Box>
  );
};

export default Task;
