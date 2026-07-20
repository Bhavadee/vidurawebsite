# 03_COMPONENT_SPEC.md

Version: 1.0

Project
Vidura Sanskriti Sangeetalayam

Purpose

This document defines every reusable UI component used throughout the website.

Every component must follow the Design System and Master Context.

==============================================================================
COMPONENT 01
NAVBAR
==============================================================================

Purpose

Provide clear navigation while reinforcing the academy's brand identity.

Position

Sticky Top

Desktop Height

80px

Mobile Height

64px

Background

Initially Transparent

On Scroll

Blur Background

White/Ivory Background

Shadow SM

Desktop Layout

--------------------------------------------------

Logo

↓

Navigation Links

↓

Enroll Button

--------------------------------------------------

Navigation Items

Home

About

Courses

Gallery

Events

Contact

Enroll Now

Maximum Links

7

Logo

Left aligned

Navigation

Centered

CTA

Right aligned

Mobile Layout

Logo

↓

Hamburger Icon

↓

Slide Drawer

Drawer Width

80%

Drawer Animation

Slide From Right

Drawer Contents

Logo

Navigation Links

Social Icons

WhatsApp Button

Close Button

Active Link

Underline

Maroon Color

Hover

Underline Animation

Color Transition

Cursor Pointer

Transitions

250ms

Accessibility

Keyboard Navigation

Focus Ring

ARIA Labels

Escape closes menu

Tab Navigation

Animations

Initial Fade

Scroll Background Transition

Menu Slide

Link Underline

Acceptance Criteria

✓ Sticky

✓ Responsive

✓ Accessible

✓ Keyboard Friendly

✓ Smooth Scroll

✓ Active Section Highlight

==============================================================================
COMPONENT 02
HERO SECTION
==============================================================================

Purpose

Create immediate emotional impact.

Goal

Build trust within 5 seconds.

Height

100vh

Layout

Centered

Background

Preferred

Real Academy Video

Fallback

Hero Image

Overlay

Dark Gradient

Contents

Headline

Subheading

Primary CTA

Secondary CTA

Scroll Indicator

Optional Badge

Headline

Maximum

2 Lines

Subheading

Maximum

3 Lines

Primary CTA

Book Trial Class

Secondary CTA

Explore Courses

Desktop Layout

Video

↓

Overlay

↓

Headline

↓

Description

↓

Buttons

↓

Scroll Indicator

Tablet

Maintain layout

Reduce typography

Mobile

Stack vertically

Buttons full width

Animation

Background Slow Zoom

Headline Fade Up

Description Fade Up

Buttons Scale In

Scroll Indicator Bounce

Performance

Video Lazy Loaded

Poster Image Required

Accessibility

Pause animation when reduced motion is enabled

Acceptance Criteria

Loads under 2 seconds

CTA visible without scrolling

Readable on all devices

==============================================================================
COMPONENT 03
SECTION HEADER
==============================================================================

Purpose

Introduce every major section.

Structure

Small Label

↓

Heading

↓

Description

↓

Section Content

Maximum Width

720px

Alignment

Center

Alternative

Left

Typography

Label

14px

Heading

48px

Description

20px

Spacing

Label → Heading

16px

Heading → Description

24px

Description → Content

48px

Animation

Fade Up

Accessibility

Heading hierarchy maintained

Acceptance Criteria

Consistent spacing

Readable

Responsive

==============================================================================
COMPONENT 04
BUTTONS
==============================================================================

Purpose

Primary user interaction.

Variants

Primary

Secondary

Ghost

Icon Button

Text Button

Primary Button

Background

Deep Maroon

Text

White

Radius

14px

Padding

16 x 28

Hover

Lift

Scale 1.02

Shadow Increase

Transition

250ms

Secondary

Transparent

Border

Maroon

Hover

Filled

Ghost

Transparent

Underline

Icon Button

Circular

48px

States

Default

Hover

Active

Focused

