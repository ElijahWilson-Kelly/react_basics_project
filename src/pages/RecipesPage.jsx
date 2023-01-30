import { Flex, Heading } from "@chakra-ui/react";
import { SearchBar } from "../components/ui/SearchBar";
import { useState } from "react";
import { RecipeCard } from "../components/RecipeCard";

export const RecipesPage = ({ data, useRecipe }) => {
  const [searchTerm, useSearchTerm] = useState("");
  const recipes = data.filter((item) =>
    item.recipe.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Flex direction={"column"} align={"center"} p={10}>
      <Heading
        color="cyan.50"
        fontSize={["5xl", null, "6xl", "7xl"]}
        letterSpacing={1.5}
        fontWeight={"hairline"}
        borderBottom={"1px solid white"}
      >
        Winc Kitchen
      </Heading>
      <SearchBar
        searchTerm={searchTerm}
        useSearchTerm={useSearchTerm}
        mt={10}
        w={"60%"}
        fontWeight={"bold"}
        color={"gray.200"}
      />
      <Flex wrap={"wrap"} gap={8} justify="center">
        {recipes.map((recipe) => (
          <RecipeCard
            recipe={recipe.recipe}
            key={recipe.recipe.label}
            useRecipe={useRecipe}
          />
        ))}
      </Flex>
    </Flex>
  );
};
