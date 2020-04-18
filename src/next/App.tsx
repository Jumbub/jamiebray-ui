import { usePathName } from '../gui/hooks/usePathName';
import { App as ResumeApp } from '../gui/components/App/App';

export const App = ({ Component, pageProps }) => {
  const path = usePathName();

  if (['about', 'resume', 'contact'].some(check => path.includes(check))) {
    return (
      <ResumeApp>
        <Component key={path} {...pageProps} />
      </ResumeApp>
    );
  }

  return <Component {...pageProps} />;
};