Disabled

Loading

Accessibility

Minimum Touch Target

48px

Visible Focus

Keyboard Friendly

Acceptance Criteria

Smooth hover

Accessible

Responsive

==============================================================================
COMPONENT 05
TRUST STATISTICS
==============================================================================

Purpose

Increase credibility.

Layout

Four Cards

Desktop

4 Columns

Tablet

2 x 2

Mobile

Single Column

Each Card Contains

Icon

Animated Number

Title

Optional Description

Example

500+

Students

100+

Performances

25+

Awards

10+

Years Experience

Animation

Count Up

Fade

Stagger

Duration

1 second

Accessibility

Numbers readable

Icons decorative only

Acceptance Criteria

Animation triggers once

Responsive

High contrast

==============================================================================
COMMON RULES FOR ALL COMPONENTS
==============================================================================

Every component must

✓ Be reusable

✓ Use TypeScript interfaces

✓ Support dark future expansion

✓ Be mobile first

✓ Follow spacing system

✓ Follow typography system

✓ Use color tokens only

✓ Use Framer Motion

✓ Respect prefers-reduced-motion

✓ Pass Lighthouse accessibility

✓ Pass responsive testing

==============================================================================
GLOBAL COMPONENT PROPS STANDARD
==============================================================================

Every component should support

className

id

children (where applicable)

animation

variant

size

theme

responsive

Every prop must be typed.

Avoid "any".

==============================================================================
END OF PART 1







==============================================================================
PART 2
CONTENT COMPONENTS
==============================================================================

COMPONENT 06
ABOUT SECTION
==============================================================================

Purpose

Introduce the academy's story, values, and philosophy.

Goal

Help parents understand the academy before exploring courses.

Layout

Desktop

Two Column Layout

Left

Large Image

Right

Heading

Description

Mission

Vision

CTA Button

Tablet

Image Top

Content Bottom

Mobile

Single Column

Centered

Content

Small Label

Heading

Two Paragraphs

Mission

Vision

Read More Button

Image Requirements

Real classroom

Teacher interaction

Students learning

Animation

Image Reveal

Fade Up

Text Fade

CTA Slide Up

Acceptance Criteria

✓ Easy to read

✓ Mobile friendly

✓ Real academy photography

✓ CTA visible

==============================================================================

COMPONENT 07
FOUNDER SECTION
==============================================================================

Purpose

Build credibility through the founder.

Layout

Desktop

Split Layout

Left

Founder Portrait

Right

Biography

Experience

Teaching Philosophy

Signature

CTA

Tablet

Portrait Top

Text Bottom

Mobile

Stacked

Portrait

↓

Content

Founder Card Includes

Photo

Full Name

Designation

Experience

Quote

Signature

CTA

Meet Faculty

Animation

Portrait Fade

Text Slide Up

Signature Fade

Accessibility

Alt Text

Semantic Heading

Acceptance Criteria

✓ Professional portrait

✓ Authentic content

✓ Responsive

==============================================================================

COMPONENT 08
FACULTY SECTION
==============================================================================

Purpose

Showcase teachers and their expertise.

Desktop

3 Column Grid

Tablet

2 Columns

Mobile

1 Column

Faculty Card

Photo

Name

Specialization

Years Experience

Short Bio

Learn More

Hover

Lift

Image Zoom

Shadow

Animation

Fade Up

Stagger

Acceptance Criteria

✓ Equal card height

✓ Responsive

✓ Consistent spacing

==============================================================================

COMPONENT 09
COURSES SECTION
==============================================================================

Purpose

Introduce all available courses.

Desktop

Grid

Tablet

2 Columns

Mobile

Single Column

Section Includes

Heading

Description

Course Cards

CTA

View All Courses

Animation

Fade

Cards Stagger

CTA Scale

Acceptance Criteria

✓ All courses visible

✓ Responsive

✓ Clear CTA

==============================================================================

