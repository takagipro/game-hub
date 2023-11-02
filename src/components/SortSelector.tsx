import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedSort: string;
  onSelectSort: (sortBy: string) => void;
}

const SortSelector = ({ selectedSort, onSelectSort }: Props) => {
  const sorts = [
    { id: "", name: "Default" },
    { id: "name", name: "Name" },
    { id: "-released", name: "Released Date" },
    { id: "-rating", name: "Rating" },
  ];

  const currentSort = sorts.find((s) => s.id === selectedSort);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSort ? currentSort.name : "Default"}
      </MenuButton>
      <MenuList>
        {sorts.map((s) => (
          <MenuItem onClick={() => onSelectSort(s.id)} key={s.id}>
            {s.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
