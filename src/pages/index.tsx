import { Button, TextInput } from "@mantine/core";

const Home = () => {
  return (
    <form>
      <TextInput style={{ width: 300 }} label="Enter Task" />
      <Button mt={6}>Submit</Button>
    </form>
  );
};

export default Home;
