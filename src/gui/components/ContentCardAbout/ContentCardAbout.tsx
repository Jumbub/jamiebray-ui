import React from 'react';
import { Card } from '../Card/Card';
import Content from '../Content/Content';
import { Head } from '../Head/Head';
import styles from './ContentCardAbout.module.scss';

export const ContentCardAbout = () => (
  <>
    <Head title="About - Jamie Bray" />
    <Card>
      <Content title="About">
        <div className={styles.horizontalSplit}>
          <div className={styles.textContent}>
            <div className={styles.item}>
              <div className={styles.label}>Work</div>
              <div>
                <div className={styles.descriptor}>Software Developer</div>
                <div className={styles.descriptorSecondary}>at HealthEngine</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.label}>Study</div>
              <div>
                <div className={styles.descriptor}>Computer Science</div>
                <div className={styles.descriptorSecondary}>at Curtin University</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.label}>Side</div>
              <div>
                <div className={styles.descriptor}>More programming,</div>
                <div className={styles.descriptorSecondary}>dirtbikes, downhill MTB</div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="../../../../assets/jamiebray-face.jpg"
              alt="Jamie Bray"
              className={styles.face}
            />
          </div>
        </div>
      </Content>
    </Card>
  </>
);
