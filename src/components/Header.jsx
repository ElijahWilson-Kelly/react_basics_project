import { Flex, Stack, Text, Heading } from "@chakra-ui/react";

import { SearchBar } from "./ui/SearchBar";

import "../stylesheets/Header.css";

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
    color: "lightblue",
  };
  // Styling that applys to all the text elements
  const filterTabStyles = {
    _hover: { transform: "scale(1.1)", cursor: "pointer", color: "lightblue" },
    textDecoration: "none",
    py: 3,
    color: "white",
    fontWeight: 900,
    fontSize: "1.2rem",
    textShadow: "0px 0px 2px black",
    display: "none",
  };

  return (
    <Stack
      color="black"
      w={"100%"}
      h="600px"
      justify={"center"}
      align={"center"}
      backgroundImage={
        'linear-gradient(#22000088, #0000FF44), url("/assets/recipe-images/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.avif")'
      }
      gap={"60px"}
      className="main_image"
    >
      <Flex align={"center"} justify={"center"} gap={"10%"}>
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
        <Flex align={"center"} gap={5}>
          <div className="stripe stripe_left"></div>
          <Heading
            color={"white"}
            fontSize={"6.6rem"}
            fontWeight={200}
            textShadow={"0px 0px 1px black"}
          >
            WINC MENU
          </Heading>
          <div className="stripe stripe_right"></div>
        </Flex>

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
