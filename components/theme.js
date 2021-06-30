import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "white",
        // color: "white",
      },
    },
  },
  fonts: {
    heading: "Montserrat",
    body: "Lato",
  },
});
export default theme;
