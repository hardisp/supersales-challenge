"use client";
import { MenuIcon } from "@app/components/icons";
import { getMenu } from "@app/services";
import { Image, Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Collapse,
  Container,
  Flex,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function NavigationSlot() {
  const pathname = usePathname();
  const { isOpen, onToggle } = useDisclosure();
  const [isLG] = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    onToggle();
  }, [pathname]);

  return (
    <>
      <Container
        display={"flex"}
        justifyContent={{ base: "space-between" }}
        alignItems={"center"}
        py={{
          lg: "17px",
          base: "15px",
        }}
        flexWrap={"wrap"}
        sx={{
          ".chakra-collapse": {
            flex: { lg: "1 1 0" },
            w: { lg: "auto", base: "full" },
          },
        }}
      >
        <Link href={"/"}>
          <Image
            width={"144"}
            height="22"
            alt="Super sales - app logo"
            src={"/icons/logo.svg"}
          />
        </Link>
        <Button
          display={{
            lg: "none",
            base: "block",
          }}
          bgColor={"transparent"}
          borderColor={"transparent"}
          variant={"transparent"}
          onClick={onToggle}
          p={0}
        >
          <MenuIcon />
        </Button>
        <Box
          width={"100%"}
          display={{
            lg: "none",
            base: "block",
          }}
        ></Box>
        <Collapse in={isLG ? true : isOpen} animateOpacity>
          <Box
            display={{
              lg: "block",
              base: "none",
            }}
          ></Box>
          <Flex
            justifyContent={{ lg: "space-between", base: "center" }}
            flex="1 1 0"
            flexDir={{
              lg: "row",
              base: "column",
            }}
            alignItems={"center"}
          >
            <Box></Box>
            <Flex
              sx={{
                "& > a": {
                  display: "block",
                },
              }}
              flexDir={{
                lg: "row",
                base: "column",
              }}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {getMenu(["somedata"])?.map((menu, i) => {
                return (
                  <Link
                    variant={"menu"}
                    sx={{ "&.active": { borderColor: "border.dark" } }}
                    className={`${pathname === menu.link ? "active" : ""}`}
                    href={menu.link ?? "#"}
                    key={menu.label + "_" + i}
                  >
                    {menu.label}
                  </Link>
                );
              })}
            </Flex>
            <Link variant={"buttonSM"} size={"sm"} href={"/download"}>
              Try for free
            </Link>
          </Flex>
        </Collapse>
      </Container>
    </>
  );
}
