if (import.meta.env.MODE === "production")
    console.log = function () {
        /**
         * We override the console.log function in production
         * so we dont have any accidental data written to the
         * console.
         */
    };
