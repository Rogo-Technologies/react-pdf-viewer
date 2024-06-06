export const maxByKey = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): T =>
    arr.reduce((a, b) => (a[key] >= b[key] ? a : b), {} as T);
