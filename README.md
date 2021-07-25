# @sdgindex Starter Template

Starter template for SDG Index & Dashboards, built on Next.js with Material UI and Styled Components.

## Getting Started

Via command line:

```js
mkdir my-new-repo
cd ./my-new-repo

git init
git remote add template https://github.com/sdsna/sdgindex-starter
git fetch template

git checkout template/main -- .
git commit -m "Use sdsna/sdgindex-starter template"
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

## Notes

### Fast Refresh

On Windows, [Fast Refresh](https://nextjs.org/docs/basic-features/fast-refresh) (hot reloading) only works with Google Chrome.

## Development

This template builds on the sdsna/nextjs-starter template: https://github.com/sdsna/nextjs-starter

Improvements from sdsna/nextjs-starter can be merged as follows:

```
git remote add nextjs-starter https://github.com/sdsna/nextjs-starter.git
git fetch nextjs-starter
git merge nextjs-starter/main
```
