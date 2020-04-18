import React from 'react';
import { FaLinkedinIn, FaGithub, FaCopy } from 'react-icons/fa';
import copy from 'copy-to-clipboard';
import { Card } from '../Card/Card';
import Content from '../Content/Content';
import { EMAIL } from '../../constants/personal';
import { GITHUB, LINKEDIN } from '../../constants/social';
import IconCard from '../IconCard/IconCard';
import styles from './ContentCardContact.module.scss';

export const ContentCardContact = () => (
  <Card>
    <Content title="Contact">
      <div className={styles.content}>
        <p>Feel free to contact me through any form of social media!</p>
        <blockquote className={styles.multipleCards}>
          <a href={LINKEDIN} title="My LinkedIn profile">
            <IconCard highlight render={className => <FaLinkedinIn className={className} />} />
          </a>
          <a href={GITHUB} title="My LinkedIn profile">
            <IconCard render={className => <FaGithub className={className} />} />
          </a>
        </blockquote>
        <p>Or shoot me an email directly at...</p>
        <blockquote className={styles.dataAndIcon}>
          <div className={styles.data}>{EMAIL}</div>
          <IconCard
            onClick={() => copy(EMAIL)}
            render={className => <FaCopy className={className} />}
          />
        </blockquote>
      </div>
    </Content>
  </Card>
);
