import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Card } from '../Card/Card';
import Content from '../Content/Content';
import { RESUME_PDF_DOWNLOAD } from '../../constants/personal';
import IconCard from '../IconCard/IconCard';
import { Head } from '../Head/Head';
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
              src="https://docs.google.com/document/d/e/2PACX-1vSRoB7vomuVYqdlVbF49GwDtgjuCXpytklI8upjOQ5-CTcZfLutDBeUs7ZtnLsM60ySe-nbupFz1UPK/pub?embedded=true"
              className={styles.document}
            />
          </div>
        </Card>
      </Content>
    </Card>
  </>
);
