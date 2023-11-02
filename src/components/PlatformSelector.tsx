import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import service from "../services/platform-service";
import { BsChevronDown } from "react-icons/bs";
import useData from "../hooks/useData";
import { Platform } from "../entities/platform-entity";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { data: platforms, error } = useData<Platform>(service);

  if (error) return;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms.map((p) => (
          <MenuItem onClick={() => onSelectPlatform(p)} key={p.id}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
