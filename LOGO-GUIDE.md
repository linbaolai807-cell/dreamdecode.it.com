# Dream Guide Logo - Usage Guide

## Logo Files Created

We've created three versions of the Dream Guide logo to suit different use cases:

### 1. **logo-icon.svg** (Icon Only - Primary Use)
- **Size**: 200x200px (scalable SVG)
- **Use Cases**:
  - Website header and footer (40x40px)
  - Favicon
  - Social media profile pictures (512x512px)
  - Browser tabs
  - App icons

**Current Implementation**: Used in all pages at 40x40px in header, 8x8px in footer

### 2. **logo-full.svg** (Full Logo with Text)
- **Size**: 300x300px (scalable SVG)
- **Includes**: Logo icon + "Dream Guide" text + "INTERPRETATION GUIDE" subtitle
- **Use Cases**:
  - Landing page hero section
  - Print materials
  - Social media banner backgrounds
  - Blog header images
  - Marketing materials

### 3. **logo.svg** (Compact Icon Version)
- **Size**: 200x200px (scalable SVG)
- **Description**: Simplified icon version without text
- **Use Cases**:
  - Favicon generation
  - Watermarks
  - Document backgrounds

## Logo Design Elements

- **Primary Color**: Indigo (#818cf8) with purple gradient (#c084fc)
- **Secondary Color**: Emerald green (#34d399)
- **Accent**: Gold stars (#fbbf24)
- **Style**: Modern, mystical, dream-themed
- **Main Elements**:
  - Crescent moon (symbolizing dreams and night)
  - Golden stars (symbolizing guidance and hope)
  - Mystical waves (representing subconscious flow)
  - Third eye symbol (representing insight and intuition)
  - Glow effects (creating ethereal, dreamlike quality)

## Implementation in HTML

### Header Logo (All Pages)
```html
<a href="index.html" class="flex items-center gap-2 hover:opacity-80 transition">
  <img src="/logo-icon.svg" alt="Dream Guide Logo" class="w-10 h-10">
  <span class="text-xl font-bold tracking-tight text-white font-serif hidden sm:inline">
    Dream<span class="text-primary">Guide</span>
  </span>
</a>
```

### Footer Logo (All Pages)
```html
<div class="flex items-center gap-2 mb-4">
  <img src="/logo-icon.svg" alt="Dream Guide Logo" class="w-8 h-8">
  <a href="index.html" class="text-2xl font-bold text-white inline-block font-serif">
    Dream<span class="text-primary">Guide</span>
  </a>
</div>
```

## Responsive Design

- **Mobile (< 640px)**: Logo icon only (40x40px) - text hidden
- **Tablet/Desktop (≥ 640px)**: Logo icon + text side by side
- **Footer**: Logo icon (8x8px) + text (consistent on all sizes)

## Updated Pages

All of the following pages have been updated with the new logo:
- ✅ index.html (Homepage)
- ✅ about.html (About page)
- ✅ contact.html (Contact page)
- ✅ privacy.html (Privacy policy)
- ✅ terms.html (Terms of service)
- ✅ cookies.html (Cookie policy)

## Color Palette Reference

For consistency across your website, use these colors:
- **Primary Blue**: #818cf8
- **Primary Purple**: #c084fc
- **Secondary Green**: #34d399
- **Accent Gold**: #fbbf24
- **Background Dark**: #0f172a
- **Background Midnight**: #1e1b4b

## File Locations

All logo files are stored in the root directory:
- `/logo.svg`
- `/logo-full.svg`
- `/logo-icon.svg`

## Tips for Using the Logo

1. **Maintain Clear Space**: Keep at least 10px of clear space around the logo
2. **Minimum Size**: Don't display the icon below 24x24px (except in favicon)
3. **Colors**: The logo works best on dark backgrounds; avoid placing on white without adjustment
4. **Scaling**: SVG scales infinitely without quality loss
5. **Consistency**: Always use the same logo version across all pages

## Future Customizations

To modify the logo colors:
1. Edit the `linearGradient` sections in the SVG files
2. Change the `stop-color` values to your desired colors
3. Update the `fill` attributes to match your color scheme

For more advanced customizations, consider using an SVG editor like:
- Adobe Illustrator
- Figma
- Inkscape (free)
