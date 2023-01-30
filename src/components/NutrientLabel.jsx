import { Flex, Text } from "@chakra-ui/react";

export const NutrientLabel = ({ nutrient }) => {
  return (
    <Flex direction={"column"}>
      <Text fontSize={13} fontWeight={"semibold"}>
        {nutrient.quantity.toFixed()}
      </Text>
      <Text fontSize={10}>{nutrient.label.toUpperCase()}</Text>
    </Flex>
  );
};
