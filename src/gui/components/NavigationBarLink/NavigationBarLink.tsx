import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import { useRedirectedPathName } from '../../hooks/useRedirectPathName';
import { Card } from '../Card/Card';
import styles from './NavigationBarLink.module.scss';

const NavigationBarLink: React.FC<{
  label: string;
  href: string;
  className?: string;
  onClick?: () => void;
}> = ({ label, href, className, onClick }) => {
  const activeLocation = useRedirectedPathName() === href;

  const link = (
    <Link href={href}>
      <div
        onClick={() => {
          if (onClick !== undefined) {
            onClick();
          }
        }}
        className={classNames(styles.link, className, {
          [styles.disabled]: activeLocation,
        })}
      >
        {label}
      </div>
    </Link>
  );

  return activeLocation ? <Card>{link}</Card> : link;
};

// eslint-disable-next-line import/no-default-export
export default NavigationBarLink;
