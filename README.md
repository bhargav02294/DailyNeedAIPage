# DailyNeedAI Public Website

Modern public-facing marketing website for DailyNeedAI.

## Routes
- /
- /features
- /security
- /ai
- /reminders
- /pricing
- /about
- /contact
- /login
- /signup

## Start
```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```

If you previously ran an older version of this project, clear Next's generated cache before starting:
```powershell
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm run dev
```

For a production build:
```powershell
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm run build
npm run start
```

The public pages are direct App Router routes under `app/`; there is intentionally no `(public)` route-group layer.
