import { Flex, Text } from "@chakra-ui/react";

// Renders a Flexbox of labels with given properties for each label
export const Labels = ({ labels, ...props }) => {
  return (
    <Flex gap={2} wrap={"wrap"}>
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
