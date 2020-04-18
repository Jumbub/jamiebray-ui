import { useRouter } from 'next/router';

export const usePathName = () => useRouter().pathname;
