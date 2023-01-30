import { useState } from "react";

import { Flex } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipesPage } from "./RecipesPage";
import { Recipe } from "../components/Recipe";

export const App = () => {
  const [recipe, useRecipe] = useState();

  return (
    <Flex minHeight="100vh" direction="column" bg="blue.900">
      {recipe ? (
        <Recipe recipe={recipe} />
      ) : (
        <RecipesPage data={data.hits} useRecipe={useRecipe} />
      )}
    </Flex>
  );
};
