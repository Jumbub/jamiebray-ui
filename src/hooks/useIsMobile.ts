import useWindowSize from "./useWindowSize";

const useIsMobile = () => {
  const [width] = useWindowSize()
  return width < 799
}

export default useIsMobile
