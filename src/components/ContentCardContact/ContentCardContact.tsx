import React from 'react'
import styles from './ContentCardContact.module.scss'
import Card from '../Card/Card'
import Content from '../Content/Content'
import { EMAIL } from '../../constants/personal'
import { GITHUB, LINKEDIN } from '../../constants/social'
import { FaLinkedinIn, FaGithub, FaCopy } from 'react-icons/fa'
import copy from 'copy-to-clipboard'

const ContentCardContact: React.FC = () => {
  return (
    <Card>
      <Content title="Contact">
        <div className={styles.content}>
          <p>Feel free to contact me through any form of social media!</p>
          <blockquote className={styles.multipleCards}>
            <a href={LINKEDIN}>
              <Card className={`${styles.iconCard} ${styles.highlight}`}>
                <FaLinkedinIn className={styles.icon} />
              </Card>
            </a>
            <a href={GITHUB}>
              <Card className={styles.iconCard}>
                <FaGithub className={styles.icon} />
              </Card>
            </a>
          </blockquote>
          <p>Or shoot me an email directly at...</p>
          <blockquote className={styles.dataAndIcon}>
            <div className={styles.data}>{EMAIL}</div>
            <Card className={styles.iconCard}>
              <FaCopy className={styles.icon} onClick={() => copy(EMAIL)} />
            </Card>
          </blockquote>
        </div>
      </Content>
    </Card>
  )
}

export default ContentCardContact
