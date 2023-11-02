import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../entities/platform-entity";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };

  return (
    <>
      <HStack marginY={2}>
        {platforms.map((p) => (
          <Icon
            key={p.id}
            as={iconMap[p.slug]}
            color="gray.500"
            title={p.name}
          />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
