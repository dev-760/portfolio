---
name: Hassan Karasu Portfolio
description: Business administration student portfolio with disciplined editorial typography, navy/sky palette, and fluid motion
colors:
  primary: "#0F172A"
  primary-container: "#0369A1"
  on-primary: "#FFFFFF"
  primary-fixed: "#E0F2FE"
  on-primary-fixed: "#0369A1"
  secondary: "#334155"
  on-secondary: "#FFFFFF"
  accent: "#0369A1"
  surface: "#F8FAFC"
  surface-container: "#F1F5F9"
  surface-container-low: "#F8FAFC"
  surface-container-lowest: "#FFFFFF"
  on-surface: "#020617"
  on-surface-variant: "#475569"
  outline: "#64748B"
  outline-variant: "#E2E8F0"
typography:
  display:
    fontFamily: "Poppins, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Open Sans, sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Poppins, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Open Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Open Sans, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.05em"
  caption:
    fontFamily: "Open Sans, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.06em"
rounded:
  sm: "6px"
  default: "8px"
  lg: "10px"
  xl: "12px"
  2xl: "16px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  2xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xl}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface-variant}"
    rounded: "{rounded.xl}"
    padding: "10px 16px"
---

# Design System: Hassan Karasu Portfolio

## Overview

**Creative North Star: "The Disciplined Analyst's Ledger"**

The visual world of Hassan Karasu's portfolio embodies the quiet confidence, intellectual rigor, and empirical precision of modern business administration. Inspired by high-end financial institutions, architectural journals, and contemporary academic monographs, the interface balances crisp quantitative structures with generous editorial whitespace.

Rather than decorative excess or novelty software gradients, the site relies on authentic contrast, precise typography steps, tactile cards with purposeful elevation, and a controlled oceanic palette anchored in deep midnight navy and luminous sky blue.

**Key Characteristics:**
- Deep Navy and Sky Blue palette signaling institutional discipline and clear direction.
- Open Sans and Poppins pairing delivering clean legibility and balanced authority.
- Tactile, single-elevation surfaces with soft diffuse borders over harsh drop shadows.
- Smooth spring-driven scroll tracking with cohesive easing across all interactive surfaces.

## Colors

The palette is anchored in deep midnight slate, crisp atmospheric neutrals, and decisive sky blue accents.

### Primary
- **Midnight Slate** (#0F172A): Used for authoritative headlines, primary CTA buttons, and foundational dark-mode surfaces.
- **Deep Sky Blue** (#0369A1): Used for active highlights, focus rings, and primary interactive links.

### Secondary
- **Slate Steel** (#334155): Used for secondary labels, subheading emphasis, and subtle border accents.

### Neutral
- **Off-White Paper** (#F8FAFC): Canvas surface providing natural paper-like reading atmosphere.
- **Surface Container** (#F1F5F9): Subtle contrast backdrop for cards, modules, and pill controls.
- **Deep Midnight** (#020617 / #0F172A): Ink-black text in light mode, deep background in dark mode.
- **Muted Slate Ink** (#475569 / #CBD5E1): Body prose providing 7.2:1+ contrast against light surfaces.
- **Border Outline** (#E2E8F0 / #334155): 1px structural framing for cards, inputs, and section dividers.

### Named Rules
**The Single Elevation Rule.** Surfaces declare elevation once through either a subtle 1px border or a soft diffuse shadow, never combining heavy borders with wide harsh drop shadows.

**The No-Gradient-Text Rule.** Text emphasis is communicated purely through font weight, scale, and semantic tinting, never through decorative text clipping or multi-color gradients.

## Typography

**Display Font:** Poppins (sans-serif)
**Body Font:** Open Sans (sans-serif)
**Label/Mono Font:** Font-mono / Open Sans with tabular numerals

**Character:** A pairing that communicates clarity, organization, and academic rigor without becoming sterile or bureaucratic.

### Hierarchy
- **Display** (800 weight, clamp(2.25rem, 5vw, 3.75rem), 1.08 line-height): Hero headline and major editorial statements.
- **Headline** (700 weight, 1.875rem–2.5rem, 1.2 line-height): Section titles that speak with direct clarity.
- **Title** (600–700 weight, 1.25rem–1.5rem, 1.3 line-height): Card headers, milestone roles, and monograph titles.
- **Body** (400 weight, 1rem / 16px, 1.6 line-height): Narrative bios and essay paragraphs with optimal 65–75ch line length.
- **Label** (600 weight, 0.75rem / 12px, uppercase with 0.05–0.14em tracking): Category tags, coordinates, and section metadata.
- **Caption / Micro** (600 weight, 0.6875rem / 11px, tabular numerals, 0.06em tracking): Status badges, filter tags, and dense tabular metadata. Minimum functional text floor.

### Named Rules
**The Heading Authority Rule.** Headings speak for themselves without repetitive numbering or kicker tags placed above them.

## Layout

A responsive 12-column architectural grid with a maximum container width of 80rem (1280px) and 1.5rem (24px) horizontal padding. Sections maintain generous vertical cadence (5rem–6rem / 80px–96px padding) to establish comfortable visual pauses between distinct domains of study and experience.

## Elevation & Depth

Surfaces rely on tonal layering and refined border outlines (`border-outline-variant/60`) rather than stark drop shadows. When shadows are used on interactive cards, they use soft diffuse blurs (`shadow-xs` / `shadow-sm`) with a 1–2px Y-offset.

### Named Rules
**The Calm Surface Rule.** Ambient states remain quiet and level; depth is a subtle reaction to user focus or interaction, never ambient noise.

## Shapes

Card radii stay consistently at 8px (`rounded-lg`) to 16px (`rounded-2xl`) for comfortable organic containment. Small status pills and interactive buttons employ pill forms (`rounded-full` or `rounded-xl`).

## Components

### Buttons
- **Shape:** Softly curved corners (8px–12px radius)
- **Primary:** Midnight Navy (#0F172A) background, white text, 12px 24px padding with sharp ease transition.
- **Secondary:** Surface container background, slate text, subtle border outline.

### Cards / Containers
- **Corner Style:** 12px–16px radius (`rounded-xl` / `rounded-2xl`).
- **Background:** Lowest surface (#FFFFFF light / #0B1120 dark) with 1px border outline.
- **Padding:** 1.5rem–2.5rem responsive internal padding.

### Inputs / Fields
- **Style:** Surface background with 1px outline border, 12px radius, 14px padding.
- **Focus:** 2px solid primary ring with offset.

### Navigation
- **Header:** Sticky translucent header with blur backdrop, SVG logo, and centered pill track.
- **Gooey Nav:** Sliding active pill indicator behind legible links, smooth spring transitions.

## Do's and Don'ts

### Do:
- **Do** maintain a minimum contrast ratio of 4.5:1 on all body text and 3:1 on large headings in both light and dark modes.
- **Do** align tabular figures and dates using tabular numerals (`font-variant-numeric: tabular-nums`).
- **Do** allow section headings to speak on their own without redundant kicker labels.
- **Do** respect the user's `prefers-reduced-motion` settings.

### Don't:
- **Don't** use multi-color gradient text clipping.
- **Don't** add decorative colored left borders (`border-l-4`) to simulate callout boxes.
- **Don't** use monospace typography as a costume for standard form labels or navigation.
- **Don't** combine thick dark borders with heavy drop shadows.
