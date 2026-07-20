# 05_CODEX_MASTER.md

Version: 1.0

Project

Vidura Sanskriti Sangeetalayam

==============================================================================

PROJECT OVERVIEW

==============================================================================

You are an expert software engineer responsible for developing a premium
marketing website for Vidura Sanskriti Sangeetalayam.

The website should feel comparable to modern premium websites such as Apple,
Airbnb, Stripe and Notion while preserving Indian classical culture.

Do not build a template website.

Every section should feel handcrafted.

==============================================================================

PROJECT GOALS

==============================================================================

Primary Goals

• Generate admissions

• Build trust

• Showcase academy

• Improve SEO

• Increase inquiries

Secondary Goals

• Build brand identity

• Increase social media engagement

• Improve Google ranking

==============================================================================

PROJECT STACK

==============================================================================

Framework

Next.js 15

Language

TypeScript

Styling

Tailwind CSS v4

UI Library

shadcn/ui

Icons

Lucide React

Animation

Framer Motion

Smooth Scroll

Lenis

Forms

React Hook Form

Validation

Zod

Images

Next/Image

Deployment

Vercel

==============================================================================

AI ROLE

==============================================================================

Whenever you generate code you must think like

Senior Product Designer

Senior Frontend Engineer

Senior UX Designer

Senior Accessibility Engineer

Senior Performance Engineer

Senior SEO Engineer

Do not generate beginner code.

==============================================================================

PROJECT PRINCIPLES

==============================================================================

Always

Build reusable components

Write clean TypeScript

Avoid duplicate code

Prefer composition

Think mobile first

Optimize images

Optimize performance

Write accessible HTML

Never

Use "any"

Inline massive JSX

Duplicate CSS

Hardcode spacing

Hardcode colors

==============================================================================

PROJECT STRUCTURE

==============================================================================

app/

components/

components/layout/

components/home/

components/about/

components/courses/

components/gallery/

components/contact/

components/common/

components/ui/

hooks/

lib/

types/

constants/

styles/

content/

docs/

public/

images/

videos/

icons/

logos/

patterns/

==============================================================================

COMPONENT ARCHITECTURE

==============================================================================

Every component must

Be reusable

Be typed

Be responsive

Support animations

Accept className

Accept children where applicable

Accept variants

Accept size

Avoid prop drilling

Extract logic into hooks whenever possible.

==============================================================================

FILE NAMING

==============================================================================

Components

PascalCase

Hero.tsx

Navbar.tsx

Footer.tsx

Hooks

camelCase

useScroll.ts

Utilities

camelCase

Assets

kebab-case

course-card.webp

==============================================================================

TYPESCRIPT RULES

==============================================================================

Never use

any

Prefer

interface

Use proper enums where needed

Export shared types

Create

types/

for reusable interfaces.

==============================================================================

REACT RULES

==============================================================================

Prefer Server Components.

Only use Client Components when required.

Avoid unnecessary state.

Memoize expensive calculations.

Use custom hooks.

Avoid deeply nested JSX.

Maximum component size

Approximately 250 lines.

Split large components.

==============================================================================

TAILWIND RULES

==============================================================================

Never use inline styles.

Never use arbitrary values unless unavoidable.

Always use design tokens.

Spacing

Follow 8-point grid.

Typography

Follow Design System.

Colors

Use only approved palette.

==============================================================================

SHADCN/UI RULES

==============================================================================

Reuse existing components.

Customize only through Tailwind.

Avoid modifying library internals.

==============================================================================

NEXT.JS RULES

==============================================================================

Use App Router.

Use Metadata API.

Use Server Components.

Use Route Groups where helpful.

Generate

robots.txt

sitemap.xml

Use Image component.

Use Link component.

==============================================================================

ACCESSIBILITY RULES

==============================================================================

Semantic HTML

Keyboard Navigation

Visible Focus

ARIA Labels

Alt Text

Reduced Motion

Proper Heading Hierarchy

