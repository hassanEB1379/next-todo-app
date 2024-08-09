import { Button, Stack } from "@mantine/core";
import Link from "next/link";

const Navbar = () => {
  return (
    <Stack>
      <Link href="/">
        <Button w="100%" variant="subtle">
          Home
        </Button>
      </Link>
      <Link href="/tasks">
        <Button w="100%" variant="subtle">
          Tasks
        </Button>
      </Link>
    </Stack>
  );
};

export default Navbar;
