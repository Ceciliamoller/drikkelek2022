import { extendTheme } from "@chakra-ui/react";

const colors = {
  background: {
    500: "#134e6f",
  },
  red: {
    500: "#ff6150", 
  },
  blue: {
    500: "#5500ff",
  },
  lightGray: {
    500: "#dee0e6",
  },
};

const customTheme = extendTheme({ colors });

export default customTheme;
