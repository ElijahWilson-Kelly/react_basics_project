import { Flex, Text } from "@chakra-ui/react";

export const Header = ({ filterTerm, useFilterTerm }) => {
  const hoverStyles = { textDecor: "underline", cursor: "pointer" };
  const selectedTabStyles = {
    textDecoration: "underline",
    color: "lightblue",
  };

  return (
    <Flex color="white" gap={120}>
      <Text
        onClick={() => useFilterTerm("All")}
        _hover={hoverStyles}
        style={filterTerm === "All" ? selectedTabStyles : {}}
      >
        All
      </Text>
      <Text
        onClick={() => useFilterTerm("Vegetarian")}
        _hover={hoverStyles}
        style={filterTerm === "Vegetarian" ? selectedTabStyles : {}}
      >
        Vegetarian
      </Text>
      <Text
        onClick={() => useFilterTerm("Vegan")}
        _hover={hoverStyles}
        style={filterTerm === "Vegan" ? selectedTabStyles : {}}
      >
        Vegan
      </Text>
      <Text
        onClick={() => useFilterTerm("Favourites")}
        _hover={hoverStyles}
        style={filterTerm === "Favourites" ? selectedTabStyles : {}}
      >
        Favourites
      </Text>
    </Flex>
  );
};
