// scripts/main.js

// Đảm bảo DOM đã tải xong trước khi gắn sự kiện
document.addEventListener('DOMContentLoaded', function() {
    const menuOpenBtn = document.getElementById('menuOpenBtn');
    const menuCloseBtn = document.getElementById('menuCloseBtn');
    const menuDrawer = document.getElementById('menuDrawer');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuLinks = document.querySelectorAll('.menu-list .menu-link, .menu-cta');

    function openMenu() {
        if (menuDrawer && menuOverlay) {
            menuDrawer.classList.add('active');
            menuOverlay.classList.add('active');
            // Khóa cuộn trang khi mở menu
            document.body.style.overflow = 'hidden'; 
        }
    }

    function closeMenu() {
        if (menuDrawer && menuOverlay) {
            menuDrawer.classList.remove('active');
            menuOverlay.classList.remove('active');
            // Mở lại cuộn trang
            document.body.style.overflow = ''; 
        }
    }

    // Gắn sự kiện click có kèm kiểm tra an toàn (tránh lỗi nếu trang thiếu nút)
    if (menuOpenBtn) menuOpenBtn.addEventListener('click', openMenu);
    if (menuCloseBtn) menuCloseBtn.addEventListener('click', closeMenu);
    if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);
    
    if (menuLinks) {
        menuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
});