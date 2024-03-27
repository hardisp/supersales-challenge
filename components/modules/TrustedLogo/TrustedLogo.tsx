import { Box, Container } from "@chakra-ui/react";

export interface TrustedLogoProps {
  title?: string;
}

export default function TrustedLogo({title}: TrustedLogoProps) {
  return (
    <Container>
      <Box as="h6" mb={6} textAlign={"center"}>
        {title}
      </Box>
      <Box></Box>
    </Container>
  );
}
