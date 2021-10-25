# Next.js Starter Template

Starter template for Next.js projects with Material UI and Styled Components.

## Getting Started

Via command line:

```js
mkdir my-new-repo
cd ./my-new-repo

git init
git remote add template https://github.com/sdsna/nextjs-starter.git
git fetch template

git checkout template/main -- .
git commit -m "Use sdsna/nextjs-starter template"
```

### Theme

The [Material UI theme](https://material-ui.com/customization/theming/) (e.g., color scheme) can be configured in `components/ThemeProvider.js`. The component is mounted in `pages/_app.js`. The theme is available in styled components, e.g.,

```js
const MyButton = styled(button)`
  background-color: ${(props) => props.theme.palette.primary.main};
`;
```

### Search Engine Optimization (SEO) and Social Media Optimization (SMO)

We use [Next SEO](https://github.com/garmeeh/next-seo) for search engine optimization. The default SEO is configured in `config.js` and set up in `pages/_app.js`. The defaults can be overwritten on a per-page basis. See: https://github.com/garmeeh/next-seo#default-seo-configuration

### Linting

Linting has been set up. Run `npm run lint` to lint all files.

Linting (and code formatting) also occurs automatically as a pre-commit hook thanks to [lint-staged](https://github.com/okonet/lint-staged) and [husky](https://github.com/typicode/husky).
