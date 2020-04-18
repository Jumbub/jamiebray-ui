import { useWindowSize } from './useWindowSize';

const useIsMobile = () => {
  const [width] = useWindowSize();
  return width < 799;
};

// eslint-disable-next-line import/no-default-export
export default useIsMobile;
