# Ye Pei Ji (叶培基) Artist Website

A professional, responsive artist portfolio website with bilingual support (English/Chinese) and easy content management.

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
   │       ├── 《夜色》53x38cm 水彩纸 丙烯....jpeg
   │       ├── 《巢》53x38cm 水彩纸 水彩 ....jpeg
   │       ├── 3 Sonata of Bamboo Forest.jpeg
   │       └── (14 total artwork images)
   ├── content/
   │   ├── site-content-en.txt (English content)
   │   ├── site-content-zh.txt (Chinese content)  
   │   ├── gallery-content-en.txt (English gallery)
   │   └── gallery-content-zh.txt (Chinese gallery)
   └── README.md
   ```

2. **Add your files to the appropriate folders**
3. **Open `index.html` in a web browser**

## Translation System

The website supports English and Chinese with a toggle button in the navigation.

### Setting Up Translations

**English Content:** Edit the main content files:
- `content/site-content-en.txt` (or `site-content.txt`)
- `content/gallery-content-en.txt` (or `gallery-content.txt`)

**Chinese Content:** Create/edit the Chinese versions:
- `content/site-content-zh.txt`
- `content/gallery-content-zh.txt`

The system automatically detects both naming conventions for maximum flexibility.

### Language Toggle

- Click the language button in the top navigation to switch between English/Chinese
- The website remembers your language preference
- All content updates automatically including:
  - Navigation menu (Home/首页, Gallery/作品集, About/关于, Contact/联系)
  - Section titles
  - Artist information (Pei Ji Ye ↔ 叶培基)
  - Gallery descriptions
  - Contact labels

## Gallery System (14 Artworks)

The website displays 14 artworks with mixed dimensions and bilingual titles:

### Chinese Traditional Works (1-9):
- 夜色 (Night Scene) - 53×38cm
- 巢 I & II (Nest I & II) - 53×38cm each
- 悠然 (Leisurely) - 26×37cm
- 暗中 (In the Dark) - 26×37cm
- 月下 (Under the Moon) - 26×37cm
- 田园 (Pastoral) - 54×78cm
- 踪影 (Traces) - 52×37cm
- 逢春 (Meeting Spring) - 38×53cm

### English-Titled Works (10-14):
- Crossing The Order (穿越秩序)
- Feather Light Flows (羽毛轻流)
- Sonata of Bamboo Forest (竹林奏鸣曲)
- Meditation in Spring (春日冥想)
- Life in Cracks (缝隙中的生命)

## How to Update Content

### Changing Website Text

Edit `content/site-content-en.txt` and `content/site-content-zh.txt`:

- `[hero-title]` - Artist name displayed prominently
- `[hero-description]` - Short description under the title
- `[about-text]` - Full artist biography (supports HTML formatting)
- `[contact-intro]` - Introduction text for contact section
- `[contact-email]` - Email address
- `[contact-phone]` - Phone number
- `[contact-address]` - Studio address (use \n for line breaks)
- `[social-instagram]` - Instagram profile URL
- `[social-facebook]` - Facebook profile URL
- `[social-linkedin]` - LinkedIn profile URL

### Managing Gallery

Edit `content/gallery-content-en.txt` and `content/gallery-content-zh.txt`:

For each artwork, use this format:
```
ARTWORK: artwork1
TITLE: Your Artwork Title
DETAILS: Medium, Year<br>Dimensions
IMAGE: exact-filename.jpeg
DESCRIPTION: Description of the artwork

ARTWORK: artwork2
TITLE: Another Artwork
...
```

**Important:** The `IMAGE:` filename must match the actual image file in `images/gallery/`

### Adding Images

1. **Artist Photo:** Save as `images/artist-photo.jpg`
2. **Hero Background (optional):** Save as `images/hero-bg.jpg`
3. **Artwork Images:** Save in `images/gallery/` folder
   - Use exact filenames from the gallery content files
   - Mixed dimensions are handled automatically
   - Supported formats: JPG, PNG, WebP

## Image Display Features

- **Flexible grid layout** - accommodates different image sizes
- **No cropping** - `object-fit: contain` shows full images
- **Consistent card heights** with flexible content areas
- **Professional presentation** with subtle backgrounds for padding
- **Responsive design** - works on all screen sizes

## Technical Features

- **Bilingual Support:** Complete English/Chinese translation system
- **Responsive Design:** Works on all devices and screen sizes
- **SEO Optimized:** Proper meta tags and structure
- **Fast Loading:** Optimized CSS and JavaScript
- **Accessibility:** Keyboard navigation and screen reader friendly
- **Gallery Lightbox:** Click any artwork for detailed view
- **Smooth Animations:** Fade-in effects and smooth scrolling
- **Flexible File Naming:** Supports both old and new naming conventions

## File Compatibility

The system supports both naming conventions:
- **New:** `site-content-en.txt`, `gallery-content-en.txt`
- **Legacy:** `site-content.txt`, `gallery-content.txt`

This ensures backward compatibility while allowing organized bilingual file management.

## Browser Support

Works in all modern browsers including:
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

**Images not showing?**
- Check file paths and names match exactly with gallery content files
- Ensure images are in the `images/gallery/` folder
- Check browser console for error messages

**Content not updating?**
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check that text files are saved with correct encoding (UTF-8)
- Verify file structure matches the guide

**Translation not working?**
- Ensure both `-en.txt` and `-zh.txt` files exist
- Check that language toggle button appears in navigation
- Verify content format matches examples exactly

## Going Live

To publish your website:
1. Upload all files to your web hosting service
2. Ensure the directory structure is preserved
3. Update social media links with real URLs
4. Test all functionality on the live site
5. Test both English and Chinese content

## Artist Information

- **Artist:** Ye Pei Ji (叶培基)
- **Education:** Guangzhou Academy of Fine Arts (1985), NY Art Students League (1988)
- **Style:** Eastern philosophy + Western painting techniques
- **Exhibitions:** New York, Paris, Beijing, Shanghai, Guangzhou, Hong Kong
- **Contact:** info@yepeiji.com

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