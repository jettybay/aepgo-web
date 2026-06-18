## TODO - Missing App Structure

- [x] Create route files:
  - [x] app/(auth)/login/page.tsx
  - [x] app/(auth)/signup/page.tsx
  - [x] app/(auth)/otp/page.tsx
  - [x] app/dashboard/page.tsx
- [x] Replace app/page.tsx to redirect to /dashboard

- [x] Add reusable layout components:
  - [x] components/layout/Sidebar.tsx
  - [x] components/layout/Header.tsx
- [x] Ensure requested folders exist:
  - [x] components/ui/
  - [x] lib/
  - [x] types/
- [x] Add minimal markup/styling for dashboard/auth pages so app renders
- [ ] Run checks:
  - [x] npm run lint
  - [x] npm run build

## TODO - Mobile bottom tabs

- [x] Implement mobile bottom tab bar inside `components/layout/Sidebar.tsx`
- [x] Add mobile padding-bottom in `app/dashboard/page.tsx` to avoid overlap with fixed bar
- [x] Run lint/build to verify



