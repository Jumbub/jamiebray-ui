import { usePathName } from '../gui/hooks/usePathName';
import { App as GuiApp } from '../gui/components/App/App';

export const App = ({ Component, pageProps }) => {
  const path = usePathName();

  if (path.includes('gui')) {
    return (
      <GuiApp>
        <Component key={path} {...pageProps} />
      </GuiApp>
    );
  }

  return <Component {...pageProps} />;
};
