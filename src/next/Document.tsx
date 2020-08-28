import NextDocument, { DocumentContext, Html, NextScript, Main, Head } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import robotoLight from '../fonts/Roboto-Light.woff2';
import robotoMonoLight from '../fonts/RobotoMono-Light.woff2';

export class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  public render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.webmanifest" />
          <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                  @font-face {
                    font-family: 'RobotoMono';
                    font-weight: 300;
                    src: url(${robotoMonoLight}) format('woff2');
                  }
                  @font-face {
                    font-family: 'Roboto';
                    font-weight: 300;
                    src: url(${robotoLight}) format('woff2');
                  }
                `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
