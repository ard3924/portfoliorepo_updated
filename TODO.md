# TODO: Update Skills Section to Use Local SVG Icons

## Tasks
- [ ] Import SVG icons from assets folder in App.jsx
- [ ] Update skillIcons object to use imported SVGs instead of CDN links
- [ ] Test the app to ensure icons display correctly
- [ ] Check for any styling issues with imported SVGs

## Information Gathered
- Skills section uses skillIcons object with external CDN links
- Assets folder contains matching SVG icons (e.g., css3-original.svg, gemini.svg)
- Some icons are already local (e.g., Bot component for genai)
- Need to replace CDN img tags with imported SVG components

## Plan
- Import SVGs as React components at the top of App.jsx
- Replace CDN img elements in skillIcons with imported components
- Ensure proper sizing and styling (w-12 h-12 classes)
