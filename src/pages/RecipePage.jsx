import { Box, Flex, Grid, IconButton, Image } from "@chakra-ui/react";
import { RecipeInformation } from "../components/RecipeInfomation";
import { RecipeLabels } from "../components/RecipeLabels";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { CiHeart } from "react-icons/ci";

/*
  Recipe Component for displaying more detailed infomation
    Props -
      recipe - {object}
      useRecipe - {function}
      toggleRecipeFavourtie - {function}
*/

export const RecipePage = ({ recipe, setRecipe, toggleRecipeFavourite }) => {
  return (
    <Box bg={"white"} w={["100%", null, "70%"]} mx={"auto"} maxW={800}>
      <Flex justify={"space-between"}>
        <IconButton
          icon={<ChevronLeftIcon fontSize={20} />}
          aria-label="Return to homepage"
          p={10}
          bg={"none"}
          onClick={() => setRecipe(null)}
        />
        <IconButton
          icon={
            <CiHeart fontSize={25} color={recipe.favourited ? "red" : "gray"} />
          }
          _hover={{ opacity: "0.7" }}
          aria-label="Favourite recipe"
          p={10}
          bg={"none"}
          onClick={() => toggleRecipeFavourite(recipe)}
        />
      </Flex>

      <Image
        src={recipe.image}
        w={"100%"}
        h={[200, 300, 400]}
        objectFit="cover"
      ></Image>

      <Grid templateColumns={["1fr", null, null, "5fr 4fr"]} p={10} gap={15}>
        <RecipeInformation recipe={recipe} />
        <RecipeLabels recipe={recipe} />
      </Grid>
    </Box>
  );
};
