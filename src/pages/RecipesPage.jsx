import { Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";

import { Header } from "../components/Header";
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

export const RecipesPage = ({
  recipes,
  setRecipe,
  searchTerm,
  filterTerm,
  setSearchTerm,
}) => {
  // Filter results by search term
  recipes = recipes.filter((recipe) =>
    recipe.recipe.label.toLowerCase().includes(searchTerm.toLowerCase())
  );
  let heading;
  let subheading;

  switch (filterTerm) {
    case "All":
      heading = "All Recipes";
      subheading =
        "Explore our whole selection of recipes. No matter what you feel like you will find something to delight the tastebuds!";
      break;
    case "Vegetarian":
      heading = "Vegetarian Recipes";
      subheading =
        "100% Taste. 0% Meat. Check out our delicious vegetarian recipes!";
      break;
    case "Vegan":
      heading = "Vegan Recipes";
      subheading =
        "Animal products? No thanks. Try our delicious vegan recipes!";
      break;
    case "Favourite":
      heading = "Favourited Recipes";
      subheading = "All your favourite recipes in one place!";
      break;
    default:
      heading = "Recipes";
      subheading = "";
  }

  return (
    <>
      {filterTerm == "" && (
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      )}
      <Flex direction={"column"} align={"center"} p={10} minH={"600px"}>
        <Heading textTransform={"uppercase"} fontWeight={500} color="blue.900">
          {heading}
        </Heading>
        <Text fontWeight={600} color={"#444"} mt={5}>
          {subheading}
        </Text>
        {searchTerm && (
          <Flex align={"center"} gap={"10px"}>
            <Text color="gray.500" my={"20px"}>
              Filtering recipes by &#34;{searchTerm}&#34;
            </Text>
            <Button
              h={"30px"}
              p={"4px"}
              color="red"
              fontSize={"0.6rem"}
              onClick={() => {
                setSearchTerm("");
              }}
            >
              Remove Filter
            </Button>
          </Flex>
        )}
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            null,
            "repeat(2, 1fr)",
            null,
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={5}
          justify="center"
          bg={"white"}
        >
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.recipe.label}
              recipe={recipe.recipe}
              setRecipe={setRecipe}
            />
          ))}
        </Grid>
        {filterTerm == "Favourite" && recipes.length == 0 && (
          <Text textAlign={"center"} color="gray.500" my={"50px"}>
            It&#39;s looking a little quiet here. Click the star on a recipe to
            add to your favourites
          </Text>
        )}
      </Flex>
    </>
  );
};
