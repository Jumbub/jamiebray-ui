import styled from 'styled-components';
import { MOBILE_WIDTH } from '../../hooks/useIsMobile';

export const ShowOnMobile = styled.div`
  @media only screen and (min-width: ${MOBILE_WIDTH}px) {
    display: none;
  }
`;
