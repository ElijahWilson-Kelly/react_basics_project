import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

/*
  Search Bar Element
  Props - 
    searchTerm - {string}
    useSearchTerm - {function}
    ...styling - {object} ~ styles to be applied to the search bar
*/

export const SearchBar = ({ searchTerm, useSearchTerm, ...styling }) => {
  const handleChange = (e) => {
    useSearchTerm(e.target.value);
  };

  return (
    <InputGroup {...styling}>
      <InputLeftAddon bg={"white"}>
        <Search2Icon color={"blue.600"} />
      </InputLeftAddon>
      <Input
        placeholder="Search:"
        color={"white"}
        onChange={handleChange}
        value={searchTerm}
        fontWeight={"inherit"}
        bg={"#00000099"}
      ></Input>
    </InputGroup>
  );
};
