# Database Guidelines

## Purpose

This document defines how the database should be designed, modified, and maintained throughout the project.

The database is the foundation of the application.

Every schema change should be intentional, scalable, and backwards compatible whenever possible.

AI assistants must treat database modifications as high-impact changes.

---

# Database Philosophy

The database should always represent the business domain.

Never design tables around UI requirements.

Instead, design around real-world entities and relationships.

The UI can change.

The database should remain stable.

---

# Single Source of Truth

Prisma Schema is the single source of truth.

Never manually edit the database without updating the Prisma schema.

All database changes must originate from Prisma migrations.

---

# Before Modifying the Database

Before making any schema changes, always ask:

1. Is this change actually necessary?
2. Does a similar model already exist?
3. Will this affect existing data?
4. Can this be achieved without changing the schema?
5. Does this introduce unnecessary complexity?

Only proceed after answering these questions.

---

# Relationships

Always prefer explicit relationships.

Every relationship should accurately represent the real-world relationship between entities.

Examples:

One-to-One

```
User
↓

Profile
```

One-to-Many

```
Institution
↓

Users
```

Many-to-Many

```
Users

↕

Courses
```

Avoid unnecessary many-to-many relationships.

If a simpler relationship is sufficient, use it.

---

# Referential Integrity

Every relationship should maintain referential integrity.

Use foreign keys whenever appropriate.

Avoid orphaned records.

Deleting parent records should always be carefully considered.

---

# Cascade Rules

Never automatically use:

```
onDelete: Cascade
```

without first evaluating the consequences.

Prefer protecting data over automatically deleting it.

If cascade behaviour is required, document why.

---

# Naming

Models

Use singular PascalCase.

```
User

Institution

WaitlistEntry
```

Fields

Use camelCase.

```
createdAt

updatedAt

email

firstName
```

IDs

Primary keys should simply be:

```
id
```

Avoid:

```
userIdPrimary

institutionIdentifier
```

unless required.

---

# Timestamps

Every model should include:

```
createdAt

updatedAt
```

Where appropriate.

Use automatic timestamps whenever possible.

---

# Soft Deletes

Prefer soft deletes for important business data.

Instead of permanently deleting records, consider:

```
deletedAt
```

or

```
isDeleted
```

Only permanently delete data when absolutely necessary.

---

# Normalisation

Avoid duplicated information.

Each piece of information should have one owner.

Example:

Bad

```
Institution Name

stored in

Users

Waitlist

Resources

Courses
```

Good

```
Institution

↓

Users reference Institution
```

---

# Avoid Premature Optimisation

Do not introduce:

- unnecessary indexes
- denormalised tables
- caching tables
- complex optimisations

until there is a demonstrated need.

Keep the schema simple.

---

# Migrations

Every schema change should generate a Prisma migration.

Never modify production databases manually.

Migration history should remain clean and understandable.

---

# Data Integrity

Never allow invalid data into the database.

Validate:

- emails
- URLs
- enums
- required fields
- unique fields

before persistence.

Validation should exist at both the application and database levels where appropriate.

---

# Sensitive Data

Never store:

- passwords in plain text
- API keys
- secrets
- tokens
- credentials

Passwords must always be securely hashed.

---

# Nullable Fields

Avoid making fields nullable unless they are genuinely optional.

Every nullable field introduces additional complexity.

---

# Enums

Prefer enums for finite values.

Examples:

```
Role

Status

AccountType
```

Avoid free-text fields for values that belong to a controlled set.

---

# Relationships First

Before creating a new model:

Determine whether the data belongs to an existing model.

Do not create tables simply because a feature exists.

Models should represent business entities.

---

# Performance

Optimise for correctness before performance.

Only introduce:

- indexes
- query optimisation
- denormalisation

after identifying real bottlenecks.

---

# Query Design

Prefer Prisma relations over multiple independent queries.

Avoid N+1 query patterns whenever possible.

Fetch only the data required for the current operation.

---

# Documentation

Whenever the database schema changes:

Update:

- database.md
- architecture.md
- progress.md

Documentation should always match the current schema.

---

# AI Rules

Before modifying any database model, the AI must:

- Read the current Prisma schema.
- Understand all affected relationships.
- Verify that the change does not duplicate existing functionality.
- Explain the impact of the proposed change.
- Avoid destructive migrations unless explicitly instructed.

Never redesign the schema simply because another implementation seems cleaner.

Preserve existing data whenever possible.

---

# Database Integrity

The database should remain:

- Predictable
- Consistent
- Normalised
- Scalable
- Easy to understand

Every table should exist for a clear business reason.

If the purpose of a model cannot be explained in one sentence, its design should be reconsidered.

# Schema Evolution

The schema should evolve incrementally.

Do not attempt to design the entire production database upfront.

Only introduce new models when a feature genuinely requires them.

Prefer extending existing models over repeatedly restructuring the schema.

Large-scale schema refactors should be avoided unless there is a clear architectural benefit.