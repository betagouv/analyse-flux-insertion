Ce projet à pour objectif de faciliter les discussions autour des fichiers échangés entre les parties prenantes du secteur de l'insertion.

Il permet d'afficher certaines informations résumées sur les flux échangés.

# Section technique

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Deploy changes

To add a new feature you have to create a pull request against the `main` branch.
Once it has been merged, pull the changes locally on the `main` branch and run:

```bash
npm run deploy
# or
yarn deploy
```

The added changes will then be visible on [https://betagouv.github.io/analyse-flux-insertion/](https://betagouv.github.io/analyse-flux-insertion/).

### Apply changes to production pages

Some pages are targetting demo environments of [`RDV-Solidarités`](https://github.com/betagouv/rdv-solidarites.fr). Since this application does not have a staging environment, we have pages targetting the demo env and pages targetting the prod env.

Once the changes are tested on the demo env, you can apply them to the pages targetting the production environments by running:

```bash
npm run apply-to-production-pages
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
