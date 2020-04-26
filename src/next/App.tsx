import { App as ResumeApp } from '../gui/components/App/App';
import { useRedirectedPathName } from '../gui/hooks/useRedirectPathName';

export const App = ({ Component, pageProps }) => {
  const path = useRedirectedPathName();

  if (['/about', '/resume', '/contact'].some(check => check === path)) {
    return (
      <ResumeApp>
        <Component key={path} {...pageProps} />
      </ResumeApp>
    );
  }

  return <Component {...pageProps} />;
};
