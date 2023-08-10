import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

/*
  Search Bar Element
  Props - 
    searchTerm - {string}
    useSearchTerm - {function}
    ...styling - {object} ~ styles to be applied to the search bar
*/

export const SearchBar = ({ searchTerm, setSearchTerm, ...styling }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <InputGroup {...styling}>
      <Input
        placeholder="Search:"
        color={"black"}
        onChange={handleChange}
        value={searchTerm}
        fontWeight={200}
        bg={"white"}
        variant="unstyled"
        p={3}
      ></Input>
    </InputGroup>
  );
};
