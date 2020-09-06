import { default as NextHead } from 'next/head';

export const Head = ({ title }: { title: string }) => (
  <NextHead>
    <title>{title}</title>
    <meta name="author" content="Jamie Bray" />
    <meta
      name="description"
      content="Jamie Bray's online resume. Full stack developer at HealthEngine. Working experience with React, Typescript, Next.js, Storybook, GraphQL, AWS, Docker, Laravel."
    />
    <meta name="keywords" content="Personal, Resume, Hire Me, Programmer, Developer" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </NextHead>
);
