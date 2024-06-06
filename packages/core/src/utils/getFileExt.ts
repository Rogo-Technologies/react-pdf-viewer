export const getFileExt = (url: string): string => {
    const str = url.split(/\./).pop();
    return str ? str.toLowerCase() : '';
};
