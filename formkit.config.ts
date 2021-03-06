import { generateClasses } from "@formkit/themes";
import { configTheme } from "./src/theme";
import { ro, en } from "@formkit/i18n";
import spinner from "@/assets/images/spinner.gif";

const addPrefixToSubmitButtons = (node: any) => {
    if (node.props.type === "submit") {
        /**
         * Let's retain our own copy of this definition to prevent deep object referencing
         */
        const definition = { ...node.props.definition };
        const schema = definition.schema;

        /**
         * We replace the schema function with our own higher-order-function
         */
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
                                    src: spinner,
                                    width: 15,
                                    height: 15,
                                },
                            },
                        ],
                    },
                },
            };
            /**
             * Finally we call the original schema, with our extensions applied
             */
            return schema(ext);
        };

        /**
         * Now we replace the input definition
         */
        node.props.definition = definition;
    }
};

const plugin = (node: any) => {
    node.addProps(["variant"]);

    if (node.props.variant === "error") {
        node.props.inputClass = "bg-red-500";
    }

    if (node.props.variant === "success") {
        node.props.inputClass = "bg-green-500 text-2xl";
    }
};

export default {
    config: {
        classes: generateClasses(configTheme),
    },
    plugins: [addPrefixToSubmitButtons, plugin],
    locale: "ro",
    locales: { ro, en },
};
