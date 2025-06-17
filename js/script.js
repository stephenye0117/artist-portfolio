// Global variables
let siteContent = {};
let galleryContent = [];

// Load content when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadSiteContent();
    loadGalleryContent();
    initializeEventListeners();
    initializeAnimations();
});

// Load site content from text file
async function loadSiteContent() {
    try {
        const response = await fetch('content/site-content.txt');
        const text = await response.text();
        parseSiteContent(text);
        updateSiteContent();
    } catch (error) {
        console.log('Could not load site content, using defaults');
        useDefaultSiteContent();
    }
}

// Parse site content text file
function parseSiteContent(text) {
    const lines = text.split('\n');
    let currentSection = '';
    
    lines.forEach(line => {
        line = line.trim();
        if (line.startsWith('[') && line.endsWith(']')) {
            currentSection = line.slice(1, -1);
            siteContent[currentSection] = '';
        } else if (line && currentSection) {
            siteContent[currentSection] += line + '\n';
        }
    });
    
    // Clean up trailing newlines
    Object.keys(siteContent).forEach(key => {
        siteContent[key] = siteContent[key].trim();
    });
}

// Use default content if file not found
function useDefaultSiteContent() {
    siteContent = {
        'hero-title': 'Pei Ji Ye',
        'hero-description': 'Contemporary artist exploring the intersection of traditional techniques and modern expression through painting and mixed media',
        'about-text': `Pei Ji Ye is a contemporary artist whose work bridges the gap between traditional Eastern artistic philosophies and modern Western techniques. Born in 1985, Pei has spent over a decade developing a distinctive visual language that speaks to universal human experiences.

His paintings often explore themes of memory, place, and transformation, using a masterful combination of oil paints, mixed media, and unconventional materials. Drawing inspiration from both classical Chinese landscape painting and contemporary abstract expressionism, Pei creates works that are both deeply rooted in tradition and boldly innovative.

Pei holds an MFA from the prestigious Central Academy of Fine Arts in Beijing and has exhibited internationally in galleries across Asia, Europe, and North America. His work is held in private collections worldwide and continues to evolve as he explores new mediums and techniques.`,
        'contact-intro': 'For inquiries about exhibitions, commissions, or purchasing artwork, please reach out through any of the following methods.',
        'contact-email': 'info@peijiye.com',
        'contact-phone': '+1 (234) 567-8900',
        'contact-address': '123 Art District Lane\\nCreative Quarter, NY 10001',
        'social-instagram': '#',
        'social-facebook': '#',
        'social-linkedin': '#'
    };
}

// Update site content in HTML
function updateSiteContent() {
    // Update hero section
    const heroTitle = document.getElementById('hero-title');
    const heroDescription = document.getElementById('hero-description');
    const siteTitle = document.getElementById('site-title');
    const footerName = document.getElementById('footer-name');
    
    if (heroTitle && siteContent['hero-title']) {
        heroTitle.textContent = siteContent['hero-title'];
        siteTitle.textContent = siteContent['hero-title'];
        footerName.textContent = siteContent['hero-title'];
        document.title = siteContent['hero-title'] + ' - Contemporary Artist';
    }
    
    if (heroDescription && siteContent['hero-description']) {
        heroDescription.textContent = siteContent['hero-description'];
    }
    
    // Update about section
    const aboutText = document.getElementById('about-text');
    if (aboutText && siteContent['about-text']) {
        const paragraphs = siteContent['about-text'].split('\n\n');
        aboutText.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
    }
    
    // Update contact section
    const contactIntro = document.getElementById('contact-intro');
    if (contactIntro && siteContent['contact-intro']) {
        contactIntro.textContent = siteContent['contact-intro'];
    }
    
    // Update contact info
    updateContactInfo();
    
    // Update social links
    updateSocialLinks();
}

// Update contact information
function updateContactInfo() {
    const contactInfo = document.getElementById('contact-info');
    if (!contactInfo) return;
    
    const email = siteContent['contact-email'] || 'info@peijiye.com';
    const phone = siteContent['contact-phone'] || '+1 (234) 567-8900';
    const address = siteContent['contact-address'] || '123 Art District Lane\\nCreative Quarter, NY 10001';
    
    contactInfo.innerHTML = `
        <div class="contact-item">
            <h3>Email</h3>
            <p><a href="mailto:${email}">${email}</a></p>
        </div>
        
        <div class="contact-item">
            <h3>Phone</h3>
            <p><a href="tel:${phone.replace(/\D/g, '')}">${phone}</a></p>
        </div>
        
        <div class="contact-item">
            <h3>Studio</h3>
            <p>${address.replace(/\\n/g, '<br>')}</p>
        </div>
    `;
}

