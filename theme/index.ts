import { extendTheme, type ThemeConfig } from "@chakra-ui/react"; 

import Button from "./components/button";
import Container from "./components/container";
import Link from "./components/link";
import textStyles from "./foudnations/textStyles";

import { PT_Sans, PT_Serif } from "next/font/google";

const body = PT_Sans({ weight: ["400", "700"], subsets: ["latin"] });
const heading = PT_Serif({ weight: ["400", "700"], subsets: ["latin"] });

// These are the default breakpoints
const breakpoints = {
  base: "0em", // 0px
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font-size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
};

// 3. Extend the sizing
const sizes = {
  container: {
    xs: "375px",
    md: "1024px",
    xl: "1440px",
  },
};

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgColor: "text.white",
        ...textStyles.copy,
      },
    },
  },
  config: {
    cssVarPrefix: "cs",
    initialColorMode: "light",
    useSystemColorMode: false,
  } as ThemeConfig,
  sizes,
  colors: {
    text: {
      primary: "#414141",
      secondary: "#5A5A5A",
      white: "#FFFFFF",
    },
    surface: {
      brand: "#FFDD2D",
      brand80: 'rgba(255, 221, 45, 0.8)',
      dark: "#414141",
    },
    border: {
      dark: "#414141",
    },
    state: {
      success: '#5DC021',
      warning: '#EE8B16',
      info: '#0084BD',
    }
  },
  breakpoints,
  radii: {
    app: '360px',
  },
  fonts: {
    heading: heading.style.fontFamily,
    body: body.style.fontFamily,
  },
  textStyles,
  components: {
    Button,
    Container,
    Link
  },
});

export default theme;
