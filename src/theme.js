import { extendTheme } from "@chakra-ui/react";

export const customeTheme = extendTheme({
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },

  styles: {
    global: {
      html: {
        fontFamily: "Roboto",
      },
      body: {
        backgroundColor: "white",
        color: "black",
      },
    },
  },
});
