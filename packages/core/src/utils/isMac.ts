export const isMac = () => (typeof window !== 'undefined' ? /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) : false);
