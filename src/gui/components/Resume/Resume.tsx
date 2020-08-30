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

  const stillPreloading = html === null;
  const notPreloading = html === 'notLoading';
  const preloaded = !stillPreloading && !notPreloading;

  return (
    <Card>
      <NoOverflow>
        {notPreloading && <ResumeStyle key="RESUME" src={RESUME_PDF_IFRAME} sandbox="" />}
        {stillPreloading && <ResumeStyle sandbox="" />}
        {preloaded && <ResumeStyle key="RESUME" srcDoc={`${html}`} sandbox="" />}
      </NoOverflow>
    </Card>
  );
});
