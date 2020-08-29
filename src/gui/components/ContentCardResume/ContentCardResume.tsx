import React, { useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';
import { RESUME_PDF_DOWNLOAD, RESUME_PDF_IFRAME } from '../../constants/personal';
import { Card } from '../Card/Card';
import Content from '../Content/Content';
import { Head } from '../Head/Head';
import IconCard from '../IconCard/IconCard';
import styles from './ContentCardResume.module.scss';
import useFetch from 'use-http';
import styled from 'styled-components';

const ResumeStyle = styled.iframe`
  height: 1170px;
`;

const Resume = () => {
  const [request] = useFetch(RESUME_PDF_IFRAME);

  useEffect(() => {
    request.get();
  }, []);

  if (request.error) return null;

  return (
    <Card inverted>
      {request.loading && <ResumeStyle sandbox="" />}
      {!request.loading && <ResumeStyle srcDoc={`${request.data}`} sandbox="" />}
    </Card>
  );
};

export const ContentCardResume = () => (
  <>
    <Head title="Resume - Jamie Bray" />
    <Card>
      <Content title="Resume">
        <div className={styles.textAndAction}>
          <p>You can view my resume here, or download it!</p>
          <a href={RESUME_PDF_DOWNLOAD} title="Download Resume PDF">
            <IconCard render={className => <FaDownload className={className} />} />
          </a>
        </div>
        <Resume />
      </Content>
    </Card>
  </>
);
