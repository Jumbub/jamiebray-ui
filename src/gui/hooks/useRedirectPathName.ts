import { usePathName } from './usePathName';

export const useRedirectedPathName = () => usePathName().replace(/^\/$/, '/about');
