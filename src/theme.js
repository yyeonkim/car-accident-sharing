import { extendTheme } from "@chakra-ui/react";

export const customeTheme = extendTheme({
  styles: {
    global: {
      html: {
        fontSize: "10px",
      },

      body: {
        backgroundColor: "white",
      },
    },
  },
});
