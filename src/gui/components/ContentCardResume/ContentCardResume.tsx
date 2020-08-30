import React from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';
import { RESUME_PDF_DOWNLOAD, RESUME_PDF_LINK, RESUME_PDF_IFRAME } from '../../constants/personal';
import { Card } from '../Card/Card';
import Content from '../Content/Content';
import { Head } from '../Head/Head';
import IconCard from '../IconCard/IconCard';
import styled from 'styled-components';
import { ShowOnDesktop } from '../ShowOnDesktop/ShowOnDesktop';
import { ShowOnMobile } from '../ShowOnMobile/ShowOnMobile';

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  flex-direction: row-reverse;
  height: 0;
  width: 100%;
  top: 16px;
  right: -8px;
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
  width: calc(100% + 48px);
  height: calc(100vh - 12vh);
  margin: 0 -24px;
`;

export const ContentCardResume = () => (
  <>
    <Head title="Resume - Jamie Bray" />
    <Card>
      <ShowOnDesktop>
        <Content title="Resume">
          <ShowOnDesktop>
            <IconContainer>
              <DownloadResume />
            </IconContainer>
            <NoOverflow>
              <DesktopResumeStyle src={RESUME_PDF_IFRAME} sandbox="" />
            </NoOverflow>
          </ShowOnDesktop>
        </Content>
      </ShowOnDesktop>

      <ShowOnMobile>
        <IconContainer>
          <DownloadResume />
        </IconContainer>
        <NoOverflow>
          <MobileResumeStyle src={RESUME_PDF_IFRAME} sandbox="" />
        </NoOverflow>
      </ShowOnMobile>
    </Card>
  </>
);

const DownloadResume = () => (
  <a href={RESUME_PDF_DOWNLOAD} title="Download Resume PDF">
    <IconCard render={className => <FaDownload className={className} />} />
  </a>
);
