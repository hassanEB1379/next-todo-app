import { Button, Loader, TextInput } from "@mantine/core";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Task } from "@/types";

const Home = () => {
  const [taskName, setTaskName] = useState("");

  const { mutate, status } = useMutation({
    mutationFn: (newTask: Task) => {
      return fetch("http://localhost:3000/api/task", {
        method: "POST",
        body: JSON.stringify(newTask),
      });
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };

  const handleCreateTask = (event: React.FormEvent) => {
    event.preventDefault();
    mutate({
      id: Math.floor(Math.random() * 1000),
      name: taskName,
      status: 0,
    });
  };

  return (
    <form onSubmit={handleCreateTask}>
      <TextInput
        value={taskName}
        onChange={handleChange}
        style={{ width: 300 }}
        label="Enter Task"
      />
      <Button type="submit" mt={6}>
        {status === "pending" ? (
          <Loader type="dots" size="sm" color="white" />
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
};

export default Home;
