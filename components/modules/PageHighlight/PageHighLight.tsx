import { PlayButtonIcon, StarIcon } from "@app/components/icons";
import { Link } from "@chakra-ui/next-js";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface PageHighLightProps {
  headline?: string;
  children?: ReactNode;
}

export default function PageHighLight({
  headline,
  children,
}: PageHighLightProps) {
  return (
    <Container variant={"hightlight"} textAlign={"center"}>
      <Box position={"relative"}>
        <Box as="h1" textStyle={"h1"} mb={6}>
          {headline}
        </Box>
        <Box as="p" mb={6}>
          {children}
        </Box>
        <Flex
          justify={"center"}
          columnGap={6}
          flexDir={{
            lg: "row",
            base: "column",
          }}
          alignItems={"center"}
          rowGap={8}
        >
          <Link
            variant="button"
            href="/demo"
            size="lg"
            w={{
              lg: "unset",
              base: "full",
            }}
          >
            Book a demo
          </Link>
          <Link
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            display={"flex"}
            alignItems={"center"}
            columnGap={1}
            color={"surface.dark"}
            fontSize={"1.25rem"}
          >
            <PlayButtonIcon />
            <Text
              textStyle={"buttonIcon"}
              as="span"
              display={"inline-block"}
              color={"text.primary"}
            >
              See how it works
            </Text>
          </Link>
        </Flex>

        {/* Motion Star */}
        <Box
          pos={"absolute"}
          fontSize={{ lg: "51px", base: "39px" }}
          top={{
            lg: "-30px",
            base: "-44px",
          }}
          left={{
            lg: "-25px",
            base: "7px",
          }}
        >
          {/* @ts-ignore no problem in operation, although type error appears. */}
          <StarIcon />
        </Box>
        <Box
          pos={"absolute"}
          fontSize={"34px"}
          bottom={{
            lg: "71px",
            base: 0,
          }}
          right={{
            lg: "-79px",
            base: 0,
          }}
          display={{
            lg: "block",
            base: "none",
          }}
        >
          {/* @ts-ignore no problem in operation, although type error appears. */}
          <StarIcon />
        </Box>
        <Box
          pos={"absolute"}
          fontSize={{ lg: "48px", base: "31px" }}
          bottom={{
            lg: "0",
            base: "103px",
          }}
          right={{
            lg: "-24px",
            base: "-23px",
          }}
        >
          {/* @ts-ignore no problem in operation, although type error appears. */}
          <StarIcon />
        </Box>
      </Box>
      {/* End of Motion Star */}
    </Container>
  );
}
