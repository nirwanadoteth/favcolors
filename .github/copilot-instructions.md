# Favorite Colors Website

**Always follow these instructions first. Only search for additional information or run bash commands if the information here is incomplete or found to be in error.**

Favorite Colors is a static HTML/CSS website (no JavaScript required) that showcases information about different colors and their psychological meanings. The site is a single-page site that uses anchor links and CSS (:target and fallbacks) to navigate between color sections.

## Working Effectively

### Serving and Testing the Website
- Serve the website locally: `cd /home/runner/work/favcolors/favcolors && python3 -m http.server 8000`
- Access the website at: `http://localhost:8000`
- Stop the server: `pkill -f "python3 -m http.server"`
- **TIMING**: Server starts in under 2 seconds. No build process required.

### File Structure and Key Locations
```
├── index.html              # Main HTML file containing all content and structure
├── assets/
│   ├── css/
│   │   └── style.css       # Custom styles, responsive layout, and JS-free navigation
│   └── images/
│       └── colors/         # Color images (10 PNG files: blue.png, red.png, etc.)
│       ├── socials/        # Social media icons (4 SVG files)
│       └── icon.png        # Favicon
└── LICENSE                 # Creative Commons Attribution 4.0 license
```

## Validation

### Always Test These Scenarios After Making Changes
1. **Navigation Test**:
   - Start local server: `python3 -m http.server 8000`
   - Open browser to `http://localhost:8000`
   - Click each color link (Blue, Red, Purple, Green, Black, White, Yellow, Pink, Orange, Silver)
   - Verify each section displays correctly with color image and description
   - Test the Profile section displays student information table
   - Test Home link returns to the welcome page
   - Confirm the active state highlights only the current section in both desktop and mobile nav (CSS-only; no aria-current scripting)

2. **Responsive Design Test**:
   - Resize browser window to mobile width (< 600px)
   - Verify desktop navigation hides and mobile dropdown (<details>/<summary>) appears
   - Verify the mobile summary label updates to the current section name
   - Verify text remains readable and images scale properly

3. **Image Loading Test**:
   - Verify each color page shows its corresponding color image
   - Verify social media icons display in footer

### Manual Validation Requirements
- **ALWAYS test the complete user flow** after making any changes
- **ALWAYS verify all 12 navigation links work** (10 colors + Profile + Home)
- **ALWAYS check both desktop and mobile responsive layouts**
- Take a screenshot of any modified color pages to verify visual changes

## Common Tasks

### Adding a New Color Page
1. Add a new `<section>` in `index.html` with `id="NewColor"` and class `warna` (no inline style):
   - Example: `<section id="Teal" class="warna"> ... </section>`
2. Add corresponding nav links:
   - Desktop: add `<li><a class="btn" href="#NewColor">NewColor</a></li>` inside the desktop nav list
   - Mobile: add `<a class="dropdown-item" href="#NewColor">NewColor</a>` inside the dropdown menu
   - Mobile summary label: add `<span data-name="NewColor">NewColor</span>` inside the summary's `.dropdown-text`
3. Add the color image to `assets/images/colors/newcolor.png` (square PNG recommended)
4. Optional: Add gradient styles in `assets/css/style.css` for hover/active states matching other colors (desktop `.btn`, mobile `.dropdown-item`, and active state rules)
5. Test navigation to the new section works on desktop and mobile; verify the summary label updates

### Modifying Existing Content
1. **Color Descriptions**: Edit the `<blockquote>` content within each color section in `index.html`
2. **Styling Changes**: Modify `assets/css/style.css` (custom CSS only; no framework files)
3. **Navigation**: Navigation is CSS-only; update anchors in `index.html` and matching selectors in `assets/css/style.css` if changing tab behavior

### Image Management
- **Color Images**: Place in `assets/images/colors/` (PNG format, should be square)
- **Icons**: Social media icons in `assets/images/socials/` (SVG format)

## Technology Stack
- **Frontend**: Pure HTML5 and CSS3 (JS-free)
- **CSS Framework**: None (custom styles only)
- **Navigation**: Anchor links with CSS `:target` and responsive `<details>/<summary>` dropdown. Active link highlighting is handled purely in CSS (for example, via `:target` and container `:has(...)` rules). Do not rely on dynamic `aria-current` updates because there's no JavaScript.
- **No Build Process**: Static files served directly
- **No Dependencies**: No package.json, npm, or build tools required

## Important Notes
- **No JavaScript required** - navigation and theming are implemented in CSS
- **All content is in a single HTML file** - no routing or multiple pages
- **Navigation is driven by anchors + CSS `:target`**; mobile dropdown uses native `<details>/<summary>`. Remove any static `aria-current` attributes from markup and rely on CSS-only highlighting for accessibility/fallbacks.
- **Responsive design uses CSS media queries** - mobile-friendly layout

## Timing Expectations
- **Server startup**: Under 2 seconds
- **Page load**: Under 1 second locally
- **No long-running processes** - all operations are instant

## License and Attribution
- **License**: Creative Commons Attribution 4.0 International
- **Creator**: Muhammad Irkham Nurmauludifa (Student project for Web Programming course)
- **Educational Purpose**: Created for Universitas Komputer Indonesia

## Quick Reference Commands
```bash
# Serve website locally
cd /home/runner/work/favcolors/favcolors && python3 -m http.server 8000

# Stop server
pkill -f "python3 -m http.server"

# View file structure
ls -la /home/runner/work/favcolors/favcolors/
ls -la /home/runner/work/favcolors/favcolors/assets/

# Check file sizes
du -h /home/runner/work/favcolors/favcolors/assets/images/*
```