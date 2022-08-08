<p align="center">
    <img alt="Logo" width="400" src=https://github.com/its-hmny/its-hmny.github.io/blob/main/public/logo.png?raw=true">
</p>

<p align="center">
    <img alt="GPLv3 License" src="https://img.shields.io/badge/License-GPL%20v3-yellow.svg">
    <img alt="Code Size" src="https://img.shields.io/github/languages/code-size/its-hmny/its-hmny.github.io?color=green&label=Code%20Size">
    <img alt="Deploy" src="https://github.com/its-hmny/its-hmny.github.io/actions/workflows/pages.yml/badge.svg">
    <img alt="Release" src="https://img.shields.io/github/v/release/its-hmny/its-hmny.github.io?label=Version">
</p>

# its-hmny.github.io

## My personal website, hosted at https://its-hmny.github.io

The site consist of only a Spline scene but when the user interacts with it there's some code that intercepts the event and shows UI accordingly. Most the data is static (embedded directly into code) but, for the `Projects` and `Blog` sections, updated data from the GitHub and Dev.to public APIs is fetched.

The site itself doesn't have many more functionalities, it's meant to be just a portfolio with a 3D flavour on it.

## Installation

To install the dependencies and run the site locally, simply type in your terminal:

```bash
  # NOTE: npm or pnpm can be used as well
  yarn install
  yarn start:dev
```

You can also build a production version, both with an embedded Node.js server as well as standalone HTML (thanks to `next export`):

```bash
  yarn build:all  # With embedded Node.js server
  yarn build:html # Plain HTML, CSS and JS files exported
```

## Technology Stack

- [Typescript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/) / [React](https://reactjs.org/)
- [Spline](https://spline.design/) / [SWR](https://swr.vercel.app/) / [NextUI](https://nextui.org/)

## Authors

- [@its-hmny](https://www.github.com/its-hmny) - Follow me on [Twitter](https://twitter.com/its_hmny) as well

## License

This project is distributed under the [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) license.
