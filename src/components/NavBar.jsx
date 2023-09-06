import "../stylesheets/NavBar.css";
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { FiltersModal } from "./FiltersModal";

import { CiMenuBurger, CiHeart, CiSearch } from "react-icons/ci";

export const NavBar = ({ setFilterTerm, openSearchModal }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <FiltersModal
        isOpen={isOpen}
        onClose={onClose}
        setFilterTerm={setFilterTerm}
      />
      <Grid
        p={5}
        borderBottom={"2px solid #ffd977"}
        bg={"white"}
        gridTemplateColumns={"auto 1fr auto"}
        templateAreas={`"left middle right"`}
        w={"100%"}
        alignItems={"center"}
      >
        <GridItem
          area="left"
          display={["block", null, null, "none"]}
          w={"100px"}
        >
          <CiMenuBurger className="icon hover-grey" onClick={() => onOpen()} />
        </GridItem>

        <GridItem
          area={["middle", null, null, "left"]}
          justifySelf={["center", null, null, "start"]}
        >
          <Heading
            fontSize={["2rem", "3rem", "4rem"]}
            fontWeight={800}
            color={"white"}
            textShadow={
              "0px 0px 1px black, 0px 0px 1px black, 0px 0px 1px black"
            }
            lineHeight={"70%"}
            onClick={() => setFilterTerm("")}
            className="hover_cursor"
          >
            W
            <span
              style={{
                fontSize: "0.4em",
                float: "right",
                lineHeight: "80%",
              }}
            >
              inc
              <br />
              Menu
            </span>
          </Heading>
        </GridItem>

        <GridItem area={"middle"} display={["none", null, null, "block"]}>
          <Flex align={"center"} gap={10} px={10} flex={"1 1 auto"}>
            <Text
              className="recipe_filter hover_cursor"
              onClick={() => setFilterTerm("All")}
            >
              All RECIPES
            </Text>
            <Text
              className="recipe_filter hover_cursor"
              onClick={() => setFilterTerm("Vegetarian")}
            >
              VEGETARIAN RECIPES
            </Text>
            <Text
              className="recipe_filter hover_cursor"
              onClick={() => setFilterTerm("Vegan")}
            >
              VEGAN RECIPES
            </Text>
          </Flex>
        </GridItem>

        <GridItem area="right" w={"100px"}>
          <Flex align={"center"} justify={"end"} gap={4} fontSize={"1.5rem"}>
            <CiHeart
              className="icon hover-red"
              onClick={() => setFilterTerm("Favourite")}
            />
            <CiSearch className="icon hover-blue" onClick={openSearchModal} />
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
};
