import React, { useEffect, useContext, memo } from 'react';
import { FaDownload } from 'react-icons/fa';
import styled from 'styled-components';
import { RESUME_PDF_DOWNLOAD, RESUME_PDF_IFRAME } from '../../constants/personal';
import { Card } from '../Card/Card';
import Content from '../Content/Content';
import { Head } from '../Head/Head';
import IconCard from '../IconCard/IconCard';
import styles from './ContentCardResume.module.scss';
import { ResumeContext } from './ResumeContext';

const NoOverflow = styled.div`
  overflow: hidden;
  display: inline-block;
  width: 50%;
`;

const ResumeStyle = styled.iframe`
  border: none;
  height: 1170px;
  margin: 10px;
  max-width: 900px;
  overflow: hidden;
  width: 100%;
`;

export const Resume = memo(() => {
  const html = useContext(ResumeContext);

  return (
    <Card>
      <NoOverflow>
        PRELOADED
        <ResumeStyle key="PRELOADED" srcDoc={`${html || ''}`} sandbox="" />
      </NoOverflow>
      <NoOverflow>
        SOURCED
        <ResumeStyle
          key="SOURCED"
          src={
            'https://docs.google.com/document/d/e/2PACX-1vTiu0_Xy7H6CtthFAXeyHfwV7qxtHaJXS3a7IFzIoUb9dlE24Q8Xs0aLFyJe57Y-rcXsSY7xrtRTjt_/pub?embedded=true'
          }
          sandbox=""
        />
      </NoOverflow>
    </Card>
  );
});
