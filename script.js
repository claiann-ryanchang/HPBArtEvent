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


    // --- 手風琴功能 (Accordion) ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = header.nextElementSibling;

            // 關閉所有其他已開啟的手風琴項目
            accordionHeaders.forEach(otherHeader => {
                const otherItem = otherHeader.parentElement;
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherHeader.nextElementSibling.style.maxHeight = '0';
                }
            });

            // 切換當前項目
            item.classList.toggle('active');

            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px'; // 展開
            } else {
                content.style.maxHeight = '0'; // 收合
            }
        });
    });
});

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

    // --- Image Modal (Lightbox) 功能 ---
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeButton = document.querySelector('.close-button');

    // 獲取所有可點擊的圖片 (作品圖和活動剪影圖)
    const clickableImages = document.querySelectorAll('.artwork-image, .gallery-item img');

    clickableImages.forEach(img => {
        img.addEventListener('click', function() {
            imageModal.classList.add('active'); // 顯示 Modal
            const fullSrc = this.dataset.fullsrc || this.src; // 優先使用 data-fullsrc，否則使用 src
            modalImage.src = fullSrc; // 設定 Modal 圖片來源
            captionText.innerHTML = this.alt; // 使用 alt 屬性作為圖片說明
            document.body.style.overflow = 'hidden'; // 禁止背景頁面滾動
        });
    });

    // 點擊關閉按鈕或 Modal 外部時關閉
    closeButton.addEventListener('click', () => {
        imageModal.classList.remove('active');
        document.body.style.overflow = ''; // 恢復背景頁面滾動
    });

    imageModal.addEventListener('click', (event) => {
        if (event.target === imageModal) { // 點擊 Modal 自身 (非圖片)
            imageModal.classList.remove('active');
            document.body.style.overflow = ''; // 恢復背景頁面滾動
        }
    });

    // 按下 ESC 鍵關閉 Modal
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && imageModal.classList.contains('active')) {
            imageModal.classList.remove('active');
            document.body.style.overflow = ''; // 恢復背景頁面滾動
        }
    });
});