// Update social links
function updateSocialLinks() {
    const socialLinks = document.getElementById('social-links');
    if (!socialLinks) return;
    
    const instagram = siteContent['social-instagram'] || '#';
    const facebook = siteContent['social-facebook'] || '#';
    const linkedin = siteContent['social-linkedin'] || '#';
    
    socialLinks.innerHTML = `
        <a href="${instagram}" target="_blank">Instagram</a>
        <a href="${facebook}" target="_blank">Facebook</a>
        <a href="${linkedin}" target="_blank">LinkedIn</a>
    `;
}

// Load gallery content from text file
async function loadGalleryContent() {
    try {
        const response = await fetch('content/gallery-content.txt');
        const text = await response.text();
        parseGalleryContent(text);
        updateGalleryContent();
    } catch (error) {
        console.log('Could not load gallery content, using defaults');
        useDefaultGalleryContent();
        updateGalleryContent();
    }
}

// Parse gallery content text file
function parseGalleryContent(text) {
    const lines = text.split('\n');
    let currentArtwork = null;
    
    lines.forEach(line => {
        line = line.trim();
        if (line.startsWith('ARTWORK:')) {
            if (currentArtwork) {
                galleryContent.push(currentArtwork);
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
        galleryContent.push(currentArtwork);
    }
}

// Use default gallery content if file not found
function useDefaultGalleryContent() {
    galleryContent = [
        {
            id: 'artwork1',
            title: 'Ethereal Landscapes I',
            details: 'Oil on canvas, 2024<br>36" × 48"',
            description: 'A meditation on nature\'s fleeting moments',
            image: 'artwork1.jpg'
        },
        {
            id: 'artwork2',
            title: 'Urban Reflections',
            details: 'Acrylic and mixed media, 2024<br>30" × 40"',
            description: 'City life through abstract interpretation',
            image: 'artwork2.jpg'
        },
        {
            id: 'artwork3',
            title: 'Memory Fragments',
            details: 'Oil and charcoal, 2023<br>24" × 32"',
            description: 'Exploring the nature of recollection',
            image: 'artwork3.jpg'
        },
        {
            id: 'artwork4',
            title: 'Chromatic Studies',
            details: 'Watercolor series, 2023<br>12" × 16" each',
            description: 'Color theory in practice',
            image: 'artwork4.jpg'
        },
        {
            id: 'artwork5',
            title: 'Convergence',
            details: 'Mixed media on wood, 2024<br>48" × 60"',
            description: 'Where tradition meets innovation',
            image: 'artwork5.jpg'
        },
        {
            id: 'artwork6',
            title: 'Silent Conversations',
            details: 'Oil on linen, 2023<br>40" × 50"',
            description: 'Dialogue without words',
            image: 'artwork6.jpg'
        }
    ];
}

// Update gallery content in HTML
function updateGalleryContent() {
    const galleryContainer = document.getElementById('gallery-container');
    if (!galleryContainer) return;
    
    galleryContainer.innerHTML = '';
    
    galleryContent.forEach(artwork => {
        const artworkElement = document.createElement('div');
        artworkElement.className = 'artwork-item fade-in';
        artworkElement.onclick = () => openLightbox(artwork.id);
        
        artworkElement.innerHTML = `
            <div class="artwork-image">
                <img src="images/gallery/${artwork.image}" alt="${artwork.title}" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div class="placeholder-text" style="display: none;">Artwork Image</div>
            </div>
            <div class="artwork-info">
                <h3 class="artwork-title">${artwork.title}</h3>
                <p class="artwork-details">${artwork.details}<br>${artwork.description}</p>
            </div>
        `;
        
        galleryContainer.appendChild(artworkElement);
    });
    
    // Re-initialize fade-in animations for new elements
    initializeAnimations();
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
    document.querySelector('.mobile-menu-toggle').addEventListener('click', () => {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
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
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const title = document.getElementById('lightbox-title');
    const details = document.getElementById('lightbox-details');
    
    lightboxImg.src = `images/gallery/${artwork.image}`;
    lightboxImg.alt = artwork.title;
    title.textContent = artwork.title;
    details.innerHTML = `${artwork.details}<br><br>${artwork.description}`;
    
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}