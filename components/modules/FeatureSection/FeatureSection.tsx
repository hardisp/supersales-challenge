import { SectionInView } from "@app/components/shared";
import { afterDelay } from "@app/components/shared/SectionInView/SectionInView";
import { Block } from "@app/components/svg";
import Client from "@app/components/svg/Client";
import Sales from "@app/components/svg/Sales";
import SalesManager from "@app/components/svg/SalesManager";
import { Image } from "@chakra-ui/next-js";
import { AspectRatio, Box, Container, Flex } from "@chakra-ui/react"; 

export interface FeatureSectionProps {
  featureImage?: string;
  featureImageAlt?: string;
}

export default function FeatureSection({
  featureImage,
  featureImageAlt,
}: FeatureSectionProps) {
  return (
    <Container
      display={"flex"}
      justifyContent={"center"}
      mb={{
        base: "100px",
      }}
    >
      <Box maxW={"970px"} flex="1 1 0%" height={"full"} pos={"relative"}>
        <AspectRatio ratio={970 / 707} zIndex={5}>
          <Image
            src={featureImage ?? ""}
            alt={featureImageAlt ?? "Preview Image"}
            width={970}
            height={707}
          />
        </AspectRatio>

        <Block
          pos={"absolute"}
          w={{ lg: "192px", base: "67px" }}
          h={{ lg: "178px", base: "62px" }}
          top={{ lg: "calc(75 / 707 * 100%)", base: "calc(26 / 247 * 100%)" }}
          left={{ lg: "-58px", base: "-20px" }}
          zIndex={1}
        />
        <Block
          pos={"absolute"}
          w={{ lg: "157px", base: "55px" }}
          h={{ lg: "145px", base: "51px" }}
          top={{ lg: "calc(395 / 707 * 100%)", base: "calc(139 / 247 * 100%)" }}
          left={{ lg: "-107px", base: "-37px" }}
          zIndex={1}
        />
        <Block
          pos={"absolute"}
          w={{ lg: "220px", base: "77px" }}
          h={{ lg: "220px", base: "77px" }}
          top={{
            lg: "calc(370 / 707 * 100%)",
            base: "calc(130 / 247 * 100%)",
          }}
          right={{ lg: "-78px", base: "-27px" }}
          zIndex={1}
        />

        <Flex
          justifyContent={"center"}
          align={"center"}
          flexDir={"column"}
          pos={"absolute"}
          top={{
            lg: "calc(342 / 707 * 100%)",
            base: "calc(130 / 247 * 100%)",
          }}
          left={{ lg: "-63px", base: "-27px" }}
          zIndex={10}
          display={{
            lg: "flex",
            base: "none",
          }}
        >
          <SectionInView>
            <Image
              src={"/images/avatar_1.png"}
              height={127}
              width={127}
              alt="avatar - sales"
              mx="auto"
            />
          </SectionInView>
          <SectionInView variants={afterDelay}>
            <Box
              p="14px 28px"
              borderRadius={"app"}
              bgColor={"state.info"}
              mt={"-23px"}
              pos={"relative"}
              zIndex={1}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Sales />
            </Box>
          </SectionInView>
        </Flex>
        <Flex
          justifyContent={"center"}
          flexDir={"column"}
          align={"center"}
          pos={"absolute"}
          zIndex={10}
          top={{
            lg: "calc(31 / 707 * 100%)",
            base: "calc(-25 / 247 * 100%)",
          }}
          right={{ lg: "-86px", base: "-7px" }}
        >
          <SectionInView>
            <Image
              src={"/images/avatar_2.png"}
              height={127}
              width={127}
              alt="avatar - client"
              mx={"auto"}
              sx={{
                w: {
                  lg: "127px",
                  base: "87px",
                },
                h: {
                  lg: "127px",
                  base: "87px",
                },
              }}
            />
          </SectionInView>
          <SectionInView variants={afterDelay}>
            <Box
              p={{ lg: "14px 28px", base: "6px 10px" }}
              borderRadius={"app"}
              bgColor={"state.success"}
              mt={{ lg: "-23px", base: "-15px" }}
              pos={"relative"}
              zIndex={1}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                svg: {
                  width: { lg: "61px", base: "24px" },
                  height: { lg: "18px", base: "7px" },
                },
              }}
            >
              <Client />
            </Box>
          </SectionInView>
        </Flex>
        <Flex
          justifyContent={"center"}
          flexDir={"column"}
          pos={"absolute"}
          align={"center"}
          zIndex={10}
          top={{
            lg: "calc(492 / 707 * 100%)",
            base: "calc(130 / 247 * 100%)",
          }}
          right={{ lg: "-57px", base: "-27px" }}
          display={{
            lg: "flex",
            base: "none",
          }}
        >
          <SectionInView>
            <Image
              src={"/images/avatar_3.png"}
              height={127}
              width={127}
              alt="avatar - client"
              mx="auto"
            />
          </SectionInView>
          <SectionInView variants={afterDelay}>
            <Box
              p="14px 28px"
              borderRadius={"app"}
              bgColor={"state.warning"}
              mt={"-23px"}
              pos={"relative"}
              zIndex={1}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <SalesManager />
            </Box>
          </SectionInView>
        </Flex>
      </Box>
    </Container>
  );
}
