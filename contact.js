// تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس
document.addEventListener('DOMContentLoaded', function() {
    // تأثير تحميل العناصر
    gsap.from(".footer-grid > *", {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: "power2.out"
    });

    // تأثير عند التمرير
    window.addEventListener('scroll', function() {
        const footer = document.querySelector('.main-footer');
        const scrollPosition = window.pageYOffset;
        footer.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });

    // تأثير اهتزاز الأيقونات
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'scale(1.1) rotate(360deg)';
        });
        
        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});