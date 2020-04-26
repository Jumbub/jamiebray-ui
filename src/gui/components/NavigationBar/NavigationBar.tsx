import React, { useState } from 'react';
import { FaGripLines } from 'react-icons/fa';
import useIsMobile from '../../hooks/useIsMobile';
import LightBox from '../LightBox/LightBox';
import NavigationBarLink from '../NavigationBarLink/NavigationBarLink';
import styles from './NavigationBar.module.scss';

const NavigationBar: React.FC<{
  title: string;
  links: { label: string; href: string }[];
}> = ({ title, links }) => {
  const isMobile = useIsMobile();
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.links}>
          {isMobile ? (
            <>
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
            </>
          ) : (
            links.map(({ label, href }) => (
              <NavigationBarLink key={href} label={label} href={href} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default NavigationBar;