import {
  Box,
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <List>
        {skeletons.map((s) => (
          <ListItem key={s} paddingY="5px">
            <HStack>
              <Skeleton boxSize="32px" borderRadius={8} />
              <Box width="110px">
                <SkeletonText noOfLines={1} />
              </Box>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreListSkeleton;
