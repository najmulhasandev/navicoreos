export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://navicore.os.navicoresoftware.com";
export const site = {
  name: "NAVICORE OS", main: "https://os.navicore.co", org: "https://navicore.co", portfolio: "https://najmulhasan.dev",
  software: "https://software.navicore.co", railmate: "https://railmatebd.com",
  email: "os@navicoresoftware.com", tagline: "One building. Many rooms. Everything a company needs.",
};
export const STATUS_DATE = "31 October 2026";
export const nav = [["Product", "/product"], ["Security", "/security"], ["Roadmap", "/roadmap"], ["Partner", "/partner"], ["Status", "/status"]];

export const meta = (title, description, path = "/") => ({
  title, description,
  alternates: { canonical: (process.env.NEXT_PUBLIC_CANONICAL_URL || "") + path },
  openGraph: { title, description, url: path, type: "website", siteName: "NAVICORE OS", locale: "en_US" },
  twitter: { card: "summary_large_image", title, description },
});

export const stats = [["50+", "projects delivered by Navicore Software"], ["3", "countries served"], ["100%", "of projects delivered on time"], ["12", "days from concept to beta for RailMate Bangladesh"]];

export const tiles = [["People", 1], ["Projects", 1], ["Time", 1], ["Customers", 1], ["Documents"], ["Finance"], ["AI"], ["Automation"], ["Chat"], ["Analytics"], ["Security"], ["Integrations"]];

export const rooms4 = [
  ["People Directory", "A profile for everyone: name, job, team and who their manager is.", "Like a class register"],
  ["Projects & Tasks", "Big jobs split into small to-dos on Kanban boards, so everyone sees who is doing what.", "Like sticky notes on a wall"],
  ["Time Tracking", "Records the hours spent on each job, so effort is never guesswork.", "Like a stopwatch for every job"],
  ["Customers (CRM)", "Remembers who might buy, who already bought, and every conversation.", "Like a shopkeeper’s notebook"],
];

export const today = [
  ["Information gets lost", "Chat in one app, tasks in another, customers in a third. Details fall through the gaps."],
  ["People copy things by hand", "The same detail is typed again and again, in every tool, by every person."],
  ["Nobody sees the whole picture", "Owners cannot tell what is late, what is waiting, or who is doing what."],
];
export const withOs = [
  ["People, work and customers together", "One connected home, with money, chat and more joining later, all kept safe."],
  ["Built in English and Bangla", "Local dates, numbers and currency are planned from day one, not bolted on."],
  ["Proven on ourselves first", "Navicore is the first customer, so every feature has to earn its place."],
];

export const how = [
  ["The dining room", "What you see and tap", "The web app, built with Next.js and React. Fast, accessible, and in dark or light mode."],
  ["The kitchen", "Follows the rules", "The API, built with NestJS. It checks who may do what, then gets the work done."],
  ["The pantry", "Holds everything", "PostgreSQL with Prisma. A huge, organised filing cabinet, separated per company."],
];

export const why = [
  ["One home instead of many apps", "In the spirit of Notion, ClickUp, Monday.com and HubSpot, but unified in one connected place."],
  ["We use it ourselves first", "Navicore is customer zero. If it can run a real company every day, it is good enough for others."],
  ["See the company from anywhere", "Who joined, which projects are late, which approvals are waiting, without being in the office."],
  ["Built for us, in our language", "English and Bangla, with local dates, numbers and currency, where many global tools treat this as an afterthought."],
  ["A product that can grow", "Other companies can get their own locked house, and over time NAVICORE OS helps fund our other ventures."],
];

