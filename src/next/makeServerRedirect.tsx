import { NextPageContext } from 'next/dist/next-server/lib/utils';

export const makeServerRedirect = (to: string) => {
  const Redirect = () => undefined;

  Redirect.getInitialProps = async (ctx: NextPageContext) => {
    ctx.res.writeHead(302, { Location: to }).end();
  };

  return Redirect;
};
