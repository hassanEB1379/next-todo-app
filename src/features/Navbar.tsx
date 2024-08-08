import { Button, Stack } from "@mantine/core";
import Link from "next/link";

const Navbar = () => {
  return (
    <Stack>
      <Button variant="subtle">
        <Link href="/">Home</Link>
      </Button>
      <Button variant="subtle">
        <Link href="/tasks">Tasks</Link>
      </Button>
    </Stack>
  );
};

export default Navbar;
