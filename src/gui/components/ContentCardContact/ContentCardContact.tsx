import copy from 'copy-to-clipboard';
import React, { memo } from 'react';
import {
  FaLinkedinIn,
  FaGithub,
  FaCopy,
  FaMailBulk,
  FaPooStorm,
  FaRegEnvelope,
} from 'react-icons/fa';
import { EMAIL } from '../../constants/personal';
import { GITHUB, LINKEDIN } from '../../constants/social';
import { Card } from '../Card/Card';
import Content from '../Content/Content';
import { Head } from '../Head/Head';
import IconCard from '../IconCard/IconCard';
import styles from './ContentCardContact.module.scss';

export const ContentCardContact = memo(() => (
  <>
    <Head title="Contact - Jamie Bray" />
    <Card>
      <Content title="Contact">
        <div className={styles.content}>
          <blockquote className={`${styles.quote} ${styles.multipleCards}`}>
            <a href={LINKEDIN} title="My LinkedIn profile">
              <IconCard highlight render={className => <FaLinkedinIn className={className} />} />
            </a>
            <a href={GITHUB} title="My LinkedIn profile">
              <IconCard render={className => <FaGithub className={className} />} />
            </a>
            <a href={`mailto:${EMAIL}`} title="My email">
              <IconCard render={className => <FaRegEnvelope className={className} />} />
            </a>
          </blockquote>
          <blockquote className={`${styles.quote} ${styles.dataAndIcon}`}>
            <div className={styles.data}>{EMAIL}</div>
            <IconCard
              onClick={() => copy(EMAIL)}
              render={className => <FaCopy className={className} />}
            />
          </blockquote>
        </div>
      </Content>
    </Card>
  </>
));
