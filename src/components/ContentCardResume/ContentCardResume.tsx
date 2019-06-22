import React from 'react';
import styles from './ContentCardResume.module.scss'
import Card from '../Card/Card';
import Content from '../Content/Content';
import { FaDownload } from 'react-icons/fa';
import { RESUME_PDF_DOWNLOAD } from '../../constants/personal';

const ContentCardResume: React.FC = () => {
  return (
    <Card>
      <Content title="Resume">
        <div className={styles.textAndAction}>
          <p>
            You can view my resume here, or download it!
          </p>
          <a href={RESUME_PDF_DOWNLOAD}>
            <Card className={styles.iconCard}>
              <FaDownload className={styles.icon} />
            </Card>
          </a>
        </div>
      </Content>
    </Card>
  )
}

export default ContentCardResume
