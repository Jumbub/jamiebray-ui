# [Jamie Bray UI][Live SIte]

This project is my personal website.<br>
It is developed primarily with [React][React], [TypeScript][TypeScript], and [Storybook][Storybook]!

Visit the [site][Live Site].

View the [storybook][Live Storybook].

## Setup

### Required Software

- [Yarn][Yarn]
- [AWS CLI][AWS CLI Install] (only required for deployment)

### Installing Dependencies

`yarn`

This command will download the required dependencies for the project.

## Development

### Viewing Locally

`yarn start`

This command will build and serve a local copy of the website.

### Developing Components

`yarn storybook`

This command runs [Storybook][Storybook], the tool used for isolated component development.

### Running Tests

`yarn test`

This command aliases [jest][Jest], the tool used for testing component behaviourss.

### Deploying Changes

`yarn deploy`

This command will run the tests; build the app; and upload the new build to AWS S3.<br>
(This command requires the AWS CLI tool to be [installed][AWS CLI Install] and [configured][AWS CLI Configure] correctly.)


[Yarn]: https://yarnpkg.com/en/docs/install
[Live Site]: https://jamiebray.me/
[Live Storybook]: https://jamiebray.me/
[TypeScript]: https://www.typescriptlang.org/
[React]: https://reactjs.org/
[Jest]: https://jestjs.io/
[Storybook]: https://storybook.js.org/
[AWS CLI Install]: https://docs.aws.amazon.com/cli/latest/userguide/
[AWS CLI Configure]: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html
