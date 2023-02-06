import React from 'react';
import { Card } from '../Card/Card';
import Content from '../Content/Content';
import { Head } from '../Head/Head';
import styles from './ContentCardAbout.module.scss';
import jamieBrayFace from './jamiebray-face.jpg';

export const ContentCardAbout = () => (
  <>
    <Head title="About - Jamie Bray" />
    <Card>
      <Content title="About">
        <div className={styles.horizontalSplit}>
          <div className={styles.textContent}>
            <div className={styles.item}>
              <div className={styles.label}>2022 2021</div>
              <div>
                <div className={styles.descriptor}>Senior Full Stack Dev / Lead</div>
                <div className={styles.descriptorSecondary}>GeoMoby</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.label}>2021 2017</div>
              <div>
                <div className={styles.descriptor}>Full Stack Dev</div>
                <div className={styles.descriptorSecondary}>HealthEngine</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.label}>2018 2018</div>
              <div>
                <div className={styles.descriptor}>Backend Dev</div>
                <div className={styles.descriptorSecondary}>Veritas</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.label}>2018 2016</div>
              <div>
                <div className={styles.descriptor}>Computer Science Graduate</div>
                <div className={styles.descriptorSecondary}>Curtin University</div>
              </div>
            </div>
          </div>
          <div>
            <img src={jamieBrayFace} alt="Jamie Bray" className={styles.face} />
          </div>
        </div>
      </Content>
    </Card>
  </>
);
