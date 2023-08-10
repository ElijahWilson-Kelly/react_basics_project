import { Flex, Heading, Text } from "@chakra-ui/react";

import "../stylesheets/NavBar.css";

export const NavBar = () => {
  return (
    <Flex
      p={5}
      borderBottom={"2px solid #ffd977;"}
      align={"center"}
      justify={["center", null, null, "start"]}
    >
      <Heading
        fontSize={"4rem"}
        fontWeight={300}
        color={"white"}
        textShadow={"0px 0px 1px black, 0px 0px 1px black, 0px 0px 1px black"}
        lineHeight={"70%"}
      >
        W
        <span
          style={{
            fontSize: "1.7rem",
            float: "right",
            lineHeight: "80%",
          }}
        >
          inc
          <br />
          Menu
        </span>
      </Heading>
      <Flex
        align={"center"}
        gap={10}
        px={10}
        display={["none", null, null, "flex"]}
      >
        <Text className="recipe_filter">All RECIPES</Text>
        <Text className="recipe_filter">VEGETARIAN RECIPES</Text>
        <Text className="recipe_filter">VEGAN RECIPES</Text>
        <Text className="recipe_filter">FAVOURITE RECIPES</Text>
      </Flex>
    </Flex>
  );
};
