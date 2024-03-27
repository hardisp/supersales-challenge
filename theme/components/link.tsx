import { defineStyleConfig } from "@chakra-ui/react";
import Button from "./button";

const Link = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontSize: "inherit",
  },
  sizes: {
    sm: {
      px: 8,
      py: 2,
    },
  },
  // Two variants: outline and solid
  variants: {
    button: {
      ...(Button.baseStyle ?? {}),
      ...(Button.variants?.solid ?? {}),
      px: "46px",
      py: "17px",
    },
    buttonSM: {
      ...(Button.baseStyle ?? {}),
      ...(Button.variants?.solid ?? {}),
      px: 8,
      py: 2,
      // _hover: { textDecor: "none" },
    },
    menu: {
      bgColor: "white",
      color: "text.primary",
      borderWidth: "1px 1px 2px",
      borderColor: "transparent",
      borderRadius: "app",
      fontSize: "1rem",
      height: "auto",
      minH: "unset",
      lineHeight: "1.25em",
      fontWeight: "bold",
      _hover: {
        textDecor: "none",
        borderColor: "border.dark",
      },
      sx: {
        "&.active": {
          borderColor: "border.dark",
        },
      },
      _focusVisible: {
        opacity: 0.8,
        borderBottomWidth: '4px',
        boxShadow: 'none'
      },
      px: 6,
      py: 2,
    },
  },
});

export default Link;
