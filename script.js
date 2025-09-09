document.addEventListener('DOMContentLoaded', () => {
    // --- 漢堡選單功能 (Mobile Navigation Toggle) ---
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const navLinks = mainNav.querySelectorAll('a'); // 獲取所有導航連結

    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        // 切換漢堡圖標 (Bars <-> Times)
        const icon = menuToggle.querySelector('i');
        if (mainNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // 點擊導航連結後收起選單 (適用於單頁應用)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) { // 確保只在手機模式下執行
                mainNav.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });


    // --- 導航欄滾動效果 (Sticky Header Effect) ---
    const header = document.getElementById('main-header');
    const scrollThreshold = 50; // 滾動多少像素後觸發效果

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


