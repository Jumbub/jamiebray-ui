import useWindowSize from "./useWindowSize";

const useIsMobile = () => {
  const [width] = useWindowSize()
  return width < 768
}

export default useIsMobile
