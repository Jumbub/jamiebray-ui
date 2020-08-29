import React, { useState } from 'react';
import { FaGripLines } from 'react-icons/fa';
import LightBox from '../LightBox/LightBox';
import NavigationBarLink from '../NavigationBarLink/NavigationBarLink';
import { ShowOnDesktop } from '../ShowOnDesktop/ShowOnDesktop';
import { ShowOnMobile } from '../ShowOnMobile/ShowOnMobile';
import styles from './NavigationBar.module.scss';

const NavigationBar: React.FC<{
  title: string;
  links: { label: string; href: string }[];
}> = ({ title, links }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.links}>
          <ShowOnMobile>
            {showDrawer && (
              <LightBox onClose={() => setShowDrawer(false)}>
                {links.map(({ label, href }) => (
                  <NavigationBarLink
                    key={href}
                    label={label}
                    href={href}
                    className={styles.mobileLink}
                    onClick={() => setShowDrawer(false)}
                  />
                ))}
              </LightBox>
            )}
            <FaGripLines
              className={`${styles.link} ${styles.dropDownLink} ${styles.skinnyLink}`}
              onClick={() => setShowDrawer(true)}
            />
          </ShowOnMobile>
          {links.map(({ label, href }) => (
            <ShowOnDesktop key={href}>
              <NavigationBarLink label={label} href={href} />
            </ShowOnDesktop>
          ))}
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default NavigationBar;
