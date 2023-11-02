import service from "../services/genre-service";
import useData from "../hooks/useData";
import { Genre } from "../entities/genre-entity";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
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
      <Heading fontSize="2xl" marginBottom="3">
        Genres
      </Heading>
      <List>
        {genres.map((g) => (
          <ListItem key={g.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                src={cropImage(g.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Button
                whiteSpace="normal"
                justifyContent="space-between"
                textAlign="left"
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
