import styled from "styled-components";
import { MOBILE_WIDTH } from "../../hooks/useIsMobile";

export const ShowOnDesktop = styled.div`
  @media only screen and (max-width: ${MOBILE_WIDTH - 1}px) {
    display: none;
  }
`;
