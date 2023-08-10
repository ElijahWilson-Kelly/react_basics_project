import { Box, Image, Flex, Text } from "@chakra-ui/react";
import { Labels } from "./Labels";

/*
  Renders a recipe card to be displayed by the Recipes Page
  Props -
    recipe - {object}
    useRecipe - {function}

  ~ Uses conditional rendering to only render a given label heading if the relevant labels are present
*/

export const RecipeCard = ({ recipe, useRecipe }) => {
  const healthLabels = recipe.healthLabels.filter(
    (label) => label === "Vegetarian" || label === "Vegan"
  );
  const dietLabels = recipe.dietLabels;
  const cautionLabels = recipe.cautions;
  const dishType =
    recipe.dishType[0][0].toUpperCase() + recipe.dishType[0].slice(1);

  return (
    <Box
      w={320}
      borderWidth="1px"
      bg="white"
      boxShadow={"2xl"}
      overflow="hidden"
      mt={10}
      pb={10}
      transition={"transform 200ms ease"}
      _hover={{
        cursor: "pointer",
        transform: "translate(-3px,-3px)",
      }}
      onClick={() => useRecipe(recipe)}
    >
      <Image
        src={recipe.image}
        h={200}
        w={"100%"}
        objectFit="cover"
        borderBottom={"1px solid black"}
      ></Image>
      <Flex
        direction="column"
        align={"center"}
        mt={4}
        textAlign="center"
        gap={3}
        color={"gray.700"}
        fontSize={"xs"}
      >
        <Text color="gray.400" fontWeight={"bold"}>
          {recipe.mealType[0].toUpperCase()}
        </Text>
        <Text color="gray.900" fontSize={"xl"} fontWeight="extrabold">
          {recipe.label}
        </Text>
        <Labels labels={healthLabels} bg="purple.100" />
        <Labels labels={dietLabels} bg="green.100" />
        <Text>
          Dish: <b>{dishType}</b>
        </Text>
        {cautionLabels.length > 0 && <Text>Cautions:</Text>}
        <Labels labels={cautionLabels} bg="red.100" />
      </Flex>
    </Box>
  );
};
