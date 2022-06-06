import { generateClasses } from "@formkit/themes";
import { configTheme } from "./src/theme";

export default {
    config: {
        classes: generateClasses(configTheme),
    },
};
