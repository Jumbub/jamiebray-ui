import React from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';
import styled from 'styled-components';
import { RESUME_PDF_DOWNLOAD, RESUME_PDF_LINK, RESUME_PDF_IFRAME } from '../../constants/personal';
import { Card } from '../Card/Card';
import Content from '../Content/Content';
import { Head } from '../Head/Head';
import IconCard from '../IconCard/IconCard';
import { ShowOnDesktop } from '../ShowOnDesktop/ShowOnDesktop';
import { ShowOnMobile } from '../ShowOnMobile/ShowOnMobile';

const IconContainer = styled.a`
  display: flex;
  flex-direction: row-reverse;
  height: 0;
  position: relative;
  right: -8px;
  top: 16px;
  width: 100%;
`;

const NoOverflow = styled.div`
  overflow: hidden;
`;

export const DesktopResumeStyle = styled.iframe`
  border: none;
  height: 1170px;
  margin: 10px;
  max-width: 900px;
  width: 100%;
`;

export const MobileResumeStyle = styled.iframe`
  border: none;
  height: calc(100vh - 12vh);
  margin: 0 -24px;
  width: calc(100% + 48px);
`;

export const ContentCardResume = () => (
  <>
    <Head title="Resume - Jamie Bray" />
    <Card>
      <ShowOnDesktop>
        <Content title="Resume">
          <ShowOnDesktop>
            <DownloadResume />
            <NoOverflow>
              <DesktopResumeStyle src={RESUME_PDF_IFRAME} sandbox="" />
            </NoOverflow>
          </ShowOnDesktop>
        </Content>
      </ShowOnDesktop>

      <ShowOnMobile>
        <DownloadResume />
        <NoOverflow>
          <MobileResumeStyle src={RESUME_PDF_IFRAME} sandbox="" />
        </NoOverflow>
      </ShowOnMobile>
    </Card>
  </>
);

const DownloadResume = () => (
  <IconContainer href={RESUME_PDF_DOWNLOAD} title="Download Resume PDF">
    <IconCard render={className => <FaDownload className={className} />} />
  </IconContainer>
);
