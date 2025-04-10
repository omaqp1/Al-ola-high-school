document.addEventListener('DOMContentLoaded', function() {
    // تأثير تحميل العناصر
    gsap.from(".footer-grid > *", {// <!-- تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس -->
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,// <!-- تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس -->
        ease: "power2.out"
    });

    // تأثير عند التمرير
    window.addEventListener('scroll', function() {// <!-- تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس -->
        const footer = document.querySelector('.main-footer');// <!-- تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس -->
        const scrollPosition = window.pageYOffset;
        footer.style.backgroundPositionY = scrollPosition * 0.5 + 'px';// <!-- تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس -->
    });

    // تأثير اهتزاز الأيقونات
    const socialIcons = document.querySelectorAll('.social-icon');// <!-- تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس -->
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {// <!-- تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس -->
            icon.style.transform = 'scale(1.1) rotate(360deg)';// <!-- تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس -->
        });
        
        icon.addEventListener('mouseout', () => {// <!-- تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس -->
            icon.style.transform = 'scale(1) rotate(0deg)';// <!-- تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس -->
        });// <!-- تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس -->
    });// <!-- تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس -->
});// <!-- تصميم وإنشاء الموقع بواسطة الطالب عمر مهلوس -->