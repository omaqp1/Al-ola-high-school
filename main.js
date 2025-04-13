// تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس
document.addEventListener('DOMContentLoaded', () => {
    // تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس
    initParticles();
    // تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس
    setupSidebar();
    // تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس
    setupSmoothScroll();
    // تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس
    setupScrollAnimations();
    // تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس
    updateCopyrightYear();
});
// تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس
function setupLanguageSwitcher() {
    const langTrigger = document.querySelector('.lang-trigger');/* Designed and developed by the student Omar Mahlous */
    const langMenu = document.querySelector('.lang-menu');
    
    // تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس
    langTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        langMenu.classList.toggle('active');
    });
    
    // تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-switcher')) {
            langMenu.classList.remove('active');
        }
    });/* Designed and developed by the student Omar Mahlous */
    
    // تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس
    document.querySelectorAll('.lang-item').forEach(item => {
        item.addEventListener('click', () => {
            langMenu.classList.remove('active');
        });
    });
}

// تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس
document.addEventListener('DOMContentLoaded', () => {
    // ...الكود السابق...
    setupLanguageSwitcher();
});
// تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');/* Designed and developed by the student Omar Mahlous */
    let particles = [];
    
    // تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    // تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس
    function createParticles() {
        particles = Array.from({ length: 80 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2,/* Designed and developed by the student Omar Mahlous */
            alpha: Math.random() * 0.5 + 0.3
        }));
    }
    
    // تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            if (particle.x > canvas.width + 50) particle.x = -50;
            if (particle.x < -50) particle.x = canvas.width + 50;
            if (particle.y > canvas.height + 50) particle.y = -50;
            if (particle.y < -50) particle.y = canvas.height + 50;/* Designed and developed by the student Omar Mahlous */
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 247, 255, ${particle.alpha})`;
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    
    window.addEventListener('resize', () => {
        resizeCanvas();
        createParticles();
    });
    /* Designed and developed by the student Omar Mahlous */
    resizeCanvas();
    createParticles();
    animate();
}

// تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس
function setupSidebar() {
    const sidebar = document.querySelector('.main-nav');
    const navToggle = document.querySelector('.nav-toggle');
    
    function toggleSidebar() {
        sidebar.classList.toggle('active');
        navToggle.classList.toggle('active');
    }
    
    document.addEventListener('click', (e) => {/* Designed and developed by the student Omar Mahlous */
        const isClickInside = sidebar.contains(e.target);
        const isToggleButton = e.target.closest('.nav-toggle');
        
        if (!isClickInside && !isToggleButton && sidebar.classList.contains('active')) {
            toggleSidebar();
        }
    });
    
    navToggle.addEventListener('click', toggleSidebar);
}

// تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {/* Designed and developed by the student Omar Mahlous */
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const headerOffset = 100;
            
            window.scrollTo({/* Designed and developed by the student Omar Mahlous */
                top: target.offsetTop - headerOffset,
                behavior: 'smooth'
            });
        });
    });
}

// تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس
function setupScrollAnimations() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');/* Designed and developed by the student Omar Mahlous */
    
    const observer = new IntersectionObserver((entries) => {/* Designed and developed by the student Omar Mahlous */
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });/* Designed and developed by the student Omar Mahlous */
    }, { threshold: 0.2 });
    
    animateElements.forEach(element => observer.observe(element));/* Designed and developed by the student Omar Mahlous */
}

// تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس
function updateCopyrightYear() {
    const yearElement = document.querySelector('.copyright-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }/* Designed and developed by the student Omar Mahlous */
}/* Designed and developed by the student Omar Mahlous */