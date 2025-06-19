// Global variables
let siteContent = {};
let galleryContent = [];
let currentLanguage = 'en';

// Load content when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, initializing...');
    
    // Check saved language preference
    currentLanguage = localStorage.getItem('preferred-language') || 'en';
    if (currentLanguage === 'zh') {
        document.body.classList.add('zh');
    }
    
    // Initialize with defaults immediately
    console.log('Loading default content...');
    initializeDefaultContent();
    
    // Set up event listeners
    initializeEventListeners();
    initializeAnimations();
    initializeLanguageToggle();
    
    // Try to load from files (this will update if files exist)
    setTimeout(() => {
        loadSiteContent();
        loadGalleryContent();
    }, 100);
});

// Initialize all default content immediately
function initializeDefaultContent() {
    useDefaultSiteContent();
    useDefaultGalleryContent();
    updateSiteContent();
    updateGalleryContent();
    console.log('Default content loaded');
}

// Use default site content if file not found
function useDefaultSiteContent() {
    siteContent = {
        en: {
            'hero-title': 'Pei Ji Ye',
            'hero-description': 'A New York-based artist combining Eastern philosophy with Western painting elements, revealing the artistic conception of nature, freedom, and spiritual exploration',
            'about-text': `<p>Pei Ji Ye, a New York-based artist, attended Guangzhou Academy of Fine Arts in 1985. He studied at The New York Art Students League in 1988.</p>

<p>Pei Ji applies Eastern philosophy with Western painting elements, integrating abstraction and symbolism. His paintings are bold and delicate, combining visual impact and a lyrical poetic atmosphere, the artistic conception of nature, freedom, and spiritual exploration.</p>

<p>In the 1990s, Pei Ji Ye's artwork <strong>"Golden Hudson River"</strong> series and <strong>"New York Impression"</strong> series were exhibited in many galleries in New York, such as H Arnot Company, Wyndwood Gallery, and SOHO MD Gallery.</p>

<p>His work has been exhibited internationally in Beijing, Shanghai, Paris, and Hong Kong, and his pieces are collected by art museums, galleries, and individuals worldwide.</p>`,
            'contact-intro': 'For inquiries about exhibitions, commissions, or purchasing artwork, please reach out through any of the following methods.',
            'contact-email': 'da888y@gmail.com',
            'contact-phone': '+1 (646) 639-0788',
            'contact-address': '137 Warner Ave, Roslyn Heights, NY 11577',
        },
        zh: {
            'hero-title': '叶培基',
            'hero-description': '当代艺术家，将东方哲学与西方绘画元素巧妙结合，展现自然、自由和精神探索的意境',
            'about-text': `<p>叶培基，纽约艺术家，1985年就读于广州美术学院，1988年就读于纽约Art Students League。</p>

<p>培基将东方哲学与西方绘画元素巧妙结合，将抽象与象征主义融为一体。他的绘画风格大胆，色彩细腻，兼具视觉冲击力与抒情诗意，展现了自然、自由和精神探索的意境。</p>

<p>20世纪90年代，培基的作品<strong>"金色哈德逊河"</strong>系列和<strong>"纽约印象"</strong>系列在纽约多个画廊展出，包括H·阿诺特公司、温德伍德画廊、SOHO MD画廊等。</p>

<p>他的作品在北京、上海、巴黎、香港等地国际展出，被世界各地的美术馆、画廊和个人收藏。</p>`,
            'contact-intro': '如需咨询展览、委托或购买作品事宜，请通过以下方式联系。',
            'contact-email': 'da888y@gmail.com',
            'contact-phone': '+1 (646) 639-0788',
            'contact-address': '137 Warner Ave, Roslyn Heights, NY 11577',
     
        }
    };
}

// Use default gallery content
function useDefaultGalleryContent() {
    galleryContent = [
        {
            id: 'artwork1',
            image: '《夜色 》53x38cm 水彩纸 丙烯 钢色笔 2025.jpeg',
            en: {
                id: 'artwork1',
                title: 'Night Scene',
                details: 'Watercolor paper, acrylic, steel pen, 2025<br>53cm × 38cm',
                description: 'The mystery and tranquility of nightfall, revealing inner contemplation and exploration through deep color layers.',
                image: '《夜色 》53x38cm 水彩纸 丙烯 钢色笔 2025.jpeg'
            },
            zh: {
                id: 'artwork1',
                title: '夜色',
                details: '水彩纸，丙烯，钢色笔，2025年<br>53cm × 38cm',
                description: '夜幕降临时的神秘与宁静，通过深邃的色彩层次展现内心的沉思与探索。',
                image: '《夜色 》53x38cm 水彩纸 丙烯 钢色笔 2025.jpeg'
            }
        },
        {
            id: 'artwork2',
            image: '《巢》 53x38cm 水彩纸 水彩 丙烯 2025.jpeg',
            en: {
                id: 'artwork2',
                title: 'Nest',
                details: 'Watercolor paper, watercolor, acrylic, 2025<br>53cm × 38cm',
                description: 'A warm space symbolizing belonging and security, exploring the concept of home and the inner sanctuary.',
                image: '《巢》 53x38cm 水彩纸 水彩 丙烯 2025.jpeg'
            },
            zh: {
                id: 'artwork2',
                title: '巢',
                details: '水彩纸，水彩，丙烯，2025年<br>53cm × 38cm',
                description: '象征着归属与安全感的温暖空间，探索家的概念与内心的栖息之地。',
                image: '《巢》 53x38cm 水彩纸 水彩 丙烯 2025.jpeg'
            }
        },
        {
            id: 'artwork3',
            image: '《悠然》 26x37cm 水彩纸 丙烯 2025.jpeg',
            en: {
                id: 'artwork3',
                title: 'Leisurely',
                details: 'Watercolor paper, acrylic, 2025<br>26cm × 37cm',
                description: 'A state of comfortable ease, expressing inner peace and transcendence through gentle tones.',
                image: '《悠然》 26x37cm 水彩纸 丙烯 2025.jpeg'
            },
            zh: {
                id: 'artwork3',
                title: '悠然',
                details: '水彩纸，丙烯，2025年<br>26cm × 37cm',
                description: '闲适自在的生活状态，通过柔和的色调表达内心的平静与超脱。',
                image: '《悠然》 26x37cm 水彩纸 丙烯 2025.jpeg'
            }
        },
        {
            id: 'artwork4',
            image: '《暗中》 26x37cm 水彩纸 水墨 钢色笔 2025.jpeg',
            en: {
                id: 'artwork4',
                title: 'In the Dark',
                details: 'Watercolor paper, ink, steel pen, 2025<br>26cm × 37cm',
                description: 'Life force surging in darkness, seeking hope and possibility at the boundary between shadow and light.',
                image: '《暗中》 26x37cm 水彩纸 水墨 钢色笔 2025.jpeg'
            },
            zh: {
                id: 'artwork4',
                title: '暗中',
                details: '水彩纸，水墨，钢色笔，2025年<br>26cm × 37cm',
                description: '暗中涌动的生命力，在阴影与光明的交界处寻找希望与可能。',
                image: '《暗中》 26x37cm 水彩纸 水墨 钢色笔 2025.jpeg'
            }
        },
        {
            id: 'artwork5',
            image: '《月下》 26x37cm 水彩纸 水彩 丙烯笔 2025.jpeg',
            en: {
                id: 'artwork5',
                title: 'Under the Moon',
                details: 'Watercolor paper, watercolor, acrylic pen, 2025<br>26cm × 37cm',
                description: 'A poetic moment under moonlight, capturing the unique tranquility and romantic atmosphere of night.',
                image: '《月下》 26x37cm 水彩纸 水彩 丙烯笔 2025.jpeg'
            },
            zh: {
                id: 'artwork5',
                title: '月下',
                details: '水彩纸，水彩，丙烯笔，2025年<br>26cm × 37cm',
                description: '月光下的诗意瞬间，捕捉夜晚独有的宁静与浪漫氛围。',
                image: '《月下》 26x37cm 水彩纸 水彩 丙烯笔 2025.jpeg'
            }
        },
        {
            id: 'artwork6',
            image: '《田园》54x78cm 水彩纸 丙烯 金属 2025 (反光后重拍）.jpeg',
            en: {
                id: 'artwork6',
                title: 'Pastoral',
                details: 'Watercolor paper, acrylic, metal, 2025<br>54cm × 78cm',
                description: 'The simplicity and beauty of pastoral life, with metallic materials adding modernity and texture to the work.',
                image: '《田园》54x78cm 水彩纸 丙烯 金属 2025 (反光后重拍）.jpeg'
            },
            zh: {
                id: 'artwork6',
                title: '田园',
                details: '水彩纸，丙烯，金属，2025年<br>54cm × 78cm',
                description: '田园生活的纯朴与美好，金属材料的加入为作品增添了现代感与质感。',
                image: '《田园》54x78cm 水彩纸 丙烯 金属 2025 (反光后重拍）.jpeg'
            }
        },
        {
            id: 'artwork7',
            image: '《踪影 》52x37cm 水彩纸 水彩 钢色笔 2025.jpeg',
            en: {
                id: 'artwork7',
                title: 'Traces',
                details: 'Watercolor paper, watercolor, steel pen, 2025<br>52cm × 37cm',
                description: 'Marks left by time, exploring the imprints of memory and existence through abstract forms.',
                image: '《踪影 》52x37cm 水彩纸 水彩 钢色笔 2025.jpeg'
            },
            zh: {
                id: 'artwork7',
                title: '踪影',
                details: '水彩纸，水彩，钢色笔，2025年<br>52cm × 37cm',
                description: '时间留下的痕迹，通过抽象的形式探索记忆与存在的印记。',
                image: '《踪影 》52x37cm 水彩纸 水彩 钢色笔 2025.jpeg'
            }
        },
        {
            id: 'artwork8',
            image: '《逢春》 38x53cm 水彩纸 水彩 丙烯 2025.jpeg',
            en: {
                id: 'artwork8',
                title: 'Meeting Spring',
                details: 'Watercolor paper, watercolor, acrylic, 2025<br>38cm × 53cm',
                description: 'The joy and hope of spring\'s arrival, expressing life\'s revival and rebirth with warm colors.',
                image: '《逢春》 38x53cm 水彩纸 水彩 丙烯 2025.jpeg'
            },
            zh: {
                id: 'artwork8',
                title: '逢春',
                details: '水彩纸，水彩，丙烯，2025年<br>38cm × 53cm',
                description: '春天到来的喜悦与希望，用温暖的色彩表达生命的复苏与新生。',
                image: '《逢春》 38x53cm 水彩纸 水彩 丙烯 2025.jpeg'
            }
        },
        {
            id: 'artwork9',
            image: '1 Crossing The Order .jpeg',
            en: {
                id: 'artwork9',
                title: 'Crossing The Order',
                details: 'Mixed media, 2025<br>Dimensions variable',
                description: 'The courage to break through established frameworks, exploring the possibility of finding balance between rules and freedom.',
                image: '1 Crossing The Order .jpeg'
            },
            zh: {
                id: 'artwork9',
                title: '穿越秩序',
                details: '混合媒体，2025年<br>尺寸可变',
                description: '突破既定框架的勇气，探索在规则与自由之间寻找平衡的可能性。',
                image: '1 Crossing The Order .jpeg'
            }
        },
        {
            id: 'artwork10',
            image: '2 Feather Light Flows.jpeg',
            en: {
                id: 'artwork10',
                title: 'Feather Light Flows',
                details: 'Mixed media, 2025<br>Dimensions variable',
                description: 'Light flows like feathers, expressing the most delicate emotional fluctuations deep within the heart.',
                image: '2 Feather Light Flows.jpeg'
            },
            zh: {
                id: 'artwork10',
                title: '羽毛轻流',
                details: '混合媒体，2025年<br>尺寸可变',
                description: '如羽毛般轻盈的流动，表达内心深处最细腻的情感波动。',
                image: '2 Feather Light Flows.jpeg'
            }
        },
        {
            id: 'artwork11',
            image: '3 Sonata of Bamboo Forest.jpeg',
            en: {
                id: 'artwork11',
                title: 'Sonata of Bamboo Forest',
                details: 'Mixed media, 2025<br>Dimensions variable',
                description: 'A musical poem in the bamboo forest, merging nature\'s sounds with the rhythm of the inner heart.',
                image: '3 Sonata of Bamboo Forest.jpeg'
            },
            zh: {
                id: 'artwork11',
                title: '竹林奏鸣曲',
                details: '混合媒体，2025年<br>尺寸可变',
                description: '竹林中的音乐诗篇，将自然的声响与内心的节拍融为一体。',
                image: '3 Sonata of Bamboo Forest.jpeg'
            }
        },
        {
            id: 'artwork12',
            image: '4 Meditation in Spring.jpeg',
            en: {
                id: 'artwork12',
                title: 'Meditation in Spring',
                details: 'Mixed media, 2025<br>Dimensions variable',
                description: 'Quiet contemplation in spring, seeking inner peace and wisdom in nature\'s embrace.',
                image: '4 Meditation in Spring.jpeg'
            },
            zh: {
                id: 'artwork12',
                title: '春日冥想',
                details: '混合媒体，2025年<br>尺寸可变',
                description: '春天里的静思时光，在自然的怀抱中寻找内心的宁静与智慧。',
                image: '4 Meditation in Spring.jpeg'
            }
        },
        {
            id: 'artwork13',
            image: '5 Life in Cracks.jpeg',
            en: {
                id: 'artwork13',
                title: 'Life in Cracks',
                details: 'Mixed media, 2025<br>Dimensions variable',
                description: 'Life force blooming in the most unlikely places, demonstrating the power of resilience and hope.',
                image: '5 Life in Cracks.jpeg'
            },
            zh: {
                id: 'artwork13',
                title: '缝隙中的生命',
                details: '混合媒体，2025年<br>尺寸可变',
                description: '在最不可能的地方绽放的生命力，展现顽强与希望的力量。',
                image: '5 Life in Cracks.jpeg'
            }
        }
    ];
    console.log('Default gallery content loaded:', galleryContent.length, 'artworks');
}

