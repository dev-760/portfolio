---
name: Hassan Karasu Portfolio
description: Business administration student portfolio with disciplined editorial typography, monochrome/terracotta palette, and fluid motion
colors:
  primary: "#1A1A1A"
  primary-container: "#F2F2F0"
  on-primary: "#FFFFFF"
  primary-fixed: "#EFECE6"
  on-primary-fixed: "#1A1A1A"
  secondary: "#4A4A4A"
  on-secondary: "#FFFFFF"
  accent: "#B33A1F"
  surface: "#F9F9F8"
  surface-container: "#F2F2F0"
  surface-container-low: "#F9F9F8"
  surface-container-lowest: "#FFFFFF"
  on-surface: "#111111"
  on-surface-variant: "#666666"
  outline: "#888888"
  outline-variant: "#E5E5E3"
typography:
  display:
    fontFamily: "Newsreader, serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Newsreader, serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.05em"
  caption:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.06em"
rounded:
  default: "0.125rem"
  lg: "0.25rem"
  xl: "0.5rem"
  full: "9999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "3rem"
  2xl: "4rem"
---

# Design System: Hassan Karasu Portfolio

## Overview

**Creative North Star: "The Disciplined Analyst's Ledger"**

The visual world of Hassan Karasu's portfolio embodies the quiet confidence, intellectual rigor, and empirical precision of modern business administration. Inspired by high-end financial institutions, architectural journals, and contemporary academic monographs, the interface balances crisp quantitative structures with generous editorial whitespace.

Rather than decorative excess or novelty software gradients, the site relies on authentic contrast, precise typography steps, tactile cards with purposeful elevation, and a controlled monochrome palette anchored in deep charcoal and muted rust (terracotta).

**Key Characteristics:**
- Deep Charcoal and Off-White palette signaling institutional discipline and clear direction.
- Newsreader and Manrope pairing delivering editorial elegance and modern clarity.
- Tactile, single-elevation surfaces with soft diffuse borders over harsh drop shadows.
- Smooth spring-driven scroll tracking with cohesive easing across all interactive surfaces.

## Colors

The palette is anchored in deep charcoal, crisp atmospheric neutrals, and decisive terracotta accents.

### Primary
- **Deep Charcoal** (#1A1A1A): Used for authoritative headlines, primary CTA buttons, and foundational dark-mode surfaces.
- **Terracotta / Rust** (#B33A1F): Used for active highlights, focus rings, and primary interactive links.

### Secondary
- **Slate Steel** (#4A4A4A): Used for secondary labels, subheading emphasis, and subtle border accents.

### Neutral
- **Off-White Paper** (#F9F9F8): Canvas surface providing natural paper-like reading atmosphere.
- **Surface Container** (#F2F2F0): Subtle contrast backdrop for cards, modules, and pill controls.
- **Deep Midnight** (#111111): Ink-black text in light mode, deep background in dark mode.
- **Muted Slate Ink** (#666666): Body prose providing contrast against light surfaces.
- **Border Outline** (#E5E5E3): 1px structural framing for cards, inputs, and section dividers.

### Named Rules
**The Single Elevation Rule.** Surfaces declare elevation once through either a subtle 1px border or a soft diffuse shadow, never combining heavy borders with wide harsh drop shadows.

**The No-Gradient-Text Rule.** Text emphasis is communicated purely through font weight, scale, and semantic tinting, never through decorative text clipping or multi-color gradients.

## Typography

**Display Font:** Newsreader (serif)
**Body Font:** Manrope (sans-serif)
**Label/Mono Font:** Font-mono / Manrope with tabular numerals

**Character:** A pairing that communicates clarity, organization, and academic rigor without becoming sterile or bureaucratic.

### Hierarchy
- **Display** (400 weight, clamp(2.25rem, 5vw, 3.75rem), 1.08 line-height): Hero headline and major editorial statements.
- **Headline** (400 weight, 1.875rem–2.5rem, 1.2 line-height): Section titles that speak with direct clarity.
- **Title** (600–700 weight, 1.25rem–1.5rem, 1.3 line-height): Card headers, milestone roles, and monograph titles.
- **Body** (400 weight, 1rem / 16px, 1.6 line-height): Narrative bios and essay paragraphs with optimal 65–75ch line length.
- **Label** (600 weight, 0.75rem / 12px, uppercase with 0.05–0.14em tracking): Category tags, coordinates, and section metadata.
- **Caption / Micro** (600 weight, 0.6875rem / 11px, tabular numerals, 0.06em tracking): Status badges, filter tags, and dense tabular metadata. Minimum functional text floor.

### Named Rules
**The Heading Authority Rule.** Headings speak for themselves without repetitive numbering or kicker tags placed above them.

## Layout

A responsive 12-column architectural grid with a maximum container width of 80rem (1280px) and 1.5rem (24px) horizontal padding. Sections maintain generous vertical cadence to establish comfortable visual pauses between distinct domains of study and experience.

## Elevation & Depth

Surfaces rely on tonal layering and refined border outlines rather than stark drop shadows. When shadows are used on interactive cards, they use soft diffuse blurs.

### Named Rules
**The Calm Surface Rule.** Ambient states remain quiet and level; depth is a subtle reaction to user focus or interaction, never ambient noise.

## Shapes

Card radii stay consistently subtle (0.125rem to 0.5rem) for comfortable organic containment, avoiding overly rounded modern bubbly looks to keep the academic/editorial feel. Small status pills and interactive buttons employ pill forms (`rounded-full`).

## Components

### Buttons
- **Shape:** Softly curved corners (8px radius) to Pill.
- **Primary:** Charcoal (#1A1A1A) background, white text, sharp ease transition.
- **Secondary:** Surface container background, slate text, subtle border outline.

### Cards / Containers
- **Corner Style:** 4px-8px radius.
- **Background:** Lowest surface (#FFFFFF light / #1A1A1A dark) with 1px border outline.

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