COMPONENT 10
COURSE CARD
==============================================================================

Purpose

Represent an individual course.

Card Includes

Course Image

Course Name

Short Description

Duration (Optional)

Age Group

Learn More Button

Desktop Width

320–400px

Hover

Lift

Image Zoom

Arrow Slide

Shadow Increase

Mobile

Full Width

Accessibility

Entire card keyboard accessible

Acceptance Criteria

✓ Same height

✓ Responsive

✓ Reusable

==============================================================================

COMPONENT 11
STUDENT JOURNEY TIMELINE
==============================================================================

Purpose

Visualize the student's learning path.

Timeline Steps

Join Academy

↓

Learn Basics

↓

Practice

↓

Perform

↓

Compete

↓

Graduate

Desktop

Horizontal Timeline

Tablet

Horizontal Scroll

Mobile

Vertical Timeline

Each Step Includes

Icon

Title

Short Description

Animation

Line Draw

Icon Pop

Fade Up

Hover

Glow

Accessibility

Readable order

Keyboard friendly

Acceptance Criteria

✓ Smooth animation

✓ Responsive

✓ Easy to understand

==============================================================================

COMMON RULES FOR CONTENT COMPONENTS
==============================================================================

Every section must include

Heading

Description

Primary CTA (where applicable)

Consistent spacing

Responsive layout

Smooth animations

Every image

Real academy preferred

Optimized

Alt text required

Typography

Follow Design System

Spacing

Follow 8-point grid

Animation

Framer Motion

Performance

Lazy load images

Avoid layout shift

==============================================================================

END OF PART 2


==============================================================================
PART 3
ADVANCED COMPONENTS
==============================================================================

COMPONENT 12
GALLERY
==============================================================================

Purpose

Showcase academy life through authentic visuals.

Goals

• Build trust
• Display student activities
• Showcase performances
• Highlight academy environment

Desktop

4-column masonry grid

Tablet

3 columns

Mobile

2 columns

Features

Category Filters

All

Classroom

Performances

Competitions

Annual Day

Workshops

Awards

Hover

Image Zoom

Dark Overlay

View Icon

Click

Opens Lightbox

Navigation

Previous

Next

Keyboard

Arrow Keys

Esc closes

Animation

Fade In

Stagger Cards

Image Scale

Performance

Lazy Load Images

Infinite Scroll (optional)

Acceptance Criteria

✓ Smooth scrolling
✓ Optimized images
✓ Fast lightbox
✓ Mobile friendly

==============================================================================

COMPONENT 13
ACHIEVEMENTS
==============================================================================

Purpose

Display academy accomplishments.

Layout

Responsive Grid

Card Includes

Achievement Image

Title

Year

Description

Optional Medal Icon

Hover

Lift

Shadow

Scale Image

Animation

Fade Up

Acceptance Criteria

✓ Equal card heights
✓ Responsive
✓ Readable

==============================================================================

COMPONENT 14
TESTIMONIALS
==============================================================================

Purpose

Build trust using real parent and student feedback.

Desktop

Carousel

Tablet

Carousel

Mobile

Single Card

Card Includes

Photo

Name

Role

Review

Rating

Optional Video

Controls

Auto Play

Pause on Hover

Previous

Next

Pagination Dots

Animation

Slide

Fade

Scale

Accessibility

Keyboard Navigation

Screen Reader Labels

Acceptance Criteria

✓ Smooth autoplay
✓ Responsive
✓ Accessible

==============================================================================

COMPONENT 15
FAQ
==============================================================================

Purpose

Answer common questions.

Layout

Accordion

Item Includes

Question

Answer

Chevron Icon

Behavior

Only one open by default

Click

Expand

Animation

Height Transition

Chevron Rotate

Accessibility

ARIA Expanded

Keyboard Support

Acceptance Criteria

✓ Smooth expansion
✓ Accessible
✓ Mobile friendly

==============================================================================

