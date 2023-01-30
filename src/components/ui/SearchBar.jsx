import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export const SearchBar = ({ searchTerm, useSearchTerm, ...props }) => {
  const handleChange = (e) => {
    useSearchTerm(e.target.value);
  };

  return (
    <InputGroup {...props}>
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
