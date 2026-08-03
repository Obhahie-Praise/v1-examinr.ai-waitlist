# Build — Admin Dashboard & Settings

Before making any changes, read and understand **all existing context files in `/docs`** and follow every project protocol.

Especially read:

- `AGENTS.md`
- `database.md`
- `ui.md`
- `animations.md`
- `project_architecture.md`
- `code-standards.md`
- `ai-workflow-rules.md`
- `routes.md`
- `progress.md`

Use **pnpm**.

This is a functional implementation, not a mockup. Use the real Prisma database and existing waitlist data.

---

## 1. Admin Layout

Create a shared layout for:

- `/admin`
- `/admin/settings`

The layout should have:

### Sidebar

A simple vertical sidebar containing:

- Examinr.ai logo
- Overview → `/admin`
- Settings → `/admin/settings`

The current page should have a clear active state.

### Main Content

The right side contains the content of the current page.

Keep the admin interface clean, minimal, and consistent with the existing Examinr design system.

Make the layout responsive.

---

# 2. Admin Authentication

Protect the entire `/admin` route.

Create a simple password-protected admin entry screen.

The password must come from:

```env
ADMIN_PASSWORD=

Add only a placeholder to .env.example.

Never hardcode the password in the source code.

Do not expose the password to the client.

Do not store the password in:

localStorage
sessionStorage
client-side state
Session

After successful authentication, create a secure admin session that lasts:

48 hours per device.

The admin should not need to log in again during those 48 hours.

After the session expires, require the password again.

Both:

/admin
/admin/settings

must be protected.

Any server-side admin action must independently verify that the user has a valid admin session.

3. /admin Dashboard

The main admin page should contain three major areas:

Metrics
Analytics
Waitlist users
Metrics

At the top, create three metric cards.

Total Users

Show the total number of waitlist users.

Use the actual database count.

Acquisition Rate

Show the rate at which new users are joining the waitlist.

Use actual database data.

Keep the calculation meaningful and consistent. Do not display a fake percentage simply to make the card look impressive.

Highest UTM Source

Show the utm source that has generated the most waitlist signups.

Remember:

We only use the utm parameter.

Do not introduce:

utm_source
utm_medium
utm_campaign
referral codes
any additional attribution system

If no UTM data exists, display an appropriate empty state such as:

No source data

4. Analytics

Under the metric cards, create two large cards side-by-side on desktop.

Left — Waitlist Growth

Create a smooth curved line graph showing the growth of the waitlist over time.

Use actual createdAt data from Prisma.

The graph should show:

Date/time on the X-axis
Number of joins on the Y-axis
Waitlist growth as a smooth curved line
Important

There should be:

No date filters
No date range selector
No unnecessary controls

Just the graph.

If there is not enough data yet, show a beautiful empty state instead of breaking the chart.

Right — Acquisition Sources

Create another curved line graph showing the different UTM sources over time.

Each unique utm source should have its own line.

For example, if the database contains:

instagram
whatsapp
twitter

the graph should automatically show those sources.

Do not hardcode source names.

Include a simple legend so users can understand which line belongs to which source.

The graph should show how each source contributes to waitlist growth over time.

5. Waitlist Users

Below the analytics, create the main waitlist users section.

It should contain:

Section heading
Export button
Functional table
Pagination
Row selection
Bulk actions
Table

Keep the table simple and beautiful.

Display relevant fields from the current waitlist schema.

At minimum:

Email
UTM
Joined
Position
Important

There must be NO name column.

We only collect the user's email and UTM attribution.

Do not add unnecessary fields.

6. Waitlist Position

The position should represent where the user currently sits in the waitlist based on signup order.

Use the existing signup timestamp/database ordering.

Do not create unnecessary duplicated position data if it can be calculated reliably from the existing records.

The position must be based on the entire waitlist, not just the currently visible page.

7. Pagination

The table must use real pagination.

Do not fetch the entire waitlist into the browser just to paginate it.

Provide:

Previous
Next
Current page
Total pages / useful pagination information

Keep the number of records loaded per page reasonable.

8. Selection & Bulk Actions

Allow users to:

Select an individual user
Select multiple users
Select all visible users
Clear selection

When users are selected, show an appropriate bulk-action area.

At minimum:

Delete selected

9. Deletion

Support:

Individual deletion

Allow an admin to delete one waitlist user.

Bulk deletion

Allow the admin to delete all selected users in one operation.

Bulk deletion must have a confirmation step.

The confirmation should clearly communicate:

How many users will be deleted
That deletion is permanent
Cancel
Confirm deletion

Do not make accidental deletion easy.

After deletion, update:

Table
Metrics
Graphs
Relevant pagination state

Do not require a full browser reload.

10. Export

Add an Export button to the waitlist section.

Export the actual waitlist data as CSV.

Include useful fields such as:

Email
UTM
Joined
Position

Do not export sensitive internal information or authentication data.

The export must use the real database.

It must also be protected by admin authentication.

11. /admin/settings

Keep this page intentionally simple.

For now, it should only display hardcoded administrator information.

No actual settings functionality is needed.

It can contain information such as:

Administrator
Role
Project
Session duration

Do not create:

Password editing
Account settings
Notification settings
Fake toggles
Database settings
Unnecessary controls

This is simply a placeholder for future admin functionality.

12. Data & Architecture

Use the existing:

Prisma setup
Waitlist schema
Database connection
Project architecture

Do not introduce another ORM or database layer.

Keep database operations on the server.

Do not import Prisma into Client Components.

Use server-side data fetching and mutations where appropriate.

Do not use mock data anywhere in the final implementation.

13. Performance

Keep the dashboard fast.

Paginate waitlist data server-side.
Aggregate analytics data server-side where practical.
Do not fetch the entire waitlist unnecessarily.
Do not run expensive queries on every render.
Avoid unnecessary client-side state.
Avoid unnecessary browser reloads.
Do not cause the charts to re-render excessively.

The dashboard should remain responsive even as the waitlist grows.

14. Responsive Design

Desktop:

Sidebar on the left
Main content on the right
Metric cards in one row
Analytics cards side-by-side
Table below

Tablet:

Reduce spacing appropriately.
Analytics cards may stack if necessary.

Mobile:

Sidebar should adapt appropriately.
Metric cards stack.
Analytics cards stack.
Table remains usable.
Actions remain accessible.
Avoid page-wide horizontal overflow.

A wide table may have its own horizontal scrolling area rather than breaking the entire page.

15. UI & Animation

Follow the existing ui.md and animations.md.

The admin interface should feel like Examinr.ai, but remain more functional and information-focused than the public landing page.

Use subtle animations for:

Card entrance
Table interactions
Modal appearance
Loading states
Hover states

Do not over-animate the dashboard.

Performance and clarity come first.

16. Security

Make sure:

ADMIN_PASSWORD is never exposed to the browser.
The password is never stored client-side.
Protected routes cannot be accessed without a valid session.
Admin mutations verify authentication server-side.
Export verifies authentication server-side.
User IDs are validated before deletion.
Database errors are not exposed directly to the user.
No sensitive environment variables are sent to the client.
17. Verification

Before finishing:

Authentication
Test incorrect password.
Test correct password.
Test session persistence.
Verify 48-hour expiry configuration.
Test direct access to protected routes.
Dashboard
Verify all three metrics use real database data.
Verify growth graph.
Verify UTM graph.
Verify empty states.
Table
Verify pagination.
Verify row selection.
Verify select-all.
Verify individual deletion.
Verify bulk deletion.
Verify confirmation.
Verify export.
Settings
Verify /admin/settings is protected.
Verify static information renders correctly.
Technical

Run:

pnpm lint

Then:

pnpm build

Also run the project's existing type-check command if one exists.

Check for:

TypeScript errors
Runtime errors
Hydration errors
Prisma errors
Authentication errors
Browser console errors

Do not leave known errors unresolved.

Finally, update:

/docs/progress.md

with everything completed.