COMPONENT 16
CONTACT FORM
==============================================================================

Purpose

Generate inquiries.

Fields

Full Name

Phone Number

Email (Optional)

Course Interested

Message

Buttons

Submit

WhatsApp

Validation

Required Fields

Phone Pattern

Inline Errors

Success State

Confirmation Message

Loading Spinner

Accessibility

Labels

Tab Order

Focus Ring

Acceptance Criteria

✓ Validation works
✓ Mobile friendly
✓ Success confirmation

==============================================================================

COMPONENT 17
GOOGLE MAP
==============================================================================

Purpose

Help visitors locate academy.

Features

Embedded Map

Directions Button

Open in Google Maps

Responsive

Desktop

600px Height

Tablet

450px

Mobile

350px

Acceptance Criteria

✓ Loads correctly
✓ Responsive
✓ Directions available

==============================================================================

COMPONENT 18
FOOTER
==============================================================================

Layout

Four Columns

Column 1

Logo

Academy Description

Column 2

Quick Links

Column 3

Courses

Column 4

Contact Details

Bottom Bar

Copyright

Privacy Policy

Terms

Social Icons

Instagram

Facebook

YouTube

WhatsApp

Hover

Icon Scale

Color Change

Acceptance Criteria

✓ Responsive
✓ Accessible
✓ Organized

==============================================================================

COMPONENT 19
FLOATING WHATSAPP BUTTON
==============================================================================

Position

Bottom Right

Desktop

32px Margin

Mobile

20px Margin

Behavior

Always Visible

Hide only at Footer (optional)

Click

Open WhatsApp Chat

Animation

Float

Pulse every 10 seconds

Hover

Scale

Accessibility

ARIA Label

Acceptance Criteria

✓ Doesn't block content
✓ Easy to tap
✓ Responsive

==============================================================================

COMPONENT 20
BACK TO TOP BUTTON
==============================================================================

Visibility

After 400px Scroll

Position

Bottom Right

Above WhatsApp Button

Behavior

Smooth Scroll to Top

Animation

Fade In

Fade Out

Hover Lift

Acceptance Criteria

✓ Smooth scroll
✓ Keyboard accessible

==============================================================================

COMPONENT 21
LOADING SCREEN
==============================================================================

Purpose

Create premium first impression.

Contents

Academy Logo

Loading Indicator

Simple Tagline

Duration

Maximum

2 Seconds

Animation

Fade

Scale

Logo Reveal

Acceptance Criteria

✓ Doesn't delay loading
✓ Skippable when page cached

==============================================================================

COMPONENT 22
PAGE TRANSITIONS
==============================================================================

Library

Framer Motion

Transition

Fade

Slide

Duration

300ms

Behavior

Between Route Changes

Accessibility

Disable with prefers-reduced-motion

Acceptance Criteria

✓ No layout shift
✓ Smooth navigation

==============================================================================

GLOBAL RESPONSIVE RULES
==============================================================================

Desktop

>=1024px

Tablet

768–1023px

Mobile

320–767px

Every component must adapt gracefully.

==============================================================================

GLOBAL ACCESSIBILITY RULES
==============================================================================

All images require alt text.

Keyboard navigation required.

Visible focus states required.

ARIA attributes where applicable.

Contrast ratio must meet WCAG AA.

Support prefers-reduced-motion.

==============================================================================

GLOBAL PERFORMANCE RULES
==============================================================================

Lazy load images.

Optimize videos.

Use Next/Image.

Minimize bundle size.

Avoid unnecessary re-renders.

==============================================================================

FINAL ACCEPTANCE CHECKLIST
==============================================================================

✓ Responsive

✓ Accessible

✓ SEO Friendly

✓ Reusable

✓ TypeScript Typed

✓ Animation Consistent

✓ Design System Compliant

✓ Mobile Optimized

✓ Lighthouse Ready

==============================================================================

END OF 03_COMPONENT_SPEC.md
Version 1.0