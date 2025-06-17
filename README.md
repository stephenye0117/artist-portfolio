# Pei Ji Ye Artist Website

A professional, responsive artist portfolio website with easy content management.

## Quick Setup

1. **Create the directory structure:**
   ```
   website/
   ├── index.html
   ├── css/
   │   └── styles.css
   ├── js/
   │   └── script.js
   ├── images/
   │   ├── artist-photo.jpg (optional)
   │   ├── hero-bg.jpg (optional)
   │   └── gallery/
   │       ├── artwork1.jpg
   │       ├── artwork2.jpg
   │       └── (more artwork images)
   ├── content/
   │   ├── site-content.txt
   │   └── gallery-content.txt
   └── README.md
   ```

2. **Add your files to the appropriate folders**
3. **Open `index.html` in a web browser**

## How to Update Content

### Changing Website Text

Edit `content/site-content.txt`:

- `[hero-title]` - Artist name displayed prominently
- `[hero-description]` - Short description under the title
- `[about-text]` - Full artist biography (use double line breaks for paragraphs)
- `[contact-intro]` - Introduction text for contact section
- `[contact-email]` - Email address
- `[contact-phone]` - Phone number
- `[contact-address]` - Studio address (use \n for line breaks)
- `[social-instagram]` - Instagram profile URL
- `[social-facebook]` - Facebook profile URL
- `[social-linkedin]` - LinkedIn profile URL

### Managing Gallery

Edit `content/gallery-content.txt`:

For each artwork, use this format:
```
ARTWORK: artwork1
TITLE: Your Artwork Title
DETAILS: Medium, Year<br>Dimensions
IMAGE: filename.jpg
DESCRIPTION: Description of the artwork

ARTWORK: artwork2
TITLE: Another Artwork
...
```

**Important:** The `IMAGE:` filename should match the actual image file in `images/gallery/`

### Adding Images

1. **Artist Photo:** Save as `images/artist-photo.jpg`
2. **Hero Background (optional):** Save as `images/hero-bg.jpg`
3. **Artwork Images:** Save in `images/gallery/` folder
   - Use descriptive filenames: `artwork1.jpg`, `landscape-series-1.jpg`, etc.
   - Recommended size: 800-1200px wide for good quality
   - Supported formats: JPG, PNG, WebP

## Adding New Artworks

1. Add the image to `images/gallery/`
2. Add an entry to `content/gallery-content.txt`
3. Refresh the webpage

## Customizing Design

- **Colors:** Edit CSS variables in `css/styles.css` (lines 9-16)
- **Fonts:** Change font imports in `index.html` and font-family in CSS
- **Layout:** Modify grid settings and spacing in `css/styles.css`

## Technical Features

- **Responsive Design:** Works on all devices
- **SEO Optimized:** Proper meta tags and structure
- **Fast Loading:** Optimized CSS and JavaScript
- **Accessibility:** Keyboard navigation and screen reader friendly
- **Gallery Lightbox:** Click any artwork for detailed view
- **Smooth Animations:** Fade-in effects and smooth scrolling

## Browser Support

Works in all modern browsers including:
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

**Images not showing?**
- Check file paths and names match exactly
- Ensure images are in the correct folders
- Check browser console for error messages

**Content not updating?**
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check that text files are saved properly
- Verify file structure matches the guide

**Mobile menu not working?**
- This is a basic implementation - you may want to enhance it
- The current version shows an alert, ready for custom implementation

## Going Live

To publish your website:
1. Upload all files to your web hosting service
2. Ensure the directory structure is preserved
3. Update social media links with real URLs
4. Test all functionality on the live site

## Support

For technical issues:
- Check the browser console for error messages
- Ensure all files are in the correct locations
- Verify content files follow the exact format shown