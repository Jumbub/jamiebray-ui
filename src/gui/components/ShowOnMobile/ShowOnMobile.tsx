import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useIsMobile, { MOBILE_WIDTH } from '../../hooks/useIsMobile';

export const ShowOnMobileServer = styled.div`
  @media only screen and (min-width: ${MOBILE_WIDTH}px) {
    display: none;
  }
`;

export const UNKNOWN = 'unknown';

export const MOBILE = 'mobile';

export const DESKTOP = 'desktop';

export const useRenderMode = () => {
  const [mode, setMode] = useState(UNKNOWN);
  const isMobile = useIsMobile();

  // Wait for first render
  useEffect(() => {
    setMode(isMobile ? MOBILE : DESKTOP);
  }, [setMode, isMobile]);

  return mode;
};

export const ShowOnMobile = ({ children }) => {
  if (useRenderMode() === DESKTOP) return null;

  return <ShowOnMobileServer>{children}</ShowOnMobileServer>;
};
