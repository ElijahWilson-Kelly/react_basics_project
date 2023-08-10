import { Flex, Grid } from "@chakra-ui/react";
import { RecipeCard } from "../components/RecipeCard";

/*
  Recipes Page for rendering list of recipes
  Props - 
    recipes - {array}
    useRecipe - {function}
    filterTerm - {string}
    useFitlerTerm - {function}

  State - 
    searchTerm - {string}
*/

export const RecipesPage = ({ recipes, setRecipe, searchTerm }) => {
  // Filter results by search term
  recipes = recipes.filter((recipe) =>
    recipe.recipe.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Flex direction={"column"} align={"center"} p={10}>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          null,
          "repeat(2, 1fr)",
          null,
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={20}
        justify="center"
      >
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.recipe.label}
            recipe={recipe.recipe}
            setRecipe={setRecipe}
          />
        ))}
      </Grid>
    </Flex>
  );
};
