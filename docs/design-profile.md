# Design profile: lewiswang.com.au

This file sets the style parameters for this site.
The rules and the method come from the shared Radix design system document.
Where this file and that document differ, this file wins for this site.

## 1. Character

A dark, warm, editorial portfolio.
Near-black background, warm off-white text, one grotesk typeface, bold headings, almost no decoration.
The audience is recruiters and hiring managers who scan for role, stack, results and a way to get in touch.

## 2. Theme

Dark only.
Set `class="dark"` on `<html>`, because the Radix dark files apply to `.dark`.
Keep `color-scheme: dark`.

## 3. Colour

### 3.1 Scales

| Role | Scale | File |
| --- | --- | --- |
| Neutral | `sand` | `@radix-ui/colors/sand-dark.css` |
| Accent | `indigo` | `@radix-ui/colors/indigo-dark.css` |
| Error | `red` | `@radix-ui/colors/red-dark.css` |

`--indigo-contrast` and `--red-contrast` are `#ffffff`.

Radix pairs `sand` naturally with yellow, amber, orange and brown.
Indigo is kept because the site already uses a blue accent.

### 3.2 Token mapping

| Old token | Value | New |
| --- | --- | --- |
| `canvas` | `#10100e` | `sand-1` `#111110` |
| `ink` | `#e8e6dd` | `sand-12` `#eeeeec` |
| `dim` | `#9b9789` | `sand-11` `#b5b3ad` |
| `line` | ink at 14% | `sand-6` `#3b3a37` |
| `line-strong` | ink at 35% | `sand-7` `#494844` |
| `blue` (text and links) | `#5c7cff` | `indigo-11` `#9eb1ff` |
| `::selection` background | `#5c7cff` | `indigo-9` `#3e63dd`, text `--indigo-contrast` |

### 3.3 Element mapping

| Element | Now | New |
| --- | --- | --- |
| Page | `bg-canvas` | `sand-1` |
| Send button | `bg-ink text-canvas` | `indigo-9` fill, `indigo-10` hover, `--indigo-contrast` text |
| Mode toggle, selected | `bg-ink text-canvas` | `sand-5` fill, `sand-12` text |
| Mode toggle, rest | `text-dim` | transparent, `sand-11` text, `sand-4` hover |
| Suggestion chips | `border-line`, `hover:border-ink/50` | `sand-7` border, `sand-8` border on hover, `sand-11` text, `sand-12` on hover |
| Composer | `border-line-strong`, `focus-within:border-ink/60` | `sand-7` border, `indigo-8` border on focus |
| Expandable row hover | `bg-ink/[0.04]` | `sand-3` |
| Timeline marker | `bg-ink` | `sand-11` |
| Code in answers | `bg-line` | `sand-3` |
| Floating nav and mode toggle | `bg-canvas/90` with `backdrop-blur-sm` | solid `sand-1`, `sand-6` border, no blur |
| Section rule above headings, footer rule | 2px `border-ink` | 0.5px `sand-7` |

Text uses only `sand-11`, `sand-12` and `indigo-11`.

## 4. Typography

Typeface: Schibsted Grotesk.
Weights: 400 for body text, 600 for labels and buttons, 700 for headings.
Bold headings are part of the site's character, so headings stay at 700.

| Token | Size | Line height | Use |
| --- | --- | --- | --- |
| `caption` | 12px | 1.5 | Labels, metadata, footer |
| `body` | 15px | 1.6 | Body copy, buttons, inputs, list rows |
| `title` | 30px | 1.2 | Section headings, stat figures, the chat page heading, the contact email |
| `display` | clamp(44px, 7vw, 88px) | 0.98 | The portfolio hero heading only |

Tracking: `-0.02em` on display, `tight` on title.

## 5. Lines, radii, shadows

- All borders and dividers are 0.5px.
- `sand-6` for separators, `sand-7` for interactive borders and section rules.
- Radii: `rounded-full` for chips, the mode toggle and the send button. The composer is 16px; the send button inside it stays a pill.
- No shadows and no backdrop blur.

## 6. Motion

| Effect | Decision |
| --- | --- |
| Scroll reveal (`Reveal`) | Keep. 250ms ease-out, 8px rise, no stagger delay above 100ms. |
| Number ticker (`NumberTicker`) | Remove. Render the final number. |
| Lenis smooth scrolling | Remove. Anchor links use native `scroll-behavior: smooth`, which `prefers-reduced-motion` turns off. |
| Streaming cursor pulse | Remove. Show a static cursor while the answer streams. |
| Hover and state transitions | `transition-colors duration-250 ease-out` everywhere. |

## 7. Copy

- No `·` separators. The AI usage lines become separate items laid out with spacing.
- Every sentence should help a recruiter decide: role, stack, results or contact.

## 8. Audit values

Use the shared audit script with these values:

- Scales: `sand`, `indigo`, `red`.
- Allowed font sizes: 12px, 15px, 30px and the display size.
- Allowed border width: 0.5px.
- Allowed transitions: 250ms ease-out.
- Allowed radii: 16px and 999px.