export const modules = [
  ["Core Platform", "build", "Sign-in, organisations, workspaces, teams, roles and an admin panel: the strong walls everything else stands on.", ["Email, OAuth, MFA and passkeys", "Organisations, workspaces and teams", "Fine-grained roles and permissions", "Admin panel and settings"]],
  ["People Directory", "build", "A profile for every person, scoped deliberately to the directory rather than a full HR suite.", ["Name, job, team and manager", "Searchable company directory", "Role-aware visibility", "Archived on departure"]],
  ["Work Management", "build", "Projects, tasks and Kanban boards, with time tracking, comments and an activity feed.", ["Projects, tasks and Kanban", "Time tracking per task", "Comments and attachments", "Activity feed and notifications"]],
  ["CRM & Sales", "build", "Companies, contacts, leads and a sales pipeline, with a client portal on the way.", ["Companies, contacts and leads", "Pipeline and deals", "Client and customer portal", "AI deal insights (later)"]],
  ["Knowledge & Documents", "plan", "A file manager, versioned documents with approvals, and a wiki with search.", ["File manager on Supabase Storage", "Versioning and approvals", "Knowledge base and wiki", "Full-text and vector search"]],
  ["Finance & Billing", "plan", "Invoicing, expenses, budgets and payments, plus subscription billing for NAVICORE OS itself.", ["Invoices and expenses", "Budgets and payments", "Financial reporting", "Plans and metering via Stripe"]],
  ["AI Layer", "plan", "An assistant that works across modules, powered by a separate Python service and provider-agnostic model routing.", ["Assistant and summaries", "Email and proposal drafting", "Natural-language search (RAG)", "Task and workflow suggestions"]],
  ["Automation & Integrations", "plan", "Triggers, conditions and actions, plus webhooks, API keys and a versioned public REST API.", ["Workflow builder", "Webhooks and API keys", "Public REST API", "Plugin foundation"]],
  ["Collaboration", "plan", "Internal chat, channels and mentions with real-time notifications and an embedded video provider.", ["Chat and channels", "Mentions", "Real-time notifications", "Video via an existing provider"]],
  ["Analytics", "plan", "Dashboards, KPIs, custom reports and forecasts across every module built so far.", ["Dashboards and KPIs", "Custom reports", "Forecasts", "Owner’s daily overview"]],
];

export const stack = [
  ["Web", "Next.js 16, React 19, TypeScript, Tailwind CSS, shadcn/ui"],
  ["API", "NestJS modular monolith, Clean Architecture, DTOs at every boundary"],
  ["AI service (planned)", "Python and FastAPI, deployed separately, provider-agnostic model routing"],
  ["Data", "PostgreSQL with Prisma, pgvector for search and retrieval"],
  ["Queues and cache", "Redis with BullMQ for background jobs and notifications"],
  ["Auth and storage", "Better Auth (organisations, MFA, passkeys), Supabase Storage"],
  ["Delivery", "Turborepo and pnpm, Docker, GitHub Actions CI, Vercel and Railway"],
  ["Observability", "Sentry, OpenTelemetry, structured JSON logging"],
];

export const pillars = [
  ["Every company gets a locked house", "Many companies share one platform but each lives in a separate house with its own key. Isolation is enforced at the data layer, not just the screen, and it was built from day one because adding locks later is much harder and riskier."],
  ["Badges decide who opens which door", "Not everyone should see everything. Each person gets a role and each role has fine-grained permissions. New sign-ups see what the product’s modules are, not real data, until an admin grants access."],
  ["A diary that can never be erased", "Every privileged action is written to an append-only audit log: who did what, and when. If something goes wrong we can look back and see exactly what happened."],
  ["Strong logins", "Passwords plus a second factor, with passkey support through Better Auth. A stolen password alone is not enough to get in."],
];
export const defence = ["Encryption at rest and in transit", "Rate limiting per organisation and per IP", "Secure headers: CSP and HSTS", "Input validation at every boundary", "Parameterised queries by default", "CSRF strategy for cookie sessions", "OWASP Top 10 checked before each module ships", "Secrets in environment variables, never in code"];

export const steps = [
  ["Step 1", "In build", "Foundation + work", [["Phase 1", "Foundation: logins, organisations, workspaces, roles"], ["Phase 2", "Work Management: projects, tasks, time"], ["Phase 3", "CRM & Sales: companies, contacts, pipeline"]]],
  ["Step 2", "Next", "Knowledge + money", [["Phase 4", "Knowledge & Documents"], ["Phase 5", "Finance & Billing"]]],
  ["Step 3", "Then", "Intelligence", [["Phase 6", "AI Layer"], ["Phase 7", "Automation & Integrations"]]],
  ["Step 4", "Later", "Scale", [["Phase 8", "Collaboration"], ["Phase 9", "Analytics & Reporting"], ["Phase 10", "Enterprise & Hardening: SSO, white-label, launch"]]],
];
export const horizon = [
  ["Next after the first rooms", "Announcement centre, calendar and meeting scheduler, and a desktop app (Tauri) wrapping the solid web app."],
  ["Later, when revenue supports it", "Native mobile on React Native, voice and video calling, SSO/SAML and device management."],
  ["A deliberate choice", "End-to-end encrypted chat is not planned. It would stop admins and auditors reading company messages, so we use encryption in transit and at rest instead."],
];

export const ways = [
  ["For clients", "Use it", "Run your company in your own locked workspace, in English and Bangla. Tell us about your team and we will talk through how NAVICORE OS fits."],
  ["For buyers", "License it", "Licence NAVICORE OS for your organisation. Talk to us about terms, control and how white-label readiness fits your plans."],
  ["For partners", "Partner with us", "Integrate, resell or co-develop. A versioned public API and a plugin foundation are on the roadmap."],
  ["For sponsors", "Sponsor the build", "Help fund the next rooms of a long-term product, built one proven step at a time and reported honestly on the status page."],
  ["For founders", "Build one like it", "Navicore Software designs and builds custom platforms: fixed scope, fixed price and direct founder access."],
];

export const faqs = [
  ["What is NAVICORE OS?", "NAVICORE OS is a business operating system: one platform where a company keeps its people, its work and its customers, and later its money, documents, chat and analytics, all connected and kept safe."],
  ["Who is it for?", "Growing companies that have outgrown a pile of separate tools, and owners who want to see the whole company from anywhere. It is built English and Bangla first, with local dates, numbers and currency."],
  ["Is it available today?", "NAVICORE OS is in active build. The foundation and the first four rooms (People Directory, Projects & Tasks, Time Tracking and Customers) are being built and tested. The status page shows exactly where things stand."],
  ["How is each company’s data kept separate?", "Every company gets its own locked workspace. Tenant isolation is enforced at the query layer from day one, with roles, permissions and an append-only audit log on top."],
  ["Can I license or white-label it?", "Licensing conversations are open now. White-label readiness is part of the final enterprise phase, and Navicore Software can build a custom platform for you in the meantime."],
  ["How do I sponsor or partner?", "Email os@navicoresoftware.com with a few lines about your goals. We reply personally."],
  ["Who builds NAVICORE OS?", "Navicore Software, the engineering arm of the Navicore ecosystem, founded by Najmul Hasan and Nusrat Jahan Bably. The team has delivered 50+ projects across 3 countries."],
];

export const state = {
  summary: [
    ["Live", "live", "Public website", "This presentation site and the main website at os.navicore.co are live."],
    ["In build", "build", "Foundation and first four rooms", "Logins, company houses, roles, the activity diary and file storage are being built and tested, alongside projects, tasks, time tracking and customer records."],
    ["Planned", "plan", "Everything after step 1", "Documents, finance, AI, automation, chat, analytics and the apps are planned and deliberately not started."],
  ],
  areas: [
    ["Public website (os.navicore.co)", "live", "Explains the product and takes enquiries."],
    ["Foundation", "build", "Sign-in with email, OAuth and MFA; organisations and workspaces; roles and permissions; audit log; file storage."],
    ["People Directory", "build", "Profiles, teams and reporting lines."],
    ["Projects, tasks and time", "build", "Kanban boards, tasks, comments and time tracking."],
    ["Customers (CRM)", "build", "Companies, contacts, leads and pipeline."],
    ["Knowledge, finance, AI, automation, chat, analytics", "plan", "Scoped and sequenced. Work starts only after the current step is verified."],
    ["Desktop and mobile apps", "plan", "Desktop via Tauri first, native mobile later."],
  ],
  infra: [["Web", "Vercel"], ["API and workers", "Railway"], ["Database and cache", "Managed PostgreSQL and Redis"], ["Transactional email", "Resend over HTTPS"], ["Source and CI", "GitHub and GitHub Actions"]],
  done: ["Type checks clean", "Lint clean", "Automated tests pass", "Database migrations applied", "No silent TODOs left in the code"],
  next: ["Per-workspace domain-verified sign-up", "Module access granted by admins, with minimal default visibility for new users", "Forgot-password and reset flow", "A richer public landing page with real product screenshots"],
};
