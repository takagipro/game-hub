import { Badge } from "@chakra-ui/react";

const CriticStore = ({ score }: { score: number }) => {
  let color = score > 50 ? "green" : "yellow";

  return (
    <Badge
      fontSize="md"
      colorScheme={color}
      paddingX={2}
      paddingY={1}
      borderRadius="5px"
    >
      {score}
    </Badge>
  );
};

export default CriticStore;
