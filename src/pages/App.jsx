import { useState } from "react";

import { Flex, useToast } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipesPage } from "./RecipesPage";
import { RecipePage } from "./RecipePage";

export const App = () => {
  const [recipe, useRecipe] = useState(null);
  const [favouriteRecipes, useFavouriteRecipes] = useState([]);
  const toast = useToast();

  const toggleRecipeFavourite = (recipeToToggle) => {
    const index = favouriteRecipes.findIndex(
      (recipe) => recipe.recipe.label === recipeToToggle.label
    );

    if (index < 0) {
      recipeToToggle.favorited = true;
      toast({
        title: "Item added",
        description: `${recipeToToggle.label} added to favourites`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      useFavouriteRecipes((prevRecipies) => {
        return [...prevRecipies, { recipe: recipeToToggle }];
      });
    } else {
      recipeToToggle.favorited = false;
      console.log(recipeToToggle);
      toast({
        title: "Item removed",
        description: `${recipeToToggle.label} removed from favourites`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      useFavouriteRecipes((prevRecipies) => {
        return [
          ...prevRecipies.slice(0, index),
          ...prevRecipies.slice(index + 1),
        ];
      });
    }
  };

  return (
    <Flex minHeight="100vh" direction="column" bg="blue.900">
      {recipe ? (
        <RecipePage
          recipe={recipe}
          useRecipe={useRecipe}
          toggleRecipeFavourite={toggleRecipeFavourite}
        />
      ) : (
        <RecipesPage
          recipes={data.hits}
          useRecipe={useRecipe}
          favouriteRecipes={favouriteRecipes}
        />
      )}
    </Flex>
  );
};
