import { useState } from "react";

import { Flex } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipesPage } from "./RecipesPage";
import { RecipePage } from "./RecipePage";

export const App = () => {
  const [recipe, useRecipe] = useState(null);

  return (
    <Flex minHeight="100vh" direction="column" bg="blue.900">
      {recipe ? (
        <RecipePage recipe={recipe} useRecipe={useRecipe} />
      ) : (
        <RecipesPage data={data.hits} useRecipe={useRecipe} />
      )}
    </Flex>
  );
};
