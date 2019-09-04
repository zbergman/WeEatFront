export const dateFormatter = (value) => {
    const date = new Date(value);

    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};