Color Contrast

Touch Targets

48px minimum.

==============================================================================

RESPONSIVE RULES

==============================================================================

Desktop

1440+

Laptop

1024+

Tablet

768+

Mobile

320+

Every component

Stacks gracefully

Maintains spacing

Maintains typography

==============================================================================

PERFORMANCE RULES

==============================================================================

Images

WebP

Lazy Loading

Next/Image

Videos

Poster Image

Lazy Load

Fonts

Self Hosted where possible

Code Splitting

Dynamic Imports

Target

Lighthouse 95+

==============================================================================

ANIMATION PHILOSOPHY

==============================================================================

Animation should

Guide attention

Increase perceived quality

Never distract

Preferred Duration

250–600ms

Hero

800–1200ms

Library

Framer Motion

==============================================================================

GENERAL CODING RULES

==============================================================================

Before writing code

Read all documentation.

Do not assume content.

Do not invent images.

Do not invent academy history.

Use placeholders clearly marked if content is unavailable.

==============================================================================

END OF PART 1

==============================================================================
PART 2
AI DEVELOPMENT WORKFLOW
==============================================================================

WORKFLOW

Every feature should be developed using the following process.

Step 1

Understand the requirement.

Step 2

Read the relevant documentation.

Master Context

↓

Design System

↓

Assets Guide

↓

Component Spec

↓

Page Specification

Step 3

Plan component hierarchy.

Step 4

Build reusable components.

Step 5

Add responsive layouts.

Step 6

Add accessibility.

Step 7

Add animations.

Step 8

Optimize performance.

Step 9

Test.

Step 10

Refactor before considering complete.

==============================================================================

AI DEVELOPMENT RULES

==============================================================================

Always

Think before writing code.

Keep components small.

Prefer composition.

Prefer readability.

Reuse components.

Write semantic HTML.

Optimize for mobile first.

Follow the Design System exactly.

Never

Invent content.

Hardcode colors.

Duplicate layouts.

Ignore accessibility.

Ignore responsive behaviour.

Skip loading states.

==============================================================================

SEO RULES

==============================================================================

Every page requires

Metadata API

Unique title

Meta description

Canonical URL

Open Graph image

Twitter Card

Structured Data

Generate

robots.txt

sitemap.xml

LocalBusiness Schema

Breadcrumb Schema

Optimize

Heading hierarchy

Image alt text

Readable URLs

==============================================================================

IMAGE RULES

==============================================================================

Always use

Next/Image

Use

WebP

AVIF where supported

Responsive sizes

Meaningful alt text

Lazy loading

Never

Stretch images

Use pixelated assets

Upload huge files

==============================================================================

VIDEO RULES

==============================================================================

Hero Video

Autoplay

Muted

Loop

Poster image required

Lazy load videos below the fold.

Maximum recommended hero size

12 MB

==============================================================================

FORM RULES

==============================================================================

Forms

React Hook Form

Validation

Zod

Every form should include

Loading State

Success State

Error State

Validation Messages

Spam Protection

Required Fields Clearly Indicated

==============================================================================

ERROR HANDLING

==============================================================================

Gracefully handle

Broken images

Empty gallery

Missing faculty

No testimonials

Network failures

404 pages

Slow loading

Always provide meaningful fallback UI.

==============================================================================

STATE MANAGEMENT

==============================================================================

Prefer local component state.

Avoid global state unless necessary.

Use Context only when appropriate.

Keep state minimal.

==============================================================================

LOADING STRATEGY

==============================================================================

Skeleton loaders

Course cards

Gallery

Faculty

Lazy load

Images

Videos

Large sections

Use Suspense where appropriate.

==============================================================================

CODE QUALITY CHECKLIST

==============================================================================

Before finishing any feature verify

✓ No TypeScript errors

✓ No ESLint warnings

✓ Responsive

✓ Accessible

✓ Optimized

✓ Reusable

✓ Proper naming

✓ Comments only where needed

==============================================================================

GIT COMMIT STANDARD

==============================================================================

Commit messages

feat: add hero section

feat: build gallery component

fix: resolve navbar overlap

refactor: optimize course cards

style: improve spacing

docs: update specifications

perf: optimize images

Never use vague commits such as

update

changes

fixed

==============================================================================

PULL REQUEST CHECKLIST

==============================================================================

Before merging

✓ Build passes

✓ Lint passes

✓ Components reviewed

✓ Responsive tested

✓ Lighthouse checked

✓ Accessibility checked

✓ SEO verified

==============================================================================

TESTING CHECKLIST

==============================================================================

Desktop

Chrome

Firefox

Edge

Safari

Mobile

Android Chrome

iPhone Safari

Tablet

Portrait

Landscape

Verify

Navigation

Forms

Gallery

Animations

Performance

==============================================================================

DEPLOYMENT CHECKLIST

==============================================================================

Before Deployment

✓ Production build succeeds

✓ Environment variables configured

✓ Images optimized

✓ Metadata verified

✓ Sitemap generated

✓ robots.txt generated

✓ HTTPS enabled

✓ Analytics connected

After Deployment

✓ Check Lighthouse

✓ Check Forms

✓ Check WhatsApp

✓ Check Maps

✓ Check SEO

✓ Check Social Preview

==============================================================================

MASTER PROMPT TEMPLATE
==============================================================================

Whenever implementing a new page, use this prompt:

"You are a Senior Next.js Engineer.

Read all documentation inside the docs folder before writing code.

Follow the Design System exactly.

Create reusable TypeScript components.

Use Tailwind CSS v4.

Use shadcn/ui.

Use Framer Motion.

Use Next/Image.

Optimize for Lighthouse 95+.

Implement only this page.

Do not modify unrelated files.

Return production-ready code."

==============================================================================

COMPONENT PROMPT TEMPLATE
==============================================================================

Whenever implementing a component

Read

03_COMPONENT_SPEC.md

Implement exactly according to specification.

Do not invent styles.

Reuse existing components.

Support

Desktop

Tablet

Mobile

Accessibility

Animations

Dark mode compatibility for future.

==============================================================================

PAGE PROMPT TEMPLATE

==============================================================================

Whenever implementing a page

Read

04_PAGE_SPECIFICATIONS.md

Build every section.

Do not skip any CTA.

Do not skip SEO.

Use reusable components only.

==============================================================================

COMMON MISTAKES TO AVOID

==============================================================================

Don't

Create giant components.

Duplicate cards.

Mix spacing values.

Ignore mobile layouts.

Skip accessibility.

Forget loading states.

Use placeholder images in production.

Forget metadata.

Forget lazy loading.

Forget alt text.

==============================================================================

FINAL AI INSTRUCTIONS

==============================================================================

Treat this project as a premium production website.

Every decision should improve

Readability

Performance

Maintainability

Accessibility

SEO

Animations should be elegant.

Typography should feel premium.

Whitespace should be intentional.

Photography should tell the story.

The final experience should feel comparable to a high-end cultural institution website rather than a generic tuition center.

If documentation conflicts with generated assumptions, documentation always wins.

Never sacrifice code quality for speed.

==============================================================================

PROJECT COMPLETION CRITERIA

==============================================================================

The project is complete only when

✓ Every documented page is implemented

✓ Every documented component exists

✓ Responsive across all devices

✓ Accessibility standards met

✓ Lighthouse Performance ≥95

✓ Lighthouse Accessibility =100

✓ Lighthouse SEO ≥95

✓ Lighthouse Best Practices =100

✓ Images optimized

✓ Videos optimized

✓ SEO configured

✓ Forms working

✓ Analytics connected

✓ Domain deployed

✓ Client approved

==============================================================================

END OF DOCUMENT

05_CODEX_MASTER.md

Version 1.0

END OF PROJECT DOCUMENTATION