// Load site content from text file (optional - will use defaults if files don't exist)
async function loadSiteContent() {
    try {
        const responseEn = await fetch('content/site-content-en.txt');
        const textEn = await responseEn.text();
        
        let textZh = '';
        try {
            const responseZh = await fetch('content/site-content-zh.txt');
            textZh = await responseZh.text();
        } catch (error) {
            console.log('Chinese content file not found, using defaults');
        }
        
        parseSiteContent(textEn, textZh);
        updateSiteContent();
    } catch (error) {
        console.log('Content files not found, using defaults');
    }
}

// Load gallery content from text file (optional - will use defaults if files don't exist)
async function loadGalleryContent() {
    try {
        const responseEn = await fetch('content/gallery-content-en.txt');
        const textEn = await responseEn.text();
        
        let textZh = '';
        try {
            const responseZh = await fetch('content/gallery-content-zh.txt');
            textZh = await responseZh.text();
        } catch (error) {
            console.log('Chinese gallery content not found, using defaults');
        }
        
        parseGalleryContent(textEn, textZh);
        updateGalleryContent();
    } catch (error) {
        console.log('Gallery content files not found, using defaults');
    }
}

// Parse site content text file
function parseSiteContent(textEn, textZh = '') {
    siteContent = { en: {}, zh: {} };
    
    // Parse English content
    parseLanguageContent(textEn, 'en');
    
    // Parse Chinese content if available
    if (textZh) {
        parseLanguageContent(textZh, 'zh');
    }
}

