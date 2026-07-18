This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Meta Lead Ads → CRM Integration

This site also hosts everything a Meta (Facebook) app needs for Lead Ads CRM auto-pull:

| URL | Purpose |
| --- | --- |
| `/privacy?app=blinkerp` | Privacy Policy URL (covers Meta Lead Ads data) |
| `/?app=blinkerp` | Terms of Service URL |
| `/data-deletion` | Data Deletion Instructions URL (also the deletion status page) |
| `/api/meta/data-deletion` | Data Deletion Request callback |
| `/api/meta/webhook` | `leadgen` webhook — verifies signature, pulls the full lead from the Graph API, forwards it to the CRM |

### Environment variables

Copy `.env.example` to `.env.local` (or set them in Vercel) and fill in:

- `META_APP_SECRET` — App Dashboard → Settings → Basic.
- `META_WEBHOOK_VERIFY_TOKEN` — any random string; must match the Verify Token in App Dashboard → Webhooks.
- `META_PAGE_ACCESS_TOKEN` — long-lived Page token (System User token recommended) with `leads_retrieval`, `pages_show_list`, `pages_read_engagement`, `pages_manage_metadata`.
- `META_GRAPH_VERSION` — optional, defaults to `v23.0`.
- `CRM_LEAD_WEBHOOK_URL` / `CRM_LEAD_WEBHOOK_TOKEN` — where normalized leads (and data-deletion notices) are POSTed. Leave the URL empty to only log leads.

### Meta App Dashboard setup

1. **Settings → Basic**: set Privacy Policy URL, Terms of Service URL, and under *User data deletion* choose **Data deletion request URL** → `https://<domain>/api/meta/data-deletion` (or *Instructions URL* → `https://<domain>/data-deletion`).
2. **Webhooks**: subscribe to the **Page** object, callback `https://<domain>/api/meta/webhook`, verify token = `META_WEBHOOK_VERIFY_TOKEN`, field **leadgen**.
3. Subscribe the Facebook Page itself: `POST /{page-id}/subscribed_apps?subscribed_fields=leadgen` with the Page token.
4. Request `leads_retrieval` (plus the `pages_*` permissions above) in App Review.
5. Test with [Meta's Lead Ads Testing Tool](https://developers.facebook.com/tools/lead-ads-testing) — create a test lead and check it arrives at the CRM (or in the logs).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
