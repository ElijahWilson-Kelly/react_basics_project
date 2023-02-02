import { Flex, Text } from "@chakra-ui/react";

/*
  Header componenet for filter options
    Props - 
      filterTerm - {string}
      useFilter - {function}
    
*/

export const Header = ({ filterTerm, useFilterTerm }) => {
  // Styling for the selected filter element
  const selectedTabStyles = {
    textDecoration: "underline",
    color: "lightblue",
  };
  // Styling that applys to all the text elements
  const filterTabStyles = {
    _hover: { textDecor: "underline", cursor: "pointer" },
    borderBottom: ["2px solid #FFFFFF88", null, "none"],
    py: 3,
  };

  return (
    <Flex
      color="white"
      justify={"space-evenly"}
      w={"100%"}
      direction={["column", null, "row"]}
    >
      <Text
        onClick={() => useFilterTerm("All")}
        {...filterTabStyles}
        style={filterTerm === "All" ? selectedTabStyles : {}}
      >
        All
      </Text>
      <Text
        onClick={() => useFilterTerm("Vegetarian")}
        {...filterTabStyles}
        style={filterTerm === "Vegetarian" ? selectedTabStyles : {}}
      >
        Vegetarian
      </Text>
      <Text
        onClick={() => useFilterTerm("Vegan")}
        {...filterTabStyles}
        style={filterTerm === "Vegan" ? selectedTabStyles : {}}
      >
        Vegan
      </Text>
      <Text
        onClick={() => useFilterTerm("Favourites")}
        {...filterTabStyles}
        style={filterTerm === "Favourites" ? selectedTabStyles : {}}
      >
        Favourites
      </Text>
    </Flex>
  );
};
