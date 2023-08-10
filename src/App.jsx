import { useState } from "react";
import { Flex, useToast } from "@chakra-ui/react";

import { RecipesPage } from "./pages/RecipesPage";
import { RecipePage } from "./pages/RecipePage";

import { data } from "./utils/data";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
const formatedData = data.hits.map((hit) => {
  const newUrl = hit.recipe.image.slice(4);
  return {
    ...hit,
    recipe: {
      ...hit.recipe,
      image: newUrl,
    },
  };
});

/*
  Main Component
  State - 
    recipe - {object} or {null}
    filterTerm - {string}
    favourtieRecipes - {array}
    searchTerm = {string}
  
  Conditionally renders RecipePage or RecipesPage depending on whether recipe has a value
*/
export const App = () => {
  const [recipe, setRecipe] = useState(null);
  const [filterTerm, setFilterTerm] = useState("All");
  const [favouriteRecipes, setFavouriteRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const toast = useToast();
  let recipes = formatedData;

  if (filterTerm === "Vegetarian") {
    recipes = recipes.filter((recipe) =>
      recipe.recipe.healthLabels.includes("Vegetarian")
    );
  } else if (filterTerm === "Vegan") {
    recipes = recipes.filter((recipe) =>
      recipe.recipe.healthLabels.includes("Vegan")
    );
  } else if (filterTerm === "Favourites") {
    recipes = favouriteRecipes;
  }

  const toggleRecipeFavourite = (recipeToToggle) => {
    const index = favouriteRecipes.findIndex(
      (recipe) => recipe.recipe.label === recipeToToggle.label
    );
    if (index < 0) {
      recipeToToggle.favourited = true;
      toast({
        title: "Item added",
        description: `${recipeToToggle.label} added to favourites`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setFavouriteRecipes((prevRecipies) => {
        return [...prevRecipies, { recipe: recipeToToggle }];
      });
    } else {
      recipeToToggle.favourited = false;
      toast({
        title: "Item removed",
        description: `${recipeToToggle.label} removed from favourites`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setFavouriteRecipes((prevRecipies) => {
        return [
          ...prevRecipies.slice(0, index),
          ...prevRecipies.slice(index + 1),
        ];
      });
    }
  };

  return (
    <Flex minHeight="100vh" direction="column" bg="white">
      <NavBar />
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterTerm={filterTerm}
        setFilterTerm={setFilterTerm}
      />
      {recipe ? (
        <RecipePage
          recipe={recipe}
          setRecipe={setRecipe}
          toggleRecipeFavourite={toggleRecipeFavourite}
        />
      ) : (
        <RecipesPage
          recipes={recipes}
          setRecipe={setRecipe}
          favouriteRecipes={favouriteRecipes}
          filterTerm={filterTerm}
          searchTerm={searchTerm}
        />
      )}
    </Flex>
  );
};
