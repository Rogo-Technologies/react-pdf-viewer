export const getFileName = (url: string): string => {
    const str = url.split('/').pop();
    return str ? str.split('#')[0].split('?')[0] : url;
};