function parseLanguageContent(text, lang) {
    const lines = text.split('\n');
    let currentSection = '';
    
    lines.forEach(line => {
        line = line.trim();
        if (line.startsWith('[') && line.endsWith(']')) {
            currentSection = line.slice(1, -1);
            siteContent[lang][currentSection] = '';
        } else if (line && currentSection) {
            siteContent[lang][currentSection] += line + '\n';
        }
    });
    
    // Clean up trailing newlines
    Object.keys(siteContent[lang]).forEach(key => {
        siteContent[lang][key] = siteContent[lang][key].trim();
    });
}

// Parse gallery content text file
function parseGalleryContent(textEn, textZh = '') {
    galleryContent = [];
    
    // Parse English content
    const galleryEn = parseGalleryLanguage(textEn);
    
    // Parse Chinese content
    const galleryZh = textZh ? parseGalleryLanguage(textZh) : galleryEn;
    
    // Combine both languages
    galleryEn.forEach((artworkEn, index) => {
        const artworkZh = galleryZh[index] || artworkEn;
        galleryContent.push({
            id: artworkEn.id,
            image: artworkEn.image,
            en: artworkEn,
            zh: artworkZh
        });
    });
}

function parseGalleryLanguage(text) {
    const lines = text.split('\n');
    const artworks = [];
    let currentArtwork = null;
    
    lines.forEach(line => {
        line = line.trim();
        if (line.startsWith('ARTWORK:')) {
            if (currentArtwork) {
                artworks.push(currentArtwork);
            }
            currentArtwork = {
                id: line.split(':')[1].trim(),
                title: '',
                details: '',
                description: '',
                image: ''
            };
        } else if (currentArtwork) {
            if (line.startsWith('TITLE:')) {
                currentArtwork.title = line.split(':')[1].trim();
            } else if (line.startsWith('DETAILS:')) {
                currentArtwork.details = line.split(':')[1].trim();
            } else if (line.startsWith('IMAGE:')) {
                currentArtwork.image = line.split(':')[1].trim();
            } else if (line.startsWith('DESCRIPTION:')) {
                currentArtwork.description = line.split(':')[1].trim();
            }
        }
    });
    
    if (currentArtwork) {
        artworks.push(currentArtwork);
    }
    
    return artworks;
}

