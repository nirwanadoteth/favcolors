# Favorite Colors Website

**Always follow these instructions first. Only search for additional information or run bash commands if the information here is incomplete or found to be in error.**

Favorite Colors is a static HTML/CSS/JavaScript website that showcases information about different colors and their psychological meanings. The site features an interactive single-page application with navigation between color sections.

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
│   │   ├── style.css       # Custom styles and responsive design
│   │   └── w3.css          # W3.CSS framework (29KB, do not modify)
│   ├── js/
│   │   └── scripts.js      # Navigation logic and tab functionality
│   └── images/
│       ├── colors/         # Color images (10 PNG files: blue.png, red.png, etc.)
│       ├── socials/        # Social media icons (4 SVG files)
│       ├── favcolors.png   # Main banner image
│       └── icon.png        # Favicon
└── LICENSE                 # Creative Commons Attribution 4.0 license
```

## Validation

### Always Test These Scenarios After Making Changes
1. **Navigation Test**: 
   - Start local server: `python3 -m http.server 8000`
   - Open browser to `http://localhost:8000`
   - Click each color button (Blue, Red, Purple, Green, Black, White, Yellow, Pink, Orange, Silver)
   - Verify each section displays correctly with color image and description
   - Test the Profile section displays student information table
   - Test Home button returns to welcome page

2. **Responsive Design Test**:
   - Resize browser window to mobile width (< 600px)
   - Verify navigation buttons stack in grid layout
   - Verify text remains readable and images scale properly

3. **Image Loading Test**:
   - Verify banner image loads at top
   - Verify each color page shows its corresponding color image
   - Verify social media icons display in footer

### Manual Validation Requirements
- **ALWAYS test the complete user flow** after making any changes
- **ALWAYS verify all 11 navigation buttons work** (10 colors + Profile + Home)
- **ALWAYS check both desktop and mobile responsive layouts**
- Take a screenshot of any modified color pages to verify visual changes

## Common Tasks

### Adding a New Color Page
1. Add new `<section>` in `index.html` with `id="NewColor"` and `style="display: none"`
2. Add corresponding `<button onclick="openWarna('NewColor')">` in navigation list
3. Add color image to `assets/images/colors/newcolor.png`
4. Test navigation to new section works

### Modifying Existing Content
1. **Color Descriptions**: Edit the `<blockquote>` content within each color section in `index.html`
2. **Styling Changes**: Modify `assets/css/style.css` (never edit `w3.css`)
3. **Navigation Logic**: Edit `assets/js/scripts.js` if changing tab behavior

### Image Management
- **Color Images**: Place in `assets/images/colors/` (PNG format, should be square)
- **Icons**: Social media icons in `assets/images/socials/` (SVG format)
- **Banner**: Main banner is `assets/images/favcolors.png` (large PNG, 1507KB)

## Technology Stack
- **Frontend**: Pure HTML5, CSS3, JavaScript (ES5)
- **CSS Framework**: W3.CSS 4.15 + custom styles
- **No Build Process**: Static files served directly
- **No Dependencies**: No package.json, npm, or build tools required

## Important Notes
- **No build or compilation step required** - changes are immediately visible
- **All content is in a single HTML file** - no routing or multiple pages
- **JavaScript uses simple DOM manipulation** - no frameworks or libraries
- **Responsive design uses CSS media queries** - mobile-friendly layout
- **Images are optimized but large** - banner image is 1.5MB

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