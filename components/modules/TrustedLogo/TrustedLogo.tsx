import { Image } from "@chakra-ui/next-js";
import { Box, Container, Flex, useMediaQuery } from "@chakra-ui/react";

import { motion } from "framer-motion";

export const marqueeVariants = {
  animate: {
    x: [1105, -1105],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};


export interface TrustedLogoProps {
  title?: string;
  items?: Array<{
    imageUrl?: string;
    imageAlt?: string;
  }>;
}

export default function TrustedLogo({ title, items }: TrustedLogoProps) {
  const [isLG] = useMediaQuery("(min-width: 1440px)");
  return (
    <Container overflow={"hidden"} px={0}>
      <Box as="h6" mb={6} textAlign={"center"}>
        {title}
      </Box>
      <Box overflow={"hidden"} width={'100%'}>
        <motion.div
          className="track"
          variants={isLG ? undefined : marqueeVariants}
          animate="animate"
        >
          <Flex
            columnGap={{ xl: "8", base: "4" }}
            justifyContent={{ xl: "center", base: "flex-start" }}
            mx={"auto"}
            sx={{
              "& > img": {
                width: "208px",
                objectFit: "cover",
                height: "68px",
              },
            }}
            alignItems={"center"}
          >
            {items?.map((item, i) => {
              return (
                <Image
                  key={i}
                  src={item.imageUrl ?? ""}
                  alt={item.imageAlt ?? ""}
                  width={208}
                  height={65}
                />
              );
            })}
          </Flex>
        </motion.div>
      </Box>
    </Container>
  );
}
