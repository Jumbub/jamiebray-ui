import React from 'react'
import styles from './ContentCardContact.module.scss'
import Card from '../Card/Card'
import Content from '../Content/Content'
import { EMAIL } from '../../constants/personal'
import { FaLinkedinIn, FaGithub, FaCopy } from 'react-icons/fa'

const ContentCardContact: React.FC = () => {
  return (
    <Card>
      <Content title="Contact">
        <div className={styles.content}>
          <p>Feel free to contact me through any form of social media!</p>
          <blockquote className={styles.multipleCards}>
            <a href="https://www.linkedin.com/in/jamie-stuart-bray/">
              <Card className={`${styles.iconCard} ${styles.highlight}`}>
                <FaLinkedinIn size={'24px'} className={styles.icon} />
              </Card>
            </a>
            <a href="https://github.com/jumbub/">
              <Card className={styles.iconCard}>
                <FaGithub size={'24px'} className={styles.icon} />
              </Card>
            </a>
          </blockquote>
          <p>Or shoot me an email directly at...</p>
          <blockquote className={styles.dataAndIcon}>
            <div className={styles.data}>{EMAIL}</div>
            <Card className={styles.iconCard}>
              <FaCopy size={'24px'} className={styles.icon} />
            </Card>
          </blockquote>
        </div>
      </Content>
    </Card>
  )
}

export default ContentCardContact
