import service from "../services/genre-service";
import useData from "../hooks/useData";
import { Genre } from "../entities/genre-entity";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import cropImage from "../services/image-url-service";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data: genres, error, isLoading } = useData<Genre>(service);

  return (
    <>
      {isLoading && <GenreListSkeleton />}
      {error && <Text color="red">{error}</Text>}
      <List>
        {genres.map((g) => (
          <ListItem key={g.id} paddingY="5px">
            <HStack>
              <Image
                src={cropImage(g.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Text fontSize="lg">{g.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
