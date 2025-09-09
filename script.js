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
            const isActive = item.classList.contains('active');

            // 關閉所有其他已開啟的手風琴項目
            accordionHeaders.forEach(otherHeader => {
                const otherItem = otherHeader.parentElement;
                const otherContent = otherHeader.nextElementSibling;
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    // 確保其他內容也能正確收合
                    otherContent.style.maxHeight = '0';
                }
            });

            // 切換當前項目
            if (isActive) {
                // 如果是活躍狀態，要收合
                item.classList.remove('active');
                // 先設定為當前高度，再過渡到0
                content.style.maxHeight = content.scrollHeight + 'px';
                requestAnimationFrame(() => {
                    content.style.maxHeight = '0';
                });
            } else {
                // 如果是非活躍狀態，要展開
                item.classList.add('active');
                // 為了獲取正確的 scrollHeight，先暫時移除 max-height 讓內容自然撐開
                content.style.maxHeight = 'none'; // 讓內容撐開
                const fullHeight = content.scrollHeight; // 獲取完整高度 (包含 CSS 的 padding)
                content.style.maxHeight = '0'; // 立即縮回，不觸發過渡
                requestAnimationFrame(() => { // 在下一幀觸發過渡
                    content.style.maxHeight = fullHeight + 'px';
                });
            }
        });
    });
});
