import service from "../services/genre-service";
import useData from "../hooks/useData";
import { Genre } from "../entities/genre-entity";
import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import cropImage from "../services/image-url-service";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
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
              <Button
                justifyContent="flex-start"
                fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
                textDecoration={
                  g.id === selectedGenre?.id ? "underline" : "none"
                }
                variant="link"
                onClick={() => onSelectGenre(g)}
                fontSize="md"
              >
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
