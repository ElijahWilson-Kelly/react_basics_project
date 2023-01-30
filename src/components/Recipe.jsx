import { Box, Image, Flex, Text } from "@chakra-ui/react";
import { Labels } from "./ui/Labels";

export const Recipe = ({ recipe, useRecipe }) => {
  const healthLabels = recipe.healthLabels.filter(
    (label) => label === "Vegetarian" || label === "Vegan"
  );
  const dietLabels = recipe.dietLabels;
  const cautionLabels = recipe.cautions;
  const dishType =
    recipe.dishType[0][0].toUpperCase() + recipe.dishType[0].slice(1);

  return (
    <Box
      w={260}
      borderRadius="lg"
      borderWidth="1px"
      bg="white"
      boxShadow={"2xl"}
      overflow="hidden"
      mt={10}
      transition={"transform 200ms ease, opacity 200ms ease"}
      _hover={{
        cursor: "pointer",
        transform: "scale(1.1) rotate(-2deg) translateY(-20px)",
        opacity: "0.7",
      }}
      onClick={() => {
        useRecipe(recipe);
      }}
    >
      <Image
        src={recipe.image}
        h={160}
        w={"100%"}
        objectFit="cover"
        borderBottom={"3px solid black"}
      ></Image>
      <Flex
        direction="column"
        align={"center"}
        marginY={2}
        textAlign="center"
        gap={2}
        color={"gray.700"}
        fontSize={"xs"}
      >
        <Text color="gray.500">{recipe.mealType[0]}</Text>
        <Text color="gray.900" fontSize={"xl"} fontWeight="extrabold">
          {recipe.label}
        </Text>
        <Labels labels={healthLabels} bg="green.100" />
        <Labels labels={dietLabels} bg="blue.100" />
        <Text>
          Dish: <b>{dishType}</b>
        </Text>
        <Text>Cautions:</Text>
        <Labels labels={cautionLabels} bg="red.100" />
      </Flex>
    </Box>
  );
};
