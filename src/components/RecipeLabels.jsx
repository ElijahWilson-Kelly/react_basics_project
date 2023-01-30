import { Flex, Heading } from "@chakra-ui/react";
import { Labels } from "./Labels";
import { NutrientLabel } from "./NutrientLabel";

export const RecipeLabels = ({ recipe }) => {
  const relaventNutrientsKeys = [
    "ENERC_KCAL",
    "CHOCDF",
    "PROCNT",
    "FAT",
    "CHOLE",
    "NA",
  ];
  const nutrientLabels = relaventNutrientsKeys.map(
    (key) => recipe.totalNutrients[key]
  );

  return (
    <Flex direction="column" gap={3}>
      <Heading>Health Labels:</Heading>
      <Labels labels={recipe.healthLabels} bg={"purple.100"} />
      {recipe.dietLabels.length > 0 && <Heading>Diet:</Heading>}
      <Labels labels={recipe.dietLabels} bg={"green.100"} />
      {recipe.cautions.length > 0 && <Heading>Cautions:</Heading>}
      <Labels labels={recipe.cautions} bg={"red.100"} />
      <Heading>Total Nutrients:</Heading>
      <Flex wrap={"wrap"} gap={5}>
        {nutrientLabels.map((nutrient) => {
          return <NutrientLabel key={nutrient.label} nutrient={nutrient} />;
        })}
      </Flex>
    </Flex>
  );
};
