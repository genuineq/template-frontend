import { generateClasses } from "@formkit/themes";
import { configTheme } from "./src/theme";

const addPrefixToSubmitButtons = (inputNode) => {
    inputNode.on("created", ({ payload: node }) => {
        if (node.props.type === "submit") {
            // Let's retain our own copy of this definition to prevent deep object referencing
            const definition = { ...node.props.definition };
            const schema = definition.schema;

            // We replace the schema function with our own higher-order-function
            definition.schema = function (extensions = {}) {
                const ext = {
                    ...extensions,
                    ...{
                        prefix: {
                            children: [
                                {
                                    $el: "img",
                                    attrs: {
                                        class: "hidden formkit-loading:block",
                                        src: "/src/assets/spinner.gif",
                                        width: 15,
                                        height: 15,
                                    },
                                },
                            ],
                        },
                    },
                };
                // Finally we call the original schema, with our extensions applied
                return schema(ext);
            };

            // Now we replace the input definition
            node.props.definition = definition;
        }
        return;
    });
};

export default {
    config: {
        classes: generateClasses(configTheme),
    },
    plugins: [addPrefixToSubmitButtons],
};
