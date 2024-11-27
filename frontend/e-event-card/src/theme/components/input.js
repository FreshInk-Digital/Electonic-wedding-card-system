import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ field: { cursor: "text" } });

const sizes = {
  lg: defineStyle({
    field: {
      fontSize: "20px",
      px: "12px",
      height: "76px",
    },
  }),
  xs: defineStyle({
    field: {
      px: "12px",
      height: "22px",
    },
  }),
  sm: defineStyle({
    field: {
      fontSize: "18px",
      px: "18px",
      height: "60px",
    },
  }),
  md: defineStyle({
    field: {
      fontSize: "20px",
      px: "12px",
      height: "68px",
    },
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      gray_50: {
        field: {
          bg: "gray.50",
          color: "black.900_7f",
        },
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["gray_50"]; 
  }),
};

const Input = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "md",
  },
});
export default Input;