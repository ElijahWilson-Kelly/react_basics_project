import { Input } from "@chakra-ui/react";

export const SearchBar = ({ searchTerm, useSearchTerm, ...props }) => {
  const handleChange = (e) => {
    useSearchTerm(e.target.value);
  };

  return (
    <Input
      placeholder="Search:"
      color={"white"}
      onChange={handleChange}
      value={searchTerm}
      {...props}
    ></Input>
  );
};
