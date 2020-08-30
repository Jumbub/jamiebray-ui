import { useState, useEffect } from 'react';
import styled from 'styled-components';
import useIsMobile, { MOBILE_WIDTH } from '../../hooks/useIsMobile';
import { MOBILE, useRenderMode } from '../ShowOnMobile/ShowOnMobile';

const ShowOnDesktopServer = styled.div`
  @media only screen and (max-width: ${MOBILE_WIDTH - 1}px) {
    display: none;
  }
`;

export const ShowOnDesktop = ({ children }) => {
  if (useRenderMode() === MOBILE) return null;

  return <ShowOnDesktopServer>{children}</ShowOnDesktopServer>;
};
