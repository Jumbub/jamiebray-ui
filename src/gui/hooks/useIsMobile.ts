import { useWindowSize } from './useWindowSize';

export const MOBILE_WIDTH = 799;

const useIsMobile = () => {
  const [width] = useWindowSize();
  return width < MOBILE_WIDTH;
};

// eslint-disable-next-line import/no-default-export
export default useIsMobile;
