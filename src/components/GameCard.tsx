import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../entities/game-entity";
import cropImage from "../services/image-url-service";
import CriticStore from "./CriticStore";
import PlatformIconList from "./PlatformIconList";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Card>
      <Image src={cropImage(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticStore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
