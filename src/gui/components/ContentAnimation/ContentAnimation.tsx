import { ReactNode, ReactText } from 'react';

export const ContentAnimation = ({ children, key }: { children: ReactNode; key: ReactText }) => (
  <div key={key}>{children}</div>
);