// Update site content in HTML
function updateSiteContent() {
    const content = siteContent[currentLanguage] || siteContent.en;
    
    // Update hero description
    const heroDescription = document.getElementById('hero-description');
    if (heroDescription && content['hero-description']) {
        heroDescription.textContent = content['hero-description'];
    }
    
    // Update page title
    const titleSuffix = currentLanguage === 'zh' ? ' - 当代艺术家' : ' - Contemporary Artist';
    const artistName = currentLanguage === 'zh' ? '叶培基' : 'Pei Ji Ye';
    document.title = artistName + titleSuffix;
    
    // Update about section
    const aboutText = document.getElementById('about-text');
    if (aboutText && content['about-text']) {
        aboutText.innerHTML = content['about-text'];
    }
    
    // Update contact section
    const contactIntro = document.getElementById('contact-intro');
    if (contactIntro && content['contact-intro']) {
        contactIntro.textContent = content['contact-intro'];
    }
    updateContactInfo();

}

// Update contact information
function updateContactInfo() {
    const contactInfo = document.getElementById('contact-info');
    if (!contactInfo) return;
    
    const content = siteContent[currentLanguage] || siteContent.en;
    const email = content['contact-email'] || 'your-email@domain.com';  // ← Change default here
    const phone = content['contact-phone'] || 'your-phone-number';       // ← Change default here
    const address = content['contact-address'] || 'Your Address\\nCity, State ZIP'; // ← Change default here
    
    const emailLabel = currentLanguage === 'zh' ? '邮箱' : 'Email';
    const phoneLabel = currentLanguage === 'zh' ? '电话' : 'Phone';
    const studioLabel = currentLanguage === 'zh' ? '工作室' : 'Studio';
    
    contactInfo.innerHTML = `
        <div class="contact-item">
            <h3>${emailLabel}</h3>
            <p><a href="mailto:${email}">${email}</a></p>
        </div>
        
        <div class="contact-item">
            <h3>${phoneLabel}</h3>
            <p><a href="tel:${phone.replace(/\D/g, '')}">${phone}</a></p>
        </div>
        
        <div class="contact-item">
            <h3>${studioLabel}</h3>
            <p>${address.replace(/\\n/g, '<br>')}</p>
        </div>
    `;
}



// Update gallery content in HTML
function updateGalleryContent() {
    const galleryContainer = document.getElementById('gallery-container');
    if (!galleryContainer) return;
    
    galleryContainer.innerHTML = '';
    
    galleryContent.forEach(artwork => {
        const currentContent = artwork[currentLanguage] || artwork.en;
        
        const artworkElement = document.createElement('div');
        artworkElement.className = 'artwork-item fade-in';
        artworkElement.onclick = () => openLightbox(artwork.id);
        
        artworkElement.innerHTML = `
            <div class="artwork-image">
                <img src="images/gallery/${artwork.image}" alt="${currentContent.title}" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div class="placeholder-text" style="display: none;">Artwork Image</div>
            </div>
            <div class="artwork-info">
                <h3 class="artwork-title">${currentContent.title}</h3>
                <p class="artwork-details">${currentContent.details}<br>${currentContent.description}</p>
            </div>
        `;
        
        galleryContainer.appendChild(artworkElement);
    });
    
    // Re-initialize fade-in animations for new elements
    initializeAnimations();
}

// Language toggle functionality
function initializeLanguageToggle() {
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
    }
    
    // Update navigation on initial load
    updateNavigation();
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
    
    // Save preference
    localStorage.setItem('preferred-language', currentLanguage);
    
    // Update body class
    if (currentLanguage === 'zh') {
        document.body.classList.add('zh');
    } else {
        document.body.classList.remove('zh');
    }
    
    // Update all content
    updateSiteContent();
    updateGalleryContent();
    updateNavigation();

    updateContactInfo();
}

// Update navigation menu text
function updateNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a[data-en]');
    navLinks.forEach(link => {
        const englishText = link.getAttribute('data-en');
        const chineseText = link.getAttribute('data-zh');
        
        if (currentLanguage === 'zh' && chineseText) {
            link.textContent = chineseText;
        } else {
            link.textContent = englishText;
        }
    });
}

// Initialize event listeners
function initializeEventListeners() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navigation highlighting
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Close lightbox with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });

    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu) {
                navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            }
        });
    }
}

// Initialize fade-in animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Lightbox functionality
function openLightbox(artworkId) {
    const artwork = galleryContent.find(item => item.id === artworkId);
    if (!artwork) return;
    
    const currentContent = artwork[currentLanguage] || artwork.en;
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const title = document.getElementById('lightbox-title');
    const details = document.getElementById('lightbox-details');
    
    lightboxImg.src = `images/gallery/${artwork.image}`;
    lightboxImg.alt = currentContent.title;
    title.textContent = currentContent.title;
    details.innerHTML = `${currentContent.details}<br><br>${currentContent.description}`;
    
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}