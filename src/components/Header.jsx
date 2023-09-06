import { Flex, Stack, Heading } from "@chakra-ui/react";

import "../stylesheets/Header.css";

export const Header = () => {
  return (
    <Stack
      color="black"
      w={"100%"}
      h={["300px", "600px"]}
      justify={"center"}
      align={"center"}
      backgroundImage={
        'linear-gradient(#00000099, #00000099), linear-gradient(#22000088, #0000FF44), url("/assets/recipe-images/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.avif")'
      }
      gap={"60px"}
      className="main_image"
      borderBottom={"3px solid #000050"}
    >
      <Flex align={"center"} gap={5}>
        <div className="stripe stripe_left"></div>
        <Heading
          color={"white"}
          fontSize={["1.5rem", "3rem", "5.8rem", "6.6rem"]}
          fontWeight={200}
          textShadow={"0px 0px 1px black"}
        >
          WINC MENU
        </Heading>
        <div className="stripe stripe_right"></div>
      </Flex>
    </Stack>
  );
};
