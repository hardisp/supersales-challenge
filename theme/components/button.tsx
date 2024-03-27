import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: "bold",
    textTransform: "none",
    fontSize: "1rem",
    lineHeight: "1.25em",
    minW: "unset",
    minH: "unset",
    height: "unset",
    width: "unset",
    _focusVisible: {
      boxShadow: 'none'
    }
  },

  // Two sizes: sm and md
  sizes: {
    lg: {
      px: "46px",
      py: "17px",
    },
    sm: {
      px: 4,
      py: 8,
    },
  },
  // Two variants: outline and solid
  variants: {
    transparent: {
      bg: "transparent",
      borderColor: "transparent",
      borderWidth: 0,
      color: "text.primary",
    },
    solid: {
      bgColor: "surface.brand",
      color: "text.primary",
      borderWidth: "1px 1px 2px",
      borderColor: "border.dark",
      borderRadius: "360px",
      transition: 'background 300ms',
      _hover: {
        bgColor: "surface.brand80",
        borderWidth: "1px 1px 1px",
        boxShadow: 'none',
        textDecor: 'none',
        mb: '1px'
      },
      
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "lg",
    variant: "solid",
  },
});

export default Button;
