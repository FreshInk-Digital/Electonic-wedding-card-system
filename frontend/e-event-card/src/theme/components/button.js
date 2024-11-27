import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ borderRadius: "0px", outlineOffset: "0", cursor: "pointer", flexDirection: "row" });

const sizes = {
  md: defineStyle({
    h: "60px",
    fontSize: "20px",
    px: "34px",
  }),
  "2xl": defineStyle({
    h: "70px",
    fontSize: "24px",
    px: "34px",
  }),
  lg: defineStyle({
    h: "64px",
    fontSize: "20px",
    px: "34px",
  }),
  "3xl": defineStyle({
    h: "74px",
    px: "24px",
  }),
  xl: defineStyle({
    h: "70px",
    px: "14px",
  }),
  sm: defineStyle({
    h: "48px",
    fontSize: "18px",
    px: "34px",
  }),
  "4xl": defineStyle({
    h: "94px",
    fontSize: "40px",
    px: "34px",
  }),
  xs: defineStyle({
    h: "36px",
    px: "6px",
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      white_A700: {
        bg: "white.a700",
      },
      gray_500: {
        bg: "gray.500",
        color: "white.a700",
      },
      gray_50_7f: {
        bg: "gray.50_7f",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["gray_500"];
  }),
  outline: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      gray_500: {
        borderColor: "gray.500",
        borderWidth: "1px",
        borderStyle: "solid",
        color: "gray.500"
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["gray_500"];
  }),
};

const Button = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "xs",
  },
});
export default Button;