// Create some re-useable definitions because
// many input types are identical in how
// we want to style them.
const textClassification = {
    label: /*tw*/ "block mb-1 font-bold text-sm formkit-invalid:text-red-500",
    inner: /*tw*/ "max-w-md border border-gray-400 formkit-invalid:border-red-500 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500",
    input: /*tw*/ "w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400",
};
const boxClassification = {
    fieldset: /*tw*/ "max-w-md border border-gray-400 rounded-md px-2 pb-1",
    legend: /*tw*/ "font-bold text-sm",
    wrapper: /*tw*/ "flex items-center mb-1 cursor-pointer",
    help: /*tw*/ "mb-2",
    input: /*tw*/ "form-check-input appearance-none h-5 w-5 mr-2 border border-gray-500 rounded-sm bg-white checked:bg-blue-500 focus:outline-none focus:ring-0 transition duration-200",
    label: /*tw*/ "text-sm text-gray-700 mt-1",
};
const buttonClassification = {
    wrapper: /*tw*/ "mb-1",
    input: /*tw*/ "bg-blue-500 hover:bg-blue-700 text-white text-sm font-normal py-3 px-5 rounded flex items-center gap-x-2",
};

// export our definitions using our above
// templates and declare one-offs and
// overrides as needed.
export const configTheme = {
    // the global key will apply to all inputs
    global: {
        input: /*tw*/ /*tw*/ "outline-none",
        outer: /*tw*/ /*tw*/ "mb-5 formkit-disabled:opacity-50",
        help: /*tw*/ "text-xs text-gray-500",
        messages: /*tw*/ "list-none p-0 mt-1 mb-0",
        message: /*tw*/ "text-red-500 mb-1 text-xs",
    },
    button: buttonClassification,
    color: {
        label: /*tw*/ "block mb-1 font-bold text-sm",
        input: /*tw*/ "w-16 h-8 appearance-none cursor-pointer border border-gray-300 rounded-md mb-2 p-1",
    },
    date: textClassification,
    "datetime-local": textClassification,
    checkbox: boxClassification,
    email: textClassification,
    file: {
        label: /*tw*/ "block mb-1 font-bold text-sm",
        inner: /*tw*/ "max-w-md cursor-pointer",
        input: /*tw*/ "text-gray-600 text-sm mb-1 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-600",
        noFiles: /*tw*/ "block text-gray-800 text-sm mb-1",
        fileItem: /*tw*/ "block text-gray-800 text-sm mb-1",
        removeFiles: /*tw*/ "ml-auto text-blue-500 text-sm",
    },
    month: textClassification,
    number: textClassification,
    password: textClassification,
    radio: {
        ...boxClassification,
        input: boxClassification.input.replace("rounded-sm", "rounded-full"),
    },
    range: {
        inner: /*tw*/ "max-w-md",
        input: /*tw*/ "form-range appearance-none w-full h-2 p-0 bg-gray-200 rounded-full focus:outline-none focus:ring-0 focus:shadow-none",
    },
    search: textClassification,
    select: textClassification,
    submit: buttonClassification,
    tel: textClassification,
    text: textClassification,
    textarea: {
        ...textClassification,
        input: /*tw*/ "block w-full h-32 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:shadow-outline",
    },
    time: textClassification,
    url: textClassification,
    week: textClassification,
};
