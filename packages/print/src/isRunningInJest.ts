// Returns `true` if the code is running in Jest environment
export const isRunningInJest = () => typeof process !== 'undefined' && process.env.JEST_WORKER_ID !== undefined;
