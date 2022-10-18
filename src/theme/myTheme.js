import { extendTheme } from "@chakra-ui/react";
import CardStyle from "../customComponent/Card/CardStyle";

const myTheme = extendTheme({
  components: {
    CardStyle,
  },
})

export default myTheme;
