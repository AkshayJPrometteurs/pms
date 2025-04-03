
export const formatOnlyNumber = (value) => {
    return value.replace(/\D/g, "");
};

export const formatOnlyAlphabetsAndSpace = (value) => {
    return value.replace(/[^a-zA-Z\s]/g, "");
};

export const formatOnlyAllowedChars = (value) => {
    return value.replace(/[^a-zA-Z0-9\s\-_]/g, "");
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { formatOnlyNumber, formatOnlyAlphabetsAndSpace, formatOnlyAllowedChars };