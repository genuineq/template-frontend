module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./src/theme.ts",
        "./formkit.config.ts",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/forms")({
            strategy: "class",
        }),
        require("@formkit/themes/tailwindcss"),
    ],
};
