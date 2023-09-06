import { Text, Stack, Flex, Link } from "@chakra-ui/react";
import { Cube } from "./Cube";

export const Footer = () => {
  return (
    <Stack borderTop={"2px solid black"} mx={"10px"} py={"40px"}>
      <Flex justify={"space-between"}>
        <Flex alignItems={"center"}>
          <Text pr={"10px"}>Coded By</Text>
          <Cube />
        </Flex>

        <Link
          href="https://github.com/ElijahWilson-Kelly/winc-menu"
          border={"1px solid black"}
          padding={"8px"}
          borderRadius={"10px"}
          _hover={{
            textDecoration: "none",
            color: "blue",
            borderColor: "blue",
          }}
        >
          Github Repository
        </Link>
      </Flex>
    </Stack>
  );
};
