import React from 'react'
import styles from './ContentCardResume.module.scss'
import Card from '../Card/Card'
import Content from '../Content/Content'
import { FaDownload } from 'react-icons/fa'
import { RESUME_PDF_DOWNLOAD } from '../../constants/personal'

const ContentCardResume: React.FC = () => {
  return (
    <Card>
      <Content title="Resume">
        <div className={styles.textAndAction}>
          <p>You can view my resume here, or download it!</p>
          <a href={RESUME_PDF_DOWNLOAD} title="Download Resume PDF">
            <Card className={styles.iconCard}>
              <FaDownload className={styles.icon} />
            </Card>
          </a>
        </div>
        <Card className={styles.documentWrapper} inverted>
          <iframe
            title="Jamie Bray's Resume"
            src="https://docs.google.com/document/d/e/2PACX-1vSRoB7vomuVYqdlVbF49GwDtgjuCXpytklI8upjOQ5-CTcZfLutDBeUs7ZtnLsM60ySe-nbupFz1UPK/pub?embedded=true"
            className={styles.document}
          />
        </Card>
      </Content>
    </Card>
  )
}

export default ContentCardResume
