# Waitlist UTM Source Adjustment

Before making changes, read and follow all existing project protocols and the relevant files in `/docs`.

## Objective

Update the existing waitlist flow so it recognizes a single URL parameter:

`?utm=`

This is the **only attribution parameter** we are using.

### Behaviour

When a visitor arrives with:

`/...?utm=instagram`

the application should read:

`instagram`

and associate that value with the user's waitlist submission.

For example:

`https://examinr-ai.vercel.app/?utm=instagram`

→ `utm = "instagram"`

If the visitor arrives without the parameter:

`https://examinr-ai.vercel.app/`

then the stored UTM value should be `null`.

## Submission

When the user submits their email:

- Save the UTM value alongside the waitlist record.
- If no `utm` parameter exists, save `null`.
- Preserve the existing email submission flow.
- Do not ask the user for the source manually.
- Do not add referral codes.
- Do not introduce `utm_source`.
- Do not add `utm_medium`, `utm_campaign`, `utm_content`, or `utm_term`.

## Persistence

The UTM value should remain available throughout the waitlist signup flow so that it is not lost if the user interacts with the page before submitting.

Do not overwrite an existing captured value with `null`.

## Important

This is an adjustment to the **existing waitlist system**, not a new attribution system.

Do not modify:

- The waitlist UI
- The form layout
- The success modal
- The email collection flow
- Existing database fields unrelated to UTM
- Existing authentication or routing

Only implement the required `?utm=` capture and persistence.

After implementation:

1. Test with a URL containing `?utm=instagram`.
2. Confirm `instagram` is stored correctly.
3. Test without `?utm=`.
4. Confirm `null` is stored.
5. Verify the existing waitlist flow still works.
6. Verify the production build.
7. Update `/docs/progress.md`.