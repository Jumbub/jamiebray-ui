import React, { memo } from 'react';
import styled from 'styled-components';
import { RESUME_PDF_IFRAME } from '../../constants/personal';
import { Card } from '../Card/Card';

const NoOverflow = styled.div`
  overflow: hidden;
`;

const ResumeStyle = styled.iframe`
  border: none;
  height: 1170px;
  margin: 10px;
  max-width: 900px;
  overflow: hidden;
  width: 100%;
`;

export const Resume = memo(() => (
  <Card>
    <NoOverflow>
      <ResumeStyle src={RESUME_PDF_IFRAME} sandbox="" />
    </NoOverflow>
  </Card>
));
