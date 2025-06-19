# Pei Ji Ye (叶培基) - Artist Portfolio Website

A professional, bilingual artist portfolio website showcasing the work of contemporary artist Pei Ji Ye, combining Eastern philosophy with Western painting techniques.

## 🌐 Live Website
[View Live Site](https://stephenye0117.github.io/artist-portfolio)

## 🎨 About the Artist

**Pei Ji Ye (叶培基)** is a New York-based contemporary artist who masterfully combines Eastern philosophy with Western painting elements. His work explores themes of nature, freedom, and spiritual exploration through bold colors and delicate techniques.

**Education:**
- Guangzhou Academy of Fine Arts (1985)
- The New York Art Students League (1988)

**Exhibitions:**
- New York galleries: H Arnot Company, Wyndwood Gallery, SOHO MD Gallery
- International exhibitions in Beijing, Shanghai, Paris, and Hong Kong

## ✨ Website Features

### 🌏 **Bilingual Support**
- Complete English/Chinese language toggle
- All content dynamically switches including artwork descriptions
- Language preference saved locally

### 🖼️ **Gallery Showcase**
**13 Featured Artworks:**
- **Traditional Series (1-8):** Night Scene, Nest, Leisurely, In the Dark, Under the Moon, Pastoral, Traces, Meeting Spring
- **Mixed Media Series (9-13):** Crossing The Order, Feather Light Flows, Sonata of Bamboo Forest, Meditation in Spring, Life in Cracks

### 📱 **Professional Features**
- Responsive design (desktop, tablet, mobile)
- Lightbox gallery with artwork details
- Smooth scrolling navigation
- Fade-in animations
- Hero background with artist's artwork
- Professional contact section
- SEO optimized

## 🛠️ Technical Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Fonts:** Inter, Playfair Display
- **Responsive:** CSS Grid, Flexbox
- **Animations:** Intersection Observer API
- **Hosting:** GitHub Pages

## 📁 Project Structure

```
website/
├── index.html                 # Main HTML file
├── css/
│   └── styles.css            # All styling
├── js/
│   └── script.js             # Interactive functionality
├── images/
│   ├── hero-background.jpeg  # Hero section background
│   ├── artist-photo.jpeg     # About section photo
│   └── gallery/              # Artwork images folder
│       ├── 《夜色》53x38cm 水彩纸 丙烯 钢色笔 2025.jpeg
│       ├── 《巢》53x38cm 水彩纸 水彩 丙烯 2025.jpeg
│       ├── 《悠然》26x37cm 水彩纸 丙烯 2025.jpeg
│       ├── 《暗中》26x37cm 水彩纸 水墨 钢色笔 2025.jpeg
│       ├── 《月下》26x37cm 水彩纸 水彩 丙烯笔 2025.jpeg
│       ├── 《田园》54x78cm 水彩纸 丙烯 金属 2025 (反光后重拍）.jpeg
│       ├── 《踪影》52x37cm 水彩纸 水彩 钢色笔 2025.jpeg
│       ├── 《逢春》38x53cm 水彩纸 水彩 丙烯 2025.jpeg
│       ├── 1 Crossing The Order .jpeg
│       ├── 2 Feather Light Flows.jpeg
│       ├── 3 Sonata of Bamboo Forest.jpeg
│       ├── 4 Meditation in Spring.jpeg
│       └── 5 Life in Cracks.jpeg
└── README.md                 # This file
```

## 🚀 Local Development

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for testing)

### Running Locally
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Open directly in browser:**
   ```bash
   open index.html
   ```

3. **Or use a local server:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js
   npx serve
   ```

4. **Visit:** `http://localhost:8000`

## 🎨 Customization

### Adding New Artworks
1. Add image to `images/gallery/` folder
2. Update `galleryContent` array in `js/script.js`
3. Include both English and Chinese descriptions

### Updating Contact Information
Edit the contact details in `js/script.js`:
```javascript
'contact-email': 'your-email@domain.com',
'contact-phone': '+1 (555) 123-4567',
'contact-address': 'Your Address',
```

### Changing Colors/Styling
Modify CSS variables in `css/styles.css`:
```css
:root {
    --primary-text: #1a1a1a;
    --secondary-text: #666;
    --accent-color: #2c2c2c;
    --background: #ffffff;
    --light-gray: #f8f8f8;
}
```

## 📧 Contact

**Pei Ji Ye (叶培基)**
- Email: da888y@gmail.com
- Phone: +1 (646) 639-0788
- Location: 137 Warner Ave, Roslyn Heights, NY 11577

## 📄 License

All artwork and content © 2024 Pei Ji Ye. All rights reserved.

Website code available for educational purposes.

## 🔧 Built With

- **Design Philosophy:** Minimalist, clean, artist-focused
- **Performance:** Optimized images, efficient CSS, vanilla JavaScript
- **Accessibility:** Semantic HTML, keyboard navigation, screen reader friendly
- **SEO:** Meta tags, structured data, optimized content

---

*Contemporary art exploring the intersection of Eastern philosophy and Western techniques*