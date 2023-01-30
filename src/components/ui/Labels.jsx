import { Flex, Text } from "@chakra-ui/react";

export const Labels = ({ labels, ...props }) => {
  console.log(labels);
  return (
    <Flex gap={2}>
      {labels.map((label) => (
        <Text
          key={label}
          {...props}
          borderRadius={5}
          p={1}
          fontWeight={"extrabold"}
          color={"gray.600"}
          fontSize={"2xs"}
        >
          {label}
        </Text>
      ))}
    </Flex>
  );
};
