import { Flex, Text } from "@chakra-ui/react";

/*
  Renders a single nutrient name with its amount in a flex box
  Props -
    nutrient - {object}
*/

export const NutrientLabel = ({ nutrient }) => {
  let amount = nutrient.quantity.toFixed();
  if (nutrient.unit === "g" || nutrient.unit === "mg") {
    amount += nutrient.unit;
  }

  return (
    <Flex direction={"column"}>
      <Text fontSize={13} fontWeight={"semibold"}>
        {amount}
      </Text>
      <Text fontSize={10}>{nutrient.label.toUpperCase()}</Text>
    </Flex>
  );
};
