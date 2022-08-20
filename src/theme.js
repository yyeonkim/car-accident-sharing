import { extendTheme } from "@chakra-ui/react";

export const customeTheme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "white",
        color: "black",
      },
    },
  },

  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
});
