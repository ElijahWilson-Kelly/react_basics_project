import { Flex, Stack, Text, Heading } from "@chakra-ui/react";

import { SearchBar } from "./ui/SearchBar";

/*
  Header componenet for filter options
    Props - 
      filterTerm - {string}
      useFilter - {function}
    
*/

export const Header = ({
  searchTerm,
  setSearchTerm,
  filterTerm,
  setFilterTerm,
}) => {
  // Styling for the selected filter element
  const selectedTabStyles = {
    color: "red",
  };
  // Styling that applys to all the text elements
  const filterTabStyles = {
    _hover: { transform: "scale(1.1)", cursor: "pointer", color: "red" },
    borderBottom: ["2px solid #FFFFFF88", null, "none"],
    textDecoration: "none",
    py: 3,
    display: ["none", null, null, "block"],
  };

  return (
    <Stack
      color="black"
      w={"100%"}
      bg={"#f8f5f0"}
      h="320px"
      justify={"center"}
      align={"center"}
      gap={10}
    >
      <Flex align={"center"} justify={"center"} gap={"80px"}>
        <Text
          onClick={() => setFilterTerm("All")}
          {...filterTabStyles}
          style={filterTerm === "All" ? selectedTabStyles : {}}
        >
          All
        </Text>
        <Text
          onClick={() => setFilterTerm("Vegetarian")}
          {...filterTabStyles}
          style={filterTerm === "Vegetarian" ? selectedTabStyles : {}}
        >
          Vegetarian
        </Text>
        <Heading
          fontSize={"4rem"}
          fontWeight={900}
          color={"white"}
          textShadow={"0px 0px 2px black"}
        >
          WincKitchen
        </Heading>
        <Text
          onClick={() => setFilterTerm("Vegan")}
          {...filterTabStyles}
          style={filterTerm === "Vegan" ? selectedTabStyles : {}}
        >
          Vegan
        </Text>
        <Text
          onClick={() => setFilterTerm("Favourites")}
          {...filterTabStyles}
          style={filterTerm === "Favourites" ? selectedTabStyles : {}}
        >
          Favourites
        </Text>
      </Flex>
      <SearchBar
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        mt={10}
        w={["90%", "80%", "60%"]}
        fontWeight={"bold"}
        color={"gray.200"}
      />
    </Stack>
  );
};
