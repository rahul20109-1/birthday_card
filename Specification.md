# Technical Build Specifications: Dewangan Editorial

## 1. Project Overview

A responsive, mobile-first digital birthday keepsake designed as an interactive storybook. The experience is a direct, intimate tribute to an uncle (IAS Officer) from his niece/nephew.

## 2. Visual Identity (The "Warmth & Heritage" Theme)

- **Design System:** Vintage Chronicle (Digital Storybook Aesthetic)
- **Primary Color:** `#B88682` (Dusty Rose) - Used for emotional accents and CTAs.
- **Background:** `#FBF9F6` (Whisper Ivory) - Mimics high-quality book paper.
- **Text Color:** `#3A3532` (Soft Charcoal) - High readability with a softer feel than pure black.
- **Typography:**
  - **Headings:** `Newsreader` (Italic, Medium) - Elegant, editorial serif.
  - **Body:** `Noto Serif` or `Lora` - Classic book typography.
- **Atmosphere:** Minimalist, emotional, narrative-driven, and dignified.

## 3. Core User Flow (Mobile)

The site is designed for a vertical scroll or "page-turn" transition experience on iPhone browsers.

1. **The Cover ({{DATA:SCREEN:SCREEN_11}}):**
   - **Purpose:** Entry point and emotional hook.
   - **Key Element:** Central hero portrait with a "Begin Reading" call-to-action.
   - **Visuals:** Framed photo with subtle drop shadows.

2. **Chapter 1: The Journey ({{DATA:SCREEN:SCREEN_2}}):**
   - **Purpose:** Narrative letter detailing his life and IAS service.
   - **Key Elements:** Drop caps for section starts, inline photo plates, and chronological subheaders.
   - **Tone:** A direct letter ("You have always been a beacon...").

3. **Chapter 2: The Archive ({{DATA:SCREEN:SCREEN_12}}):**
   - **Purpose:** Curated gallery of meaningful moments.
   - **Key Elements:** High-quality photo grid with poetic captions.
   - **Interactions:** Photos should feel like physical "plates" in a biography.

4. **Epilogue: A Personal Note ({{DATA:SCREEN:SCREEN_7}}):**
   - **Purpose:** Final, direct birthday wish.
   - **Key Elements:** Large closing portrait, intimate sign-off, and a "Return to Cover" option.

## 4. Technical Implementation Notes

- **Responsiveness:** Optimize exclusively for mobile viewports (e.g., iPhone 13/14/15).
- **Animations:** Subtle fade-ins for text and images as the user scrolls to enhance the "storytelling" feel.
- **Assets:** Use the placeholder images provided in the HTML as a guide for aspect ratios and placement.
- **Borders/Shadows:** Use very soft, low-opacity shadows (`rgba(58, 53, 50, 0.04)`) and crisp 1px borders to maintain the premium paper feel.
