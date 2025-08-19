# ▲ / next-forge

**Production-grade Turborepo template for Next.js apps.**

<div>
  <img src="https://img.shields.io/npm/dy/next-forge" alt="" />
  <img src="https://img.shields.io/npm/v/next-forge" alt="" />
  <img src="https://img.shields.io/github/license/vercel/next-forge" alt="" />
</div>

## Overview

[next-forge](https://github.com/vercel/next-forge) is a [Next.js](https://nextjs.org/) project boilerplate for modern web application. It is designed to be a comprehensive starting point for new apps, providing a solid, opinionated foundation with a minimal amount of configuration.

## Getting Started

Clone the repo using:

```sh
npx next-forge@latest init
```

Then read the [docs](https://www.next-forge.com/docs) for more information.

## Contributors

<a href="https://github.com/vercel/next-forge/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=vercel/next-forge" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

## steps to run the project

    #1 pnpm install

    #2 create a .env.local file in apps/web and paste

      BASEHUB_TOKEN="bshb_pk_ay6h58lnawg8qs0l8klw3ey88r5yk5e31rwxf98vswv9xj35997whf8hygmku2ma"
      VERCEL_PROJECT_PRODUCTION_URL="http://localhost:3001"
      KNOCK_API_KEY=""
      KNOCK_FEED_CHANNEL_ID=""

      # Client
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
      NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
      NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
      NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/"
      NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/"
      NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
      NEXT_PUBLIC_POSTHOG_KEY="phc_xxxxxxxxxxxxxxxxx"
      NEXT_PUBLIC_POSTHOG_HOST="https://app.posthog.com"
      NEXT_PUBLIC_APP_URL="http://localhost:3000"
      NEXT_PUBLIC_WEB_URL="http://localhost:3001"
      NEXT_PUBLIC_API_URL="http://localhost:3002"
      NEXT_PUBLIC_DOCS_URL="http://localhost:3004"

    3# as well as in the projects/cms and paste

      BASEHUB_TOKEN="bshb_pk_ay6h58lnawg8qs0l8klw3ey88r5yk5e31rwxf98vswv9xj35997whf8hygmku2ma"

    4# and then do pnpm dev to run the project