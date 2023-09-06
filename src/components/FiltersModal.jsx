import "../stylesheets/FiltersModal.css";

import { Box, Text, Button, Stack } from "@chakra-ui/react";

export const FiltersModal = ({ isOpen, onClose, setFilterTerm }) => {
  let overlayStyles, containerStyles;

  if (isOpen) {
    overlayStyles = {
      backgroundColor: "#00000088",
      display: "block",
    };
    containerStyles = {
      transform: "translateX(0)",
    };
  }

  const handleFilterSelect = (term) => {
    onClose();
    setFilterTerm(term);
  };

  return (
    <Box className="overlay" style={overlayStyles}>
      <Box className="filters-container" style={containerStyles} gap={"100px"}>
        <Stack>
          <Text
            borderBottom={"1px solid black"}
            className="filter-terms"
            onClick={() => handleFilterSelect("All")}
          >
            All RECIPES
          </Text>
          <Text
            borderBottom={"1px solid black"}
            className="filter-terms"
            onClick={() => handleFilterSelect("Vegetarian")}
          >
            VEGETARIAN RECIPES
          </Text>
          <Text
            className="filter-terms"
            onClick={() => handleFilterSelect("Vegan")}
          >
            VEGAN RECIPES
          </Text>
        </Stack>

        <Button onClick={onClose}>X</Button>
      </Box>
    </Box>
  );
};
