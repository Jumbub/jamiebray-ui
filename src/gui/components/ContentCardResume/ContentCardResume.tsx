import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { RESUME_PDF_DOWNLOAD, RESUME_PDF_IFRAME } from '../../constants/personal';
import { Card } from '../Card/Card';
import Content from '../Content/Content';
import { Head } from '../Head/Head';
import IconCard from '../IconCard/IconCard';
import styles from './ContentCardResume.module.scss';

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
        <Card className={styles.documentWrapper} inverted>
          <div className={styles.documentCropper}>
            <iframe
              title="Jamie Bray's Resume"
              src={RESUME_PDF_IFRAME}
              className={styles.document}
            />
          </div>
        </Card>
      </Content>
    </Card>
  </>
);
