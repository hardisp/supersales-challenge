import { ComponentStyleConfig } from "@chakra-ui/react";

const ContainerComponent: ComponentStyleConfig = {
  baseStyle: {
    px: {
      xl: "135px",
      md: "80px",
      base: "4",
    },
    maxW: "container.xl",
    mx: "auto",
  },
  variants: {
    hightlight: {
      maxW: {
        lg: "1440px",
        base: "780px",
      },
      px: {
        xl: "309px",
        lg: "200px",
        base: '4',
      },
      py: {
        base: "4rem",
      },
    },
  },
};

export default ContainerComponent;
