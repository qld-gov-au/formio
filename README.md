# Queensland Government Form.io custom component library

This repository provides a bundled JS custom component library to form.io builder / form.io renderer / Squiz Matrix form application.

## Goals

Following are the goals of this repository.

### Primary

| Goal           | Solution                                                                                       |
| -------------- | ---------------------------------------------------------------------------------------------- |
| JS Bundling    | [Webpack](https://webpack.js.org/) + [Babel](https://babeljs.io/)                              |
| Support IE11   | [Babel polyfill](https://babeljs.io/docs/en/babel-polyfill/)                                   |
| CI/CD          | [Github Actions](https://github.com/features/actions)                                          |
| CDN deployment | Separate Bitbucket repository + [Bamboo](https://servicesmadesimpler.govnet.qld.gov.au/bamboo) |

### Secondary

| Goal                     | Solution                                                                                                   |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- |
| Development environment  | [Storybook](https://storybook.js.org/)                                                                     |
| Documentation deployment | [Github Page](https://pages.github.com/)                                                                   |
| Testable                 | [Jest](https://jestjs.io/) + [Testing Library](https://testing-library.com/docs/dom-testing-library/intro) |
| Code quality             | [esLint](https://eslint.org/) + [Prettier](https://prettier.io/)                                           |

### Optional

| Goal           | Solution                                      |
| -------------- | --------------------------------------------- |
| Visual testing | [Chromatic](https://www.chromatic.com/)       |
| Typescript     | [Typescript](https://www.typescriptlang.org/) |

## Development

- Create a feature branch from `main`.
- Install packages with `yarn`.
- Start development environment with `yarn storybook`.
- Create / Modify components in `src/components`.
- Update `src/components/index.js` for new component.
- Lint and test with `yarn verify`.
- Push your branch and create pull request to merge to `develop` branch.

## Deployment

- `yarn build`

WIP

## Usage

WIP
