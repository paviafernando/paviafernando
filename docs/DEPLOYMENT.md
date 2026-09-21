# Deployment

The site is a static Vite build. Every push runs the checks and publishes to Vercel from GitHub Actions
(`.github/workflows/ci.yml`). Vercel's own Git integration is turned off in `vercel.json`, so there are no double deploys.

## Which branch goes where

| Branch | Environment | Address |
| --- | --- | --- |
| `main` | production | `paviafernando.vercel.app` |
| `develop` | staging | `paviafernando-staging.vercel.app` |
| any other branch, and pull requests | preview | one URL per deploy (job summary, and a comment in the pull request) |

A deploy only happens if the checks pass (`npm run check`, `npm run build`, README files up to date).

## One-time setup

1. Create the Vercel project named `paviafernando` (in the same account or team as the other projects). With the CLI, from this folder: `vercel link`.
2. Get three values and save them as GitHub repository secrets (Settings > Secrets and variables > Actions):
   - `VERCEL_TOKEN`: create it at https://vercel.com/account/tokens
   - `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID`: they are in `.vercel/project.json` after `vercel link` (that folder is ignored by git)
   - With the GitHub CLI: `gh secret set VERCEL_TOKEN` (it asks for the value in the terminal, so it is never written in a file).
3. Push to `main`. The first run creates the production deploy.
4. For staging: create the branch `develop` and push it. The workflow sets the staging alias by itself.

Never commit tokens or the `.vercel` folder.

## Rollback

In the Vercel dashboard, open the project, pick a previous production deployment and choose "Promote". Or from the terminal: `vercel rollback`.

## Custom domain (optional)

`vercel domains add <domain> paviafernando`, then set the DNS records Vercel shows. The `.vercel.app` address keeps working.
