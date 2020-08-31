import { App as ResumeApp } from '../gui/components/App/App';
import { RESUME_PDF_IFRAME } from '../gui/constants/personal';
import { useRedirectedPathName } from '../gui/hooks/useRedirectPathName';
import { preloadResume, dontPreloadResume } from '../gui/utils/preloadResume';

export const App = ({ Component, pageProps }) => {
  const path = useRedirectedPathName();

  if (path === '/resume') {
    dontPreloadResume();
  } else {
    preloadResume();
  }

  if (['/about', '/resume', '/contact'].some(check => check === path)) {
    return (
      <ResumeApp>
        <Component key={path} {...pageProps} />
      </ResumeApp>
    );
  }

  return <Component {...pageProps} />;
};
