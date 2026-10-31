# NAVICORE OS: presentation website

Next.js 16 (App Router, plain JavaScript, no extra dependencies). Pages: Home, Product, Security, Roadmap, Partner (with FAQ), and Status (current state).

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Deploy on Vercel at navicoreos.navicoresoftware.com
1. Push this folder to a GitHub repository and import it in Vercel (framework: Next.js, no build settings needed).
2. Project > Settings > Environment Variables: `NEXT_PUBLIC_SITE_URL=https://navicoreos.navicoresoftware.com`
3. Project > Settings > Domains: add `navicoreos.navicoresoftware.com`.
4. At the DNS provider for navicoresoftware.com, add the record Vercel displays. Normally a CNAME with host `navicoreos` pointing to the value Vercel gives you (typically `cname.vercel-dns.com`).

## SEO included
- `metadataBase`, title template, descriptions, keywords, per-page canonical URLs, Open Graph and Twitter cards
- Generated 1200x630 social image (`app/opengraph-image.js`), favicon (`app/icon.svg`) and web manifest
- `sitemap.xml` and `robots.txt` generated from `lib/site.js`
- JSON-LD: Organization, WebSite, SoftwareApplication (home), FAQPage (partner)
- Semantic headings (one h1 per page), crawlable internal links, static pages, security headers
- Optional `GOOGLE_SITE_VERIFICATION` env var for Search Console

After deploying: add the domain as a property in Google Search Console and Bing Webmaster Tools, submit `/sitemap.xml`, and link to this site from os.navicore.co, navicore.co and software.navicore.co.

### Canonical choice
Canonicals point to this site by default. If you want os.navicore.co to be the one that ranks, set `NEXT_PUBLIC_CANONICAL_URL=https://os.navicore.co`; canonicals then point at the matching paths there.

## Updating content
All copy lives in `lib/site.js`. To update the Status page, edit `state` and `STATUS_DATE` at the top of that file.
