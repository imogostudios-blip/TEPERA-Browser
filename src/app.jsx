const appHTML = `<div class="top-loader" id="topLoader"></div>

    <!-- Gray overlay for search mode -->
    <div class="search-gray-overlay" id="searchGrayOverlay"></div>

    <div class="floating-search-bar" id="floatingSearchBar">
        <form action="https://www.google.com/search" class="search-bar-form" method="get" onsubmit="handleSearch(event, this)" target="_blank">
            <div class="ts-logo" aria-hidden="true"><span class="ts-t">T</span><span class="ts-s">S</span></div>
            <input class="search-bar-input" id="floatingSearchInput" name="q" placeholder="البحث او إدخال عنوان URL" type="text"/>
            <button class="search-submit-btn" type="submit" aria-label="بحث">
                <svg class="search-icon-svg search-lens-icon" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                <svg class="search-icon-svg search-arrow-icon" viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></svg>
            </button>
        </form>
    </div>

    <div class="sidebar-overlay" id="sidebarOverlay" onclick="toggleMenu()"></div>

    <div class="side-menu" id="sideMenu">
        <div class="side-menu-header">
            <span class="side-menu-title">TEPERA Browser</span>
            <button class="close-menu-btn" onclick="toggleMenu()">
                <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
            </button>
        </div>

        <div class="popup-actions">
            <button class="popup-action-btn" type="button" aria-label="تحديث" onclick="location.reload()">
                <svg viewBox="0 0 24 24"><path d="M17.65 6.35A7.95 7.95 0 0 0 12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></svg>
            </button>
            <button class="popup-action-btn" type="button" aria-label="معلومات" onclick="showInProgress()">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg>
            </button>
            <button class="popup-action-btn" type="button" aria-label="تنزيل" onclick="showInProgress()">
                <svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></svg>
            </button>
            <button class="popup-action-btn" type="button" aria-label="المفضلة" onclick="showInProgress()">
                <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
            </button>
            <button class="popup-action-btn" type="button" aria-label="إغلاق" onclick="toggleMenu()">
                <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
            </button>
        </div>

        <button class="menu-item" onclick="toggleTheme()">
            <div class="theme-circle-svg">
                <div class="half-white"></div>
                <div class="half-black"></div>
            </div>
            <span>تبديل الوضع (داكن/فاتح)</span>
        </button>

        <div class="menu-divider"></div>

        <button class="menu-item" onclick="showInProgress()">
            <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></svg>
            <span>علامة تبويب جديدة</span>
        </button>
        <button class="menu-item" onclick="showInProgress()">
            <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H9v-2h6v2z"></path></svg>
            <span>علامة تبويب للتصفح المتخفي</span>
        </button>
        <button class="menu-item" onclick="showInProgress()">
            <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></svg>
            <span>الإضافة إلى مجموعة جديدة</span>
        </button>
        <button class="menu-item" onclick="showInProgress()">
            <svg viewBox="0 0 24 24"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></svg>
            <span>السجل</span>
        </button>
        <button class="menu-item" onclick="showInProgress()">
            <svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
            <span>حذف بيانات التصفح</span>
        </button>
        <button class="menu-item" onclick="showInProgress()">
            <svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></svg>
            <span>عمليات التنزيل</span>
        </button>
        <button class="menu-item" onclick="showInProgress()">
            <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
            <span>الإشارات المرجعية</span>
        </button>
        <button class="menu-item" onclick="showInProgress()">
            <svg viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"></path></svg>
            <span>علامات التبويب الأخيرة</span>
        </button>
        <button class="menu-item" onclick="openSettings()">
            <svg viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"></path></svg>
            <span>الإعدادات</span>
        </button>
        <button class="menu-item" onclick="showInProgress()">
            <svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>
            <span>تخصيص علامة تبويب جديدة</span>
        </button>
        <button class="menu-item" onclick="showInProgress()">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.02-.42 1.95-1.07 2.75z"></path></svg>
            <span>المساعدة والملاحظات</span>
        </button>
    </div>

    <div class="main-container">
        <div class="search-section">
            <button aria-label="فتح القائمة" class="menu-trigger-btn" id="menuTriggerBtn" onclick="toggleMenu()">
                <svg viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
            </button>

            <!-- زر محرك البحث -->
            <button aria-label="تغيير محرك البحث" class="menu-trigger-btn" id="searchEngineBtn" onclick="showSearchEngineSelector()" style="left: 72px;">
                <svg fill="#e3e3e3" height="24px" viewBox="0 -960 960 960" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M324-111.5Q251-143 197-197t-85.5-127Q80-397 80-480t31.5-156Q143-709 197-763t127-85.5Q397-880 480-880t156 31.5Q709-817 763-763t85.5 127Q880-563 880-480t-31.5 156Q817-251 763-197t-127 85.5Q563-80 480-80t-156-31.5ZM440-162v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q41-45 62.5-100.5T800-480q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z"></path></svg>
            </button>

            <div class="brand-logo-wrap">
                <h1 class="brand-logo"><span class="logo-t">T</span><span class="logo-e1">e</span><span class="logo-p">p</span><span class="logo-e2">e</span><span class="logo-r">r</span><span class="logo-a">a</span></h1>
            </div>

            <div class="search-container-box" id="mainSearchBox">
                <form action="https://www.google.com/search" class="search-bar-form" method="get" onsubmit="handleSearch(event, this)" target="_blank">
                    <div class="ts-logo" aria-hidden="true"><span class="ts-t">T</span><span class="ts-s">S</span></div>
                    <input class="search-bar-input" id="searchInput" name="q" placeholder="البحث او إدخال عنوان URL" type="text"/>
                    <button class="search-submit-btn" type="submit" aria-label="بحث">
                        <svg class="search-icon-svg search-lens-icon" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                        <svg class="search-icon-svg search-arrow-icon" viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></svg>
                    </button>
                </form>
                
                <div class="action-buttons-row">
                    <a class="action-btn" href="https://gemini.google.com" onclick="showTopLoader()" target="_blank">
                        <svg height="960" viewBox="0 0 24 24" width="960" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" fill="#1a73e8"></path>
                        </svg>
                        <span>Gemini</span>
                    </a>
                    <a class="action-btn" href="https://apkdroid30.blogspot.com/" onclick="showTopLoader()" target="_blank">
                        <svg fill="#e3e3e3" height="48px" viewBox="0 -960 960 960" width="48px" xmlns="http://www.w3.org/2000/svg"><path d="M160-740v-60h642v60H160Zm5 580v-258h-49v-60l44-202h641l44 202v60h-49v258h-60v-258H547v258H165Zm60-60h262v-198H225v198Zm-50-258h611-611Zm0 0h611l-31-142H206l-31 142Z"></path></svg>
                        <span>APKDroid</span>
                    </a>
                </div>
            </div>
        </div>

        <div class="shortcuts-section" id="shortcutsContainer">
            <!-- YouTube -->
            <a class="shortcut-card" href="https://www.youtube.com" onclick="showTopLoader()" target="_blank">
                <svg height="960" viewBox="0 0 24 24" width="960" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FF0000"></path>
                </svg>
                <span class="shortcut-label">YouTube</span>
            </a>
            
            <!-- Facebook -->
            <a class="shortcut-card" href="https://www.facebook.com" onclick="showTopLoader()" target="_blank">
                <svg height="960" viewBox="0 0 24 24" width="960" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"></path>
                </svg>
                <span class="shortcut-label">Facebook</span>
            </a>
            
            <!-- Google -->
            <a class="shortcut-card" href="https://www.google.com" onclick="showTopLoader()" target="_blank">
                <svg height="960" viewBox="0 0 48 48" width="960" xmlns="http://www.w3.org/2000/svg"><path d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" fill="#EA4335"></path><path d="M46.88 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" fill="#4285F4"></path><path d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" fill="#FBBC05"></path><path d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" fill="#34A853"></path><path d="M0 0h48v48H0z" fill="none"></path></svg>
                <span class="shortcut-label">Google</span>
            </a>
            
            <!-- Instagram -->
            <a class="shortcut-card" href="https://www.instagram.com" onclick="showTopLoader()" target="_blank">
                <svg height="960" viewBox="0 0 24 24" width="960" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient cx="30%" cy="107%" id="ig-grad" r="150%">
                            <stop offset="0%" stop-color="#fdf497"></stop>
                            <stop offset="5%" stop-color="#fdf497"></stop>
                            <stop offset="45%" stop-color="#fd5949"></stop>
                            <stop offset="60%" stop-color="#d6249f"></stop>
                            <stop offset="90%" stop-color="#285AEB"></stop>
                        </radialGradient>
                    </defs>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="url(#ig-grad)"></path>
                </svg>
                <span class="shortcut-label">Instagram</span>
            </a>
            
            <!-- Minecraft -->
            <a class="shortcut-card" href="https://www.minecraft.net" onclick="showTopLoader()" target="_blank">
                <svg fill="#e3e3e3" height="24px" viewBox="0 -960 960 960" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z"></path></svg>
                <span class="shortcut-label">Minecraft</span>
            </a>
            
            <!-- MCPE DN -->
            <a class="shortcut-card" href="https://mcpecraftshome.blogspot.com/" onclick="showTopLoader()" target="_blank">
                <svg fill="#e3e3e3" height="24px" viewBox="0 -960 960 960" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M400-160h160v-160H400v160ZM160-400h160v-160H160v160Zm240 0h160v-160H400v160Zm240 0h160v-160H640v160Zm0-240h160v-160H640v160ZM320-80v-240H80v-320h480v-240h320v560H640v240H320Z"></path></svg>
                <span class="shortcut-label">MCPE DN</span>
            </a>
            
            <!-- زر + الجديد -->
            <a class="shortcut-card add-shortcut-btn" href="javascript:void(0);" onclick="startAddShortcut(event)">
                <svg fill="none" height="36" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
                <span class="shortcut-label">إضافة</span>
            </a>
        </div>

        <div class="content-area">
            <div class="welcome-box">
                <h2>مرحباً بك في TEPERA</h2>
                <p>متصفح شخصي بسيط. استخدم شريط البحث أو الاختصارات للبدء.<br>يمكنك تفعيل القفل والحماية من قائمة الإعدادات.</p>
            </div>
        </div>

        <!-- قسم الفيديوهات العشوائية -->
        <div class="videos-section" id="videosSection">
            <div class="videos-section-title" style="justify-content: space-between;">
                <div style="display:flex;align-items:center;gap:10px;">
                    <svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
                    <span>فيديوهات عشوائية</span>
                </div>
                <button aria-label="تحديث الفيديوهات" onclick="renderVideosList()" style="background:var(--card-bg);border:none;border-radius:50%;width:38px;height:38px;display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;">
                    <svg fill="var(--text-color)" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></svg>
                </button>
            </div>
            <div id="videosList"></div>
        </div>

        <!-- قسم الألعاب / التطبيقات -->
        <div class="apps-section" id="appsSection">
            <div class="apps-tabs">
                <button class="apps-tab active" id="tabGames" onclick="switchAppsTab('games')">
                    <svg viewBox="0 0 24 24"><path d="M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"></path></svg>
                    ألعاب
                </button>
                <button class="apps-tab" id="tabApps" onclick="switchAppsTab('apps')">
                    <svg viewBox="0 0 24 24"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></svg>
                    تطبيقات
                </button>
            </div>
            <div class="apps-grid" id="appsGrid">
                <div class="apps-loading">جاري التحميل...</div>
            </div>
        </div>
    </div>

    <!-- App Detail Overlay -->
    <div class="app-detail-overlay" id="appDetailOverlay">
        <div class="app-detail-header">
            <button class="player-back-btn" onclick="closeAppDetail()">
                <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
            </button>
            <div class="player-header-title" id="appDetailHeaderTitle">تفاصيل التطبيق</div>
        </div>
        <div class="app-detail-body" id="appDetailBody"></div>
    </div>

    <!-- Video Player Overlay -->
    <div class="video-player-overlay" id="videoPlayerOverlay">
        <div class="player-header">
            <button class="player-back-btn" onclick="closeVideoPlayer()">
                <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
            </button>
            <div class="player-header-title" id="playerHeaderTitle">فيديو</div>
        </div>
        <div class="player-iframe-wrap" id="playerIframeWrap"></div>
        <div class="player-body">
            <div class="player-video-title" id="playerVideoTitle"></div>
            <div class="player-actions" id="playerActions"></div>
            <div class="player-extra-section">
                <div class="extra-section-title">إعدادات الفيديو</div>

                <div class="settings-group">
                    <div class="settings-group-label">التنقل بين المقاطع</div>
                    <div class="nav-row">
                        <button class="nav-btn" onclick="playPrevVideo()">
                            <svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></path></svg>
                            <span>السابق</span>
                        </button>
                        <button class="nav-btn" onclick="playNextVideo()">
                            <span>التالي</span>
                            <svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></path></svg>
                        </button>
                    </div>
                    <div class="now-playing-count" id="nowPlayingCount"></div>
                </div>

                <div class="settings-group">
                    <div class="settings-group-label">سرعة التشغيل</div>
                    <div class="speed-options" id="speedOptions">
                        <button class="speed-btn" data-speed="0.5" onclick="setVideoSpeed(0.5)">0.5x</button>
                        <button class="speed-btn" data-speed="0.75" onclick="setVideoSpeed(0.75)">0.75x</button>
                        <button class="speed-btn active" data-speed="1" onclick="setVideoSpeed(1)">1x</button>
                        <button class="speed-btn" data-speed="1.25" onclick="setVideoSpeed(1.25)">1.25x</button>
                        <button class="speed-btn" data-speed="1.5" onclick="setVideoSpeed(1.5)">1.5x</button>
                        <button class="speed-btn" data-speed="2" onclick="setVideoSpeed(2)">2x</button>
                    </div>
                </div>

                <div class="settings-group">
                    <div class="toggle-row">
                        <span>تشغيل المقطع التالي تلقائياً</span>
                        <div class="toggle-switch on" id="autoplayToggle" onclick="toggleAutoplayNext()"></div>
                    </div>
                    <div class="toggle-row">
                        <span>الوضع الداكن / الفاتح</span>
                        <div class="toggle-switch" id="playerThemeToggle" onclick="toggleThemeFromPlayer()"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

const appJS = `
        const mainInput = document.getElementById('searchInput');
        const floatingInput = document.getElementById('floatingSearchInput');

        function updateSearchSubmitIcons() {
            const value = ((mainInput && mainInput.value) || (floatingInput && floatingInput.value) || '').trim();
            document.querySelectorAll('.search-bar-form').forEach(function(form) {
                form.classList.toggle('has-query', value.length > 0);
            });
        }

        if(mainInput && floatingInput) {
            mainInput.addEventListener('input', function() {
                floatingInput.value = mainInput.value;
                updateSearchSubmitIcons();
            });
            floatingInput.addEventListener('input', function() {
                mainInput.value = floatingInput.value;
                updateSearchSubmitIcons();
            });
        } else if (mainInput) {
            mainInput.addEventListener('input', updateSearchSubmitIcons);
        } else if (floatingInput) {
            floatingInput.addEventListener('input', updateSearchSubmitIcons);
        }
        updateSearchSubmitIcons();

        let searchHistory = JSON.parse(localStorage.getItem('teperaSearchHistory') || '[]');

        function saveSearch(query) {
            if (!query || query.trim() === '') return;
            query = query.trim();
            searchHistory = searchHistory.filter(q => q !== query);
            searchHistory.unshift(query);
            if (searchHistory.length > 15) searchHistory.pop();
            localStorage.setItem('teperaSearchHistory', JSON.stringify(searchHistory));
        }

        function populateSearchHistory(panel) {
            panel.innerHTML = '';
            searchHistory = JSON.parse(localStorage.getItem('teperaSearchHistory') || '[]');
            if (searchHistory.length === 0) {
                const emptyRow = document.createElement('div');
                emptyRow.style.cssText = 'display:flex; align-items:center; gap:10px; padding:12px 4px; color:#888; font-size:14px;';
                const iconSpan = document.createElement('span');
                iconSpan.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" fill="#888"></path></svg>';
                iconSpan.style.cssText = 'flex-shrink:0; display:flex;';
                const txt = document.createElement('span');
                txt.textContent = 'لا توجد عمليات بحث سابقة';
                emptyRow.appendChild(iconSpan);
                emptyRow.appendChild(txt);
                panel.appendChild(emptyRow);
                return;
            }
            searchHistory.forEach((query, idx) => {
                const row = document.createElement('div');
                row.style.cssText = 'display: flex; align-items: center; padding: 10px 4px; cursor: pointer;';

                const text = document.createElement('div');
                text.style.cssText = 'flex: 1; color: #fff; font-size: 15px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; transition: color .15s;';
                text.textContent = query;
                text.onmouseenter = () => { text.style.color = '#4da3ff'; };
                text.onmouseleave = () => { text.style.color = '#fff'; };
                text.onclick = (ev) => {
                    ev.stopPropagation();
                    const inp = document.getElementById('searchInput');
                    if (inp) {
                        inp.value = query;
                        if (floatingInput) floatingInput.value = query;
                        inp.focus();
                        updateSearchSubmitIcons();
                    }
                };
                row.appendChild(text);

                const delBtn = document.createElement('button');
                delBtn.style.cssText = 'background: none; border: none; padding: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center;';
                delBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#888"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>';
                delBtn.onclick = (ev) => {
                    ev.stopPropagation();
                    searchHistory.splice(idx, 1);
                    localStorage.setItem('teperaSearchHistory', JSON.stringify(searchHistory));
                    populateSearchHistory(panel);
                };
                row.appendChild(delBtn);
                panel.appendChild(row);
            });
        }

        function closeSearchMode() {
            const searchBox = document.getElementById('mainSearchBox');
            const overlay = document.getElementById('searchGrayOverlay');
            const historyPanel = document.getElementById('searchHistoryPanel');

            if (searchBox) {
                searchBox.style.transition = '';
                searchBox.style.position = '';
                searchBox.style.top = '';
                searchBox.style.left = '';
                searchBox.style.width = '';
                searchBox.style.transform = '';
                searchBox.style.zIndex = '';
                searchBox.style.boxShadow = '';
                searchBox.classList.remove('raised');
            }
            if (overlay) {
                overlay.style.transition = '';
                overlay.style.opacity = '0';
                overlay.style.display = 'none';
            }
            if (historyPanel) historyPanel.style.display = 'none';
        }

        function showSearchMode() {
            const searchBox = document.getElementById('mainSearchBox');
            const overlay = document.getElementById('searchGrayOverlay');
            if (!searchBox || !overlay) return;
            if (searchBox.classList.contains('raised')) return;

            const rect = searchBox.getBoundingClientRect();
            searchBox.style.position = 'fixed';
            searchBox.style.top = rect.top + 'px';
            searchBox.style.left = rect.left + 'px';
            searchBox.style.width = rect.width + 'px';
            searchBox.style.zIndex = '10001';
            searchBox.style.transition = 'top 0.45s cubic-bezier(0.4, 0, 0.2, 1)';
            searchBox.classList.add('raised');

            overlay.style.display = 'block';
            overlay.style.transition = 'opacity 0.45s ease';
            void overlay.offsetHeight;
            overlay.style.opacity = '1';

            setTimeout(() => {
                searchBox.style.top = '60px';
                searchBox.style.left = '50%';
                searchBox.style.transform = 'translateX(-50%)';
                searchBox.style.width = 'calc(100% - 40px)';
                searchBox.style.maxWidth = '820px';
            }, 20);

            let historyPanel = document.getElementById('searchHistoryPanel');
            if (!historyPanel) {
                historyPanel = document.createElement('div');
                historyPanel.id = 'searchHistoryPanel';
                historyPanel.className = 'search-history-panel';
                document.body.appendChild(historyPanel);
            }

            setTimeout(() => {
                const finalRect = searchBox.getBoundingClientRect();
                historyPanel.style.top = (finalRect.bottom + 12) + 'px';
                historyPanel.style.left = '50%';
                historyPanel.style.transform = 'translateX(-50%)';
                historyPanel.style.display = 'block';
                populateSearchHistory(historyPanel);
            }, 480);
        }

        if (mainInput) {
            mainInput.addEventListener('focus', function() {
                showSearchMode();
            });
        }

        const grayOverlay = document.getElementById('searchGrayOverlay');
        if (grayOverlay) {
            grayOverlay.addEventListener('click', function() {
                closeSearchMode();
            });
        }

        function handleSearch(event, form) {
            var input = (form.querySelector('input').value || '').trim();
            var loader = document.getElementById('topLoader');
            
            if (input) {
                saveSearch(input);
            }
            loader.classList.add('active');
            closeSearchMode();

            if (isSHEDEnabled() && input && input.indexOf(' ') === -1 && input.indexOf('http://') !== 0 && input.indexOf('https://') !== 0) {
                if (input.indexOf('.') > 0) {
                    input = 'https://' + input;
                } else {
                    input = 'https://' + input + '.com';
                }
            }

            let isDirectUrl = false;
            let finalUrl = '';
            if (input.indexOf('http://') === 0 || input.indexOf('https://') === 0 || (input.indexOf('.') > 0 && input.indexOf(' ') === -1)) {
                isDirectUrl = true;
                finalUrl = input.indexOf('http') === 0 ? input : 'https://' + input;
            }

            if (isDirectUrl) {
                const host = normalizeUrl(finalUrl);

                const blocked = getBlockedSites();
                if (blocked.some(b => host === b || host.endsWith('.' + b) || b.endsWith('.' + host))) {
                    event.preventDefault();
                    alert('هذا الموقع محظور. اذهب إلى الإعدادات ← المواقع المحظورة لإلغاء الحظر.');
                    loader.classList.remove('active');
                    return;
                }

                const siteLocks = getSiteLocks();
                const isLockedSite = siteLocks.some(b => host === b || host.endsWith('.' + b) || b.endsWith('.' + host));
                if (isLockedSite) {
                    const appLock = getAppLock();
                    if (appLock && appLock.enabled) {
                        event.preventDefault();
                        showLockScreen(appLock, function() {
                            window.open(finalUrl, '_blank');
                        });
                        loader.classList.remove('active');
                        return;
                    }
                }

                event.preventDefault();
                window.open(finalUrl, '_blank');
            } else {
                event.preventDefault();
                const cfg = searchEngineConfig[currentSearchEngine] || searchEngineConfig['google'];
                const q = encodeURIComponent(input);
                const searchUrl = cfg.url + (cfg.url.indexOf('?') > -1 ? '&' : '?') + cfg.param + '=' + q;
                window.open(searchUrl, '_blank');
            }
        }

        function showTopLoader() {
            document.getElementById('topLoader').classList.add('active');
        }

        window.addEventListener('scroll', function() {
            var scrollPos = window.scrollY || document.documentElement.scrollTop;
            var mainBox = document.getElementById('mainSearchBox');
            var floatingBar = document.getElementById('floatingSearchBar');
            
            if (mainBox) {
                var triggerHeight = mainBox.offsetTop + mainBox.offsetHeight;
                if (scrollPos > triggerHeight) {
                    floatingBar.classList.add('visible');
                } else {
                    floatingBar.classList.remove('visible');
                }
            }
        });

        function toggleMenu() {
            var menu = document.getElementById('sideMenu');
            var overlay = document.getElementById('sidebarOverlay');
            var btn = document.getElementById('menuTriggerBtn');
            var opening = !menu.classList.contains('active');
            if (opening) {
                menu.style.top = '6px';
                menu.style.left = '6px';
            }
            menu.classList.toggle('active');
            overlay.classList.toggle('active');
        }

        function showInProgress() {
            alert('قيد الإنشاء');
            toggleMenu();
        }

        function applyThemeToggle() {
            var body = document.body;
            var currentTheme = body.getAttribute('data-theme');
            var newTheme = currentTheme === 'light' ? 'dark' : 'light';
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        }

        function toggleTheme() {
            applyThemeToggle();
            toggleMenu();
        }

        function toggleThemeFromPlayer() {
            applyThemeToggle();
            updatePlayerThemeToggleUI();
        }

        (function() {
            var savedTheme = localStorage.getItem('theme') || 'dark';
            document.body.setAttribute('data-theme', savedTheme);
        })();

        let currentSearchEngine = localStorage.getItem('searchEngine') || 'google';

        const searchEngineConfig = {
            'google': { url: 'https://www.google.com/search', param: 'q' },
            'yahoo': { url: 'https://search.yahoo.com/search', param: 'p' },
            'facebook': { url: 'https://www.facebook.com/search/top/', param: 'q' },
            'youtube': { url: 'https://www.youtube.com/results', param: 'search_query' }
        };

        function setSearchEngine(engine) {
            currentSearchEngine = engine;
            localStorage.setItem('searchEngine', engine);
        }

        function showSearchEngineSelector() {
            const existing = document.getElementById('searchEnginePopup');
            if (existing) existing.remove();

            const popup = document.createElement('div');
            popup.id = 'searchEnginePopup';
            popup.style.cssText = 'position:fixed;top:70px;left:20px;background:var(--card-bg);border-radius:16px;box-shadow:0 8px 30px rgba(0,0,0,0.5);z-index:10030;padding:16px;min-width:220px;color:var(--text-color);';

            const title = document.createElement('div');
            title.style.cssText = 'font-weight:700;font-size:16px;margin-bottom:12px;text-align:center;';
            title.textContent = 'محرك البحث';
            popup.appendChild(title);

            const list = document.createElement('div');
            list.style.cssText = 'display:flex;flex-direction:column;gap:8px;';

            const engines = [
                { key: 'google', label: 'Google' },
                { key: 'yahoo', label: 'Yahoo' },
                { key: 'facebook', label: 'Facebook' },
                { key: 'youtube', label: 'YouTube' }
            ];

            engines.forEach(item => {
                const row = document.createElement('div');
                row.style.cssText = 'padding:10px 14px;border-radius:10px;cursor:pointer;display:flex;align-items:center;gap:10px;';
                row.style.background = (currentSearchEngine === item.key) ? '#1a73e8' : 'var(--card-hover)';
                row.style.color = (currentSearchEngine === item.key) ? 'white' : 'var(--text-color)';

                const labelSpan = document.createElement('span');
                labelSpan.style.flex = '1';
                labelSpan.textContent = item.label;
                row.appendChild(labelSpan);

                if (currentSearchEngine === item.key) {
                    const check = document.createElement('span');
                    check.style.color = 'white';
                    check.textContent = '✓';
                    row.appendChild(check);
                }

                row.onclick = function() {
                    selectSearchEngine(item.key, row, popup);
                };
                list.appendChild(row);
            });

            popup.appendChild(list);
            document.body.appendChild(popup);

            setTimeout(() => {
                document.addEventListener('click', function handler(ev) {
                    if (!popup.contains(ev.target) && ev.target.id !== 'menuTriggerBtn' && ev.target.id !== 'searchEngineBtn') {
                        popup.remove();
                        document.removeEventListener('click', handler);
                    }
                }, { once: true });
            }, 100);
        }

        function selectSearchEngine(engine, rowElement, popup) {
            popup.querySelectorAll('div[style*="border-radius:10px"]').forEach(r => {
                r.style.background = 'var(--card-hover)';
                r.style.color = 'var(--text-color)';
                const chk = r.querySelector('span:last-child');
                if (chk && chk.textContent === '✓') chk.remove();
            });

            rowElement.style.background = '#1a73e8';
            rowElement.style.color = 'white';
            const check = document.createElement('span');
            check.style.color = 'white';
            check.textContent = '✓';
            rowElement.appendChild(check);

            setSearchEngine(engine);
            setTimeout(() => { popup.remove(); }, 250);
        }

        const defaultIconSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>';

        function createCustomShortcutCard(short) {
            const card = document.createElement('div');
            card.className = 'shortcut-card custom-shortcut';
            card.onclick = function(e) {
                e.preventDefault();
                showShortcutActions(card, short);
            };

            let iconEl;
            if (short.icon) {
                iconEl = document.createElement('img');
                iconEl.src = short.icon;
            } else {
                const wrapper = document.createElement('div');
                wrapper.innerHTML = defaultIconSvg;
                iconEl = wrapper.firstElementChild;
            }
            card.appendChild(iconEl);

            const label = document.createElement('span');
            label.className = 'shortcut-label';
            label.textContent = short.title;
            card.appendChild(label);
            return card;
        }

        function showShortcutActions(cardElement, shortData) {
            document.querySelectorAll('.shortcut-actions-overlay').forEach(el => el.remove());

            const overlay = document.createElement('div');
            overlay.className = 'shortcut-actions-overlay';
            overlay.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.65);border-radius:16px;display:flex;align-items:center;justify-content:center;gap:20px;z-index:10;';

            const trashBtn = document.createElement('button');
            trashBtn.style.cssText = 'background:#c0392b;border:none;border-radius:50%;width:48px;height:48px;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.3);';
            trashBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="white"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"></path></svg>';
            trashBtn.onclick = function(ev) {
                ev.stopPropagation();
                overlay.remove();
                showDeleteConfirm(shortData.id, cardElement);
            };
            overlay.appendChild(trashBtn);

            const openBtn = document.createElement('button');
            openBtn.style.cssText = 'background:#1a73e8;border:none;border-radius:50%;width:48px;height:48px;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.3);';
            openBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="white"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"></path></svg>';
            openBtn.onclick = function(ev) {
                ev.stopPropagation();
                overlay.remove();
                if (shortData.url) {
                    showTopLoader();
                    window.open(shortData.url, '_blank');
                }
            };
            overlay.appendChild(openBtn);
            cardElement.appendChild(overlay);

            overlay.onclick = function(ev) {
                if (ev.target === overlay) overlay.remove();
            };
        }

        function showDeleteConfirm(id, cardElement) {
            const modal = document.createElement('div');
            modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.65);z-index:10020;display:flex;align-items:center;justify-content:center;';

            const box = document.createElement('div');
            box.style.cssText = 'background:var(--card-bg);padding:24px 20px;border-radius:16px;max-width:280px;text-align:center;box-shadow:0 10px 30px rgba(0,0,0,0.5);';
            box.innerHTML = \`
                <p style="margin-bottom:24px;font-size:16px;line-height:1.5;">هل أنت متأكد من انك تريد حذف هذا الإختصار !</p>
                <div style="display:flex;gap:12px;justify-content:center;">
                    <button id="delNo" style="flex:1;padding:12px;border-radius:10px;background:var(--card-hover);color:var(--text-color);border:none;font-weight:600;">No</button>
                    <button id="delYes" style="flex:1;padding:12px;border-radius:10px;background:#c0392b;color:white;border:none;font-weight:600;">Yes</button>
                </div>
            \`;
            modal.appendChild(box);
            document.body.appendChild(modal);

            document.getElementById('delNo').onclick = () => modal.remove();
            document.getElementById('delYes').onclick = () => {
                modal.remove();
                let customs = JSON.parse(localStorage.getItem('teperaShortcuts') || '[]');
                customs = customs.filter(s => s.id !== id);
                localStorage.setItem('teperaShortcuts', JSON.stringify(customs));
                const container = document.getElementById('shortcutsContainer');
                const addBtn = container.querySelector('.add-shortcut-btn');
                if (addBtn) addBtn.remove();
                container.querySelectorAll('.custom-shortcut').forEach(el => el.remove());
                const remaining = JSON.parse(localStorage.getItem('teperaShortcuts') || '[]');
                remaining.forEach(item => {
                    const c = createCustomShortcutCard(item);
                    container.appendChild(c);
                });
                if (addBtn) container.appendChild(addBtn);
            };
            modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
        }

        function startAddShortcut(e) {
            e.preventDefault();
            const title = prompt('ادخل عنوان الأختصار الجديد');
            if (!title || title.trim() === '') return;

            const urlInput = prompt('أدخل رابط الاختصار الكامل (مثال: https://example.com)');
            if (!urlInput || urlInput.trim() === '') return;

            let finalUrl = urlInput.trim();
            if (!finalUrl.startsWith('http://') && !finalUrl.startsWith('https://')) {
                finalUrl = 'https://' + finalUrl;
            }
            showIconChoiceModal(title.trim(), finalUrl);
        }

        function showIconChoiceModal(title, url) {
            const modal = document.createElement('div');
            modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:10010;display:flex;align-items:center;justify-content:center;';

            const dialog = document.createElement('div');
            dialog.style.cssText = 'background:var(--card-bg);color:var(--text-color);padding:24px;border-radius:16px;width:90%;max-width:320px;text-align:center;box-shadow:0 10px 30px rgba(0,0,0,0.5);';
            dialog.innerHTML = \`
                <h3 style="margin-bottom:12px;font-size:18px;">اختر صورة للاختصار</h3>
                <p style="margin-bottom:20px;color:var(--snippet-color);font-size:14px;">\${title}</p>
                <div style="display:flex;flex-direction:column;gap:12px;">
                    <button id="btnStorage" style="padding:14px;border-radius:12px;background:var(--card-hover);color:inherit;border:none;font-size:15px;cursor:pointer;">اختر من التخزين</button>
                    <button id="btnSearch" style="padding:14px;border-radius:12px;background:var(--card-hover);color:inherit;border:none;font-size:15px;cursor:pointer;">ابحث في Google</button>
                    <button id="btnSkip" style="padding:14px;border-radius:12px;background:var(--card-hover);color:inherit;border:none;font-size:15px;cursor:pointer;">تخطي</button>
                </div>
            \`;
            modal.appendChild(dialog);
            document.body.appendChild(modal);

            let fileInput = document.getElementById('shortcutFileInput');
            if (!fileInput) {
                fileInput = document.createElement('input');
                fileInput.type = 'file';
                fileInput.accept = 'image/*';
                fileInput.style.display = 'none';
                fileInput.id = 'shortcutFileInput';
                document.body.appendChild(fileInput);
            }

            document.getElementById('btnStorage').onclick = () => {
                modal.remove();
                fileInput.onchange = function(ev) {
                    const file = ev.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = function(e) {
                            addNewShortcut(title, e.target.result, url);
                        };
                        reader.readAsDataURL(file);
                    }
                };
                fileInput.click();
            };

            document.getElementById('btnSearch').onclick = () => {
                modal.remove();
                const searchQ = encodeURIComponent(title + ' icon logo');
                window.open('https://www.google.com/search?tbm=isch&q=' + searchQ, '_blank');
                setTimeout(function() {
                    const imgUrl = prompt('ألصق رابط الصورة هنا (يمكنك نسخ عنوان الصورة من جوجل):');
                    if (imgUrl && imgUrl.trim() !== '') {
                        addNewShortcut(title, imgUrl.trim(), url);
                    } else {
                        addNewShortcut(title, null, url);
                    }
                }, 600);
            };

            document.getElementById('btnSkip').onclick = () => {
                modal.remove();
                addNewShortcut(title, null, url);
            };

            modal.onclick = function(e) {
                if (e.target === modal) modal.remove();
            };
        }

        function addNewShortcut(title, iconData, url) {
            const newItem = {
                id: 'custom_' + Date.now(),
                title: title,
                url: url,
                icon: iconData
            };
            let customs = JSON.parse(localStorage.getItem('teperaShortcuts') || '[]');
            customs.push(newItem);
            localStorage.setItem('teperaShortcuts', JSON.stringify(customs));

            const container = document.getElementById('shortcutsContainer');
            const addBtn = container.querySelector('.add-shortcut-btn');
            if (addBtn) addBtn.remove();
            const newCard = createCustomShortcutCard(newItem);
            container.appendChild(newCard);
            if (addBtn) container.appendChild(addBtn);
        }

        function loadCustomShortcuts() {
            const container = document.getElementById('shortcutsContainer');
            if (!container) return;
            const addBtn = container.querySelector('.add-shortcut-btn');
            if (addBtn) addBtn.remove();
            container.querySelectorAll('.custom-shortcut').forEach(el => el.remove());
            const customs = JSON.parse(localStorage.getItem('teperaShortcuts') || '[]');
            customs.forEach(item => {
                const card = createCustomShortcutCard(item);
                container.appendChild(card);
            });
            if (addBtn) container.appendChild(addBtn);
        }

        function getAppLock() {
            try { return JSON.parse(localStorage.getItem('teperaAppLock') || 'null'); } catch(e){ return null; }
        }
        function setAppLock(obj) {
            if (obj) localStorage.setItem('teperaAppLock', JSON.stringify(obj));
            else localStorage.removeItem('teperaAppLock');
        }
        function getBlockedSites() {
            try { return JSON.parse(localStorage.getItem('teperaBlockedSites') || '[]'); } catch(e){ return []; }
        }
        function setBlockedSites(arr) {
            localStorage.setItem('teperaBlockedSites', JSON.stringify(arr));
        }
        function getSiteLocks() {
            try { return JSON.parse(localStorage.getItem('teperaSiteLocks') || '[]'); } catch(e){ return []; }
        }
        function setSiteLocks(arr) {
            localStorage.setItem('teperaSiteLocks', JSON.stringify(arr));
        }
        function isSHEDEnabled() {
            return localStorage.getItem('teperaSHED') === 'true';
        }
        function setSHED(val) {
            localStorage.setItem('teperaSHED', val ? 'true' : 'false');
        }

        function normalizeUrl(u) {
            try {
                let s = (u || '').trim().toLowerCase();
                if (!s.startsWith('http')) s = 'https://' + s;
                const a = document.createElement('a');
                a.href = s;
                return (a.hostname || s).replace(/^www\\./, '');
            } catch(e) {
                return (u || '').toLowerCase().replace(/^https?:\\/\\//, '').replace(/^www\\./, '').split('/')[0];
            }
        }

        let settingsStack = [];

        function createSettingsOverlay() {
            let ov = document.getElementById('settingsOverlay');
            if (ov) return ov;
            ov = document.createElement('div');
            ov.id = 'settingsOverlay';
            ov.className = 'settings-overlay';
            document.body.appendChild(ov);
            return ov;
        }

        function openSettings() {
            toggleMenu();
            settingsStack = [];
            showSettingsPage('main');
        }

        function closeSettings() {
            const ov = document.getElementById('settingsOverlay');
            if (ov) {
                ov.classList.remove('active');
                ov.innerHTML = '';
            }
            settingsStack = [];
        }

        function showSettingsPage(pageId, extra) {
            const ov = createSettingsOverlay();
            ov.innerHTML = '';
            ov.classList.add('active');

            const page = document.createElement('div');
            page.style.cssText = 'display:flex;flex-direction:column;min-height:100%;';

            const header = document.createElement('div');
            header.className = 'settings-header';
            const backBtn = document.createElement('button');
            backBtn.className = 'settings-back-btn';
            backBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>';
            backBtn.onclick = function() {
                if (settingsStack.length > 1) {
                    settingsStack.pop();
                    const prev = settingsStack.pop();
                    showSettingsPage(prev.id, prev.extra);
                } else {
                    closeSettings();
                }
            };
            header.appendChild(backBtn);

            const title = document.createElement('div');
            title.className = 'settings-title';
            header.appendChild(title);
            page.appendChild(header);

            const content = document.createElement('div');
            content.style.flex = '1';
            page.appendChild(content);
            ov.appendChild(page);

            settingsStack.push({id: pageId, extra: extra});

            if (pageId === 'main') {
                title.textContent = 'الإعدادات';
                renderMainSettings(content);
            } else if (pageId === 'lockProtect') {
                title.textContent = 'القفل والحماية';
                renderLockProtect(content);
            } else if (pageId === 'appLock') {
                title.textContent = 'قفل التطبيق العام';
                renderAppLockOptions(content);
            } else if (pageId === 'setupPin') {
                title.textContent = 'قفل PIN';
                renderSetupPin(content);
            } else if (pageId === 'setupPattern') {
                title.textContent = 'قفل نقش';
                renderSetupPattern(content);
            } else if (pageId === 'setupPassword') {
                title.textContent = 'قفل كلمة المرور';
                renderSetupPassword(content);
            } else if (pageId === 'siteLock') {
                title.textContent = 'قفل المواقع';
                renderSiteLockPage(content);
            } else if (pageId === 'blockedSites') {
                title.textContent = 'المواقع المحظورة';
                renderBlockedSites(content);
            } else if (pageId === 'shed') {
                title.textContent = 'إدخال تعريفات SHED';
                renderSHEDPage(content);
            }
        }

        function makeSettingsItem(iconSvg, label, onClick, rightHtml) {
            const btn = document.createElement('button');
            btn.className = 'settings-item';
            btn.innerHTML = iconSvg + '<span class="item-label">' + label + '</span>' + (rightHtml || '<svg class="item-arrow" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>');
            btn.onclick = onClick;
            return btn;
        }

        function renderMainSettings(container) {
            const list = document.createElement('div');
            list.className = 'settings-list';

            list.appendChild(makeSettingsItem(
                '<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path></svg>',
                'القفل والحماية',
                function(){ showSettingsPage('lockProtect'); }
            ));

            list.appendChild(makeSettingsItem(
                '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></svg>',
                'المواقع المحظورة',
                function(){ showSettingsPage('blockedSites'); }
            ));

            list.appendChild(makeSettingsItem(
                '<svg viewBox="0 0 24 24"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path></svg>',
                'إدخال تعريفات SHED',
                function(){ showSettingsPage('shed'); }
            ));

            const lock = getAppLock();
            if (lock && lock.enabled) {
                list.appendChild(makeSettingsItem(
                    '<svg viewBox="0 0 24 24"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6z"></path></svg>',
                    'إلغاء قفل التطبيق',
                    function(){
                        if (confirm('هل أنت متأكد من إلغاء قفل التطبيق؟')) {
                            setAppLock(null);
                            alert('تم إلغاء القفل');
                            showSettingsPage('main');
                        }
                    },
                    ''
                ));
            }
            container.appendChild(list);
        }

        function renderLockProtect(container) {
            const list = document.createElement('div');
            list.className = 'settings-list';
            list.appendChild(makeSettingsItem(
                '<svg viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></svg>',
                'قفل التطبيق العام',
                function(){ showSettingsPage('appLock'); }
            ));
            list.appendChild(makeSettingsItem(
                '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></svg>',
                'قفل المواقع',
                function(){ showSettingsPage('siteLock'); }
            ));
            container.appendChild(list);
        }

        function renderAppLockOptions(container) {
            const list = document.createElement('div');
            list.className = 'settings-list';
            const lock = getAppLock();
            const status = document.createElement('div');
            status.className = 'settings-section-label';
            status.textContent = lock && lock.enabled ? ('القفل الحالي: ' + (lock.type === 'pin' ? 'PIN' : lock.type === 'pattern' ? 'نقش' : 'كلمة مرور')) : 'لا يوجد قفل حالياً';
            list.appendChild(status);

            list.appendChild(makeSettingsItem(
                '<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></svg>',
                'قفل PIN',
                function(){ showSettingsPage('setupPin'); }
            ));
            list.appendChild(makeSettingsItem(
                '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
                'قفل نقش',
                function(){ showSettingsPage('setupPattern'); }
            ));
            list.appendChild(makeSettingsItem(
                '<svg viewBox="0 0 24 24"><path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg>',
                'قفل كلمة المرور',
                function(){ showSettingsPage('setupPassword'); }
            ));
            container.appendChild(list);
        }

        function renderSetupPin(container) {
            const wrap = document.createElement('div');
            wrap.className = 'lock-screen-content';
            wrap.innerHTML = '<div class="setup-hint">أدخل رمز PIN مكون من 4 أرقام على الأقل، ثم أكّده</div>';
            const display = document.createElement('div');
            display.className = 'pin-display';
            display.id = 'setupPinDisplay';
            display.textContent = '';
            wrap.appendChild(display);

            let step = 1;
            let firstVal = '';
            let current = '';

            const pad = document.createElement('div');
            pad.className = 'pin-pad';
            const keys = ['1','2','3','4','5','6','7','8','9','مسح','0','تم'];
            keys.forEach(k => {
                const b = document.createElement('button');
                b.className = 'pin-btn' + (k === 'مسح' || k === 'تم' ? ' action' : '');
                b.textContent = k;
                b.onclick = function() {
                    if (k === 'مسح') {
                        current = current.slice(0, -1);
                    } else if (k === 'تم') {
                        if (current.length < 4) {
                            showTempError(wrap, 'يجب 4 أرقام على الأقل');
                            return;
                        }
                        if (step === 1) {
                            firstVal = current;
                            current = '';
                            step = 2;
                            display.textContent = '';
                            wrap.querySelector('.setup-hint').textContent = 'أعد إدخال رمز PIN للتأكيد';
                        } else {
                            if (current === firstVal) {
                                setAppLock({enabled: true, type: 'pin', value: firstVal});
                                alert('تم تفعيل قفل PIN بنجاح');
                                showSettingsPage('appLock');
                            } else {
                                showTempError(wrap, 'الرمزان غير متطابقين');
                                current = '';
                                display.textContent = '';
                            }
                        }
                        return;
                    } else {
                        if (current.length < 8) current += k;
                    }
                    display.textContent = '•'.repeat(current.length);
                };
                pad.appendChild(b);
            });
            wrap.appendChild(pad);
            const err = document.createElement('div');
            err.className = 'lock-error';
            err.id = 'setupPinErr';
            wrap.appendChild(err);
            container.appendChild(wrap);
        }

        function showTempError(parent, msg) {
            let e = parent.querySelector('.lock-error');
            if (!e) {
                e = document.createElement('div');
                e.className = 'lock-error';
                parent.appendChild(e);
            }
            e.textContent = msg;
            setTimeout(() => { e.textContent = ''; }, 2500);
        }

        function renderSetupPattern(container) {
            const wrap = document.createElement('div');
            wrap.className = 'lock-screen-content';
            wrap.innerHTML = '<div class="setup-hint">اضغط على النقاط بالترتيب لتشكيل النقش (3 نقاط على الأقل)</div>';

            let step = 1;
            let firstPattern = [];
            let currentPattern = [];

            const grid = document.createElement('div');
            grid.className = 'pattern-grid';
            for (let i = 1; i <= 9; i++) {
                const dot = document.createElement('div');
                dot.className = 'pattern-dot';
                dot.dataset.n = i;
                dot.textContent = i;
                dot.onclick = function() {
                    const n = parseInt(this.dataset.n);
                    if (currentPattern.indexOf(n) === -1) {
                        currentPattern.push(n);
                        this.classList.add('selected');
                    }
                };
                grid.appendChild(dot);
            }
            wrap.appendChild(grid);

            const actions = document.createElement('div');
            actions.className = 'pattern-actions';
            const clearBtn = document.createElement('button');
            clearBtn.className = 'btn-clear';
            clearBtn.textContent = 'مسح';
            clearBtn.onclick = function() {
                currentPattern = [];
                grid.querySelectorAll('.pattern-dot').forEach(d => d.classList.remove('selected', 'active'));
            };
            const confBtn = document.createElement('button');
            confBtn.className = 'btn-confirm';
            confBtn.textContent = 'تأكيد';
            confBtn.onclick = function() {
                if (currentPattern.length < 3) {
                    showTempError(wrap, 'اختر 3 نقاط على الأقل');
                    return;
                }
                if (step === 1) {
                    firstPattern = currentPattern.slice();
                    currentPattern = [];
                    step = 2;
                    grid.querySelectorAll('.pattern-dot').forEach(d => d.classList.remove('selected'));
                    wrap.querySelector('.setup-hint').textContent = 'أعد رسم النقش للتأكيد';
                } else {
                    if (JSON.stringify(currentPattern) === JSON.stringify(firstPattern)) {
                        setAppLock({enabled: true, type: 'pattern', value: firstPattern.join('-')});
                        alert('تم تفعيل قفل النقش بنجاح');
                        showSettingsPage('appLock');
                    } else {
                        showTempError(wrap, 'النقش غير متطابق');
                        currentPattern = [];
                        grid.querySelectorAll('.pattern-dot').forEach(d => d.classList.remove('selected'));
                    }
                }
            };
            actions.appendChild(clearBtn);
            actions.appendChild(confBtn);
            wrap.appendChild(actions);
            const err = document.createElement('div');
            err.className = 'lock-error';
            wrap.appendChild(err);
            container.appendChild(wrap);
        }

        function renderSetupPassword(container) {
            const wrap = document.createElement('div');
            wrap.className = 'lock-screen-content';
            wrap.innerHTML = '<div class="setup-hint">أدخل كلمة مرور (4 أحرف على الأقل) ثم أكّدها</div>';

            let step = 1;
            let firstVal = '';

            const inpWrap = document.createElement('div');
            inpWrap.className = 'password-input-wrap';
            const inp = document.createElement('input');
            inp.type = 'password';
            inp.placeholder = 'كلمة المرور';
            inp.id = 'setupPassInput';
            inpWrap.appendChild(inp);
            wrap.appendChild(inpWrap);

            const confBtn = document.createElement('button');
            confBtn.className = 'btn-confirm';
            confBtn.style.cssText = 'padding:12px 28px;border-radius:12px;border:none;font-weight:600;cursor:pointer;background:#1a73e8;color:#fff;';
            confBtn.textContent = 'التالي';
            confBtn.onclick = function() {
                const val = inp.value.trim();
                if (val.length < 4) {
                    showTempError(wrap, 'يجب 4 أحرف على الأقل');
                    return;
                }
                if (step === 1) {
                    firstVal = val;
                    inp.value = '';
                    step = 2;
                    confBtn.textContent = 'تأكيد';
                    wrap.querySelector('.setup-hint').textContent = 'أعد إدخال كلمة المرور للتأكيد';
                } else {
                    if (val === firstVal) {
                        setAppLock({enabled: true, type: 'password', value: firstVal});
                        alert('تم تفعيل قفل كلمة المرور بنجاح');
                        showSettingsPage('appLock');
                    } else {
                        showTempError(wrap, 'كلمتا المرور غير متطابقتين');
                        inp.value = '';
                    }
                }
            };
            wrap.appendChild(confBtn);
            const err = document.createElement('div');
            err.className = 'lock-error';
            wrap.appendChild(err);
            container.appendChild(wrap);
        }

        function renderSiteLockPage(container) {
            const list = document.createElement('div');
            list.className = 'site-lock-list';
            const sites = getSiteLocks();

            if (sites.length === 0) {
                const empty = document.createElement('div');
                empty.style.cssText = 'padding:30px 20px;text-align:center;color:var(--snippet-color);';
                empty.textContent = 'لا توجد مواقع مقفلة حالياً';
                list.appendChild(empty);
            } else {
                sites.forEach((s, idx) => {
                    const item = document.createElement('div');
                    item.className = 'blocked-item';
                    item.innerHTML = '<span>' + s + '</span>';
                    const del = document.createElement('button');
                    del.textContent = 'حذف';
                    del.onclick = function() {
                        const arr = getSiteLocks();
                        arr.splice(idx, 1);
                        setSiteLocks(arr);
                        showSettingsPage('siteLock');
                    };
                    item.appendChild(del);
                    list.appendChild(item);
                });
            }
            container.appendChild(list);

            const addRow = document.createElement('div');
            addRow.className = 'add-btn-row';
            const addBtn = document.createElement('button');
            addBtn.textContent = '+ إضافة موقع للقفل';
            addBtn.onclick = function() {
                const url = prompt('اكتب رابط الموقع الذي تريد قفله قبل الوصول إليه (مثال: youtube.com)');
                if (!url || !url.trim()) return;
                const norm = normalizeUrl(url);
                let arr = getSiteLocks();
                if (arr.indexOf(norm) === -1) {
                    arr.push(norm);
                    setSiteLocks(arr);
                    alert('تم إضافة الموقع للقفل. عند محاولة فتحه سيُطلب منك القفل أولاً.');
                    showSettingsPage('siteLock');
                } else {
                    alert('الموقع موجود مسبقاً');
                }
            };
            addRow.appendChild(addBtn);
            container.appendChild(addRow);

            const note = document.createElement('div');
            note.style.cssText = 'padding:10px 20px;font-size:13px;color:var(--snippet-color);';
            note.textContent = 'ملاحظة: يجب تفعيل "قفل التطبيق العام" أولاً. عند فتح موقع مقفل سيُطلب منك إدخال القفل.';
            container.appendChild(note);
        }

        function renderBlockedSites(container) {
            const list = document.createElement('div');
            list.className = 'blocked-list';
            const sites = getBlockedSites();

            if (sites.length === 0) {
                const empty = document.createElement('div');
                empty.style.cssText = 'padding:30px 20px;text-align:center;color:var(--snippet-color);';
                empty.textContent = 'لا توجد مواقع محظورة';
                list.appendChild(empty);
            } else {
                sites.forEach((s, idx) => {
                    const item = document.createElement('div');
                    item.className = 'blocked-item';
                    item.innerHTML = '<span>' + s + '</span>';
                    const del = document.createElement('button');
                    del.textContent = 'إلغاء الحظر';
                    del.onclick = function() {
                        const arr = getBlockedSites();
                        arr.splice(idx, 1);
                        setBlockedSites(arr);
                        showSettingsPage('blockedSites');
                    };
                    item.appendChild(del);
                    list.appendChild(item);
                });
            }
            container.appendChild(list);

            const addRow = document.createElement('div');
            addRow.className = 'add-btn-row';
            const addBtn = document.createElement('button');
            addBtn.textContent = '+ Add';
            addBtn.onclick = function() {
                const url = prompt('أدخل عنوان رابط لموقع تريد حظر الدخول إليه (مثال: example.com)');
                if (!url || !url.trim()) return;
                const norm = normalizeUrl(url);
                let arr = getBlockedSites();
                if (arr.indexOf(norm) === -1) {
                    arr.push(norm);
                    setBlockedSites(arr);
                    alert('تم حظر الموقع. لن تتمكن من فتحه إلا بعد إلغاء الحظر.');
                    showSettingsPage('blockedSites');
                } else {
                    alert('الموقع محظور مسبقاً');
                }
            };
            addRow.appendChild(addBtn);
            container.appendChild(addRow);
        }

        function renderSHEDPage(container) {
            const list = document.createElement('div');
            list.className = 'settings-list';

            const item = document.createElement('button');
            item.className = 'settings-item';
            const enabled = isSHEDEnabled();
            item.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>' +
                '<span class="item-label">تفعيل تحويل اسم الموقع إلى رابط</span>' +
                '<div class="toggle-switch ' + (enabled ? 'on' : '') + '" id="shedToggle"></div>';
            item.onclick = function() {
                const newVal = !isSHEDEnabled();
                setSHED(newVal);
                const t = document.getElementById('shedToggle');
                if (t) t.classList.toggle('on', newVal);
            };
            list.appendChild(item);

            const desc = document.createElement('div');
            desc.style.cssText = 'padding:16px 24px;font-size:14px;color:var(--snippet-color);line-height:1.6;';
            desc.innerHTML = 'عند التفعيل: إذا كتبت في شريط البحث اسم موقع فقط (مثل youtube أو google) بدون https://، سيتم تحويله تلقائياً إلى رابط ويفتح الموقع مباشرة.<br><br>مثال: كتابة "youtube" ← يفتح https://youtube.com';
            list.appendChild(desc);
            container.appendChild(list);
        }

        function checkAppLockOnLoad() {
            const lock = getAppLock();
            if (lock && lock.enabled) {
                showLockScreen(lock, function() {});
            }
        }

        function showLockScreen(lock, onSuccess) {
            let existing = document.getElementById('lockOverlay');
            if (existing) existing.remove();

            const ov = document.createElement('div');
            ov.id = 'lockOverlay';
            ov.className = 'lock-overlay active';
            document.body.appendChild(ov);

            const content = document.createElement('div');
            content.className = 'lock-screen-content';
            content.innerHTML = '<svg class="lock-icon" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></svg>' +
                '<div class="lock-title">TEPERA مقفل</div>' +
                '<div class="lock-subtitle">أدخل القفل للمتابعة</div>';

            if (lock.type === 'pin') {
                renderLockPin(content, lock, onSuccess, ov);
            } else if (lock.type === 'pattern') {
                renderLockPattern(content, lock, onSuccess, ov);
            } else if (lock.type === 'password') {
                renderLockPassword(content, lock, onSuccess, ov);
            }
            ov.appendChild(content);
        }

        function renderLockPin(content, lock, onSuccess, ov) {
            const display = document.createElement('div');
            display.className = 'pin-display';
            content.appendChild(display);
            let current = '';

            const pad = document.createElement('div');
            pad.className = 'pin-pad';
            const keys = ['1','2','3','4','5','6','7','8','9','مسح','0','دخول'];
            keys.forEach(k => {
                const b = document.createElement('button');
                b.className = 'pin-btn' + (k === 'مسح' || k === 'دخول' ? ' action' : '');
                b.textContent = k;
                b.onclick = function() {
                    if (k === 'مسح') {
                        current = current.slice(0, -1);
                    } else if (k === 'دخول') {
                        if (current === lock.value) {
                            ov.remove();
                            if (onSuccess) onSuccess();
                        } else {
                            showTempError(content, 'رمز PIN غير صحيح');
                            current = '';
                            display.textContent = '';
                        }
                        return;
                    } else {
                        if (current.length < 10) current += k;
                    }
                    display.textContent = '•'.repeat(current.length);
                };
                pad.appendChild(b);
            });
            content.appendChild(pad);
            const err = document.createElement('div');
            err.className = 'lock-error';
            content.appendChild(err);
        }

        function renderLockPattern(content, lock, onSuccess, ov) {
            let currentPattern = [];
            const grid = document.createElement('div');
            grid.className = 'pattern-grid';
            for (let i = 1; i <= 9; i++) {
                const dot = document.createElement('div');
                dot.className = 'pattern-dot';
                dot.dataset.n = i;
                dot.textContent = i;
                dot.onclick = function() {
                    const n = parseInt(this.dataset.n);
                    if (currentPattern.indexOf(n) === -1) {
                        currentPattern.push(n);
                        this.classList.add('selected');
                    }
                };
                grid.appendChild(dot);
            }
            content.appendChild(grid);

            const actions = document.createElement('div');
            actions.className = 'pattern-actions';
            const clearBtn = document.createElement('button');
            clearBtn.className = 'btn-clear';
            clearBtn.textContent = 'مسح';
            clearBtn.onclick = function() {
                currentPattern = [];
                grid.querySelectorAll('.pattern-dot').forEach(d => d.classList.remove('selected'));
            };
            const confBtn = document.createElement('button');
            confBtn.className = 'btn-confirm';
            confBtn.textContent = 'فتح';
            confBtn.onclick = function() {
                if (currentPattern.join('-') === lock.value) {
                    ov.remove();
                    if (onSuccess) onSuccess();
                } else {
                    showTempError(content, 'النقش غير صحيح');
                    currentPattern = [];
                    grid.querySelectorAll('.pattern-dot').forEach(d => d.classList.remove('selected'));
                }
            };
            actions.appendChild(clearBtn);
            actions.appendChild(confBtn);
            content.appendChild(actions);
            const err = document.createElement('div');
            err.className = 'lock-error';
            content.appendChild(err);
        }

        function renderLockPassword(content, lock, onSuccess, ov) {
            const inpWrap = document.createElement('div');
            inpWrap.className = 'password-input-wrap';
            const inp = document.createElement('input');
            inp.type = 'password';
            inp.placeholder = 'كلمة المرور';
            inpWrap.appendChild(inp);
            content.appendChild(inpWrap);

            const confBtn = document.createElement('button');
            confBtn.className = 'btn-confirm';
            confBtn.style.cssText = 'padding:12px 28px;border-radius:12px;border:none;font-weight:600;cursor:pointer;background:#1a73e8;color:#fff;margin-top:8px;';
            confBtn.textContent = 'فتح';
            confBtn.onclick = function() {
                if (inp.value === lock.value) {
                    ov.remove();
                    if (onSuccess) onSuccess();
                } else {
                    showTempError(content, 'كلمة المرور غير صحيحة');
                    inp.value = '';
                }
            };
            inp.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') confBtn.click();
            });
            content.appendChild(confBtn);
            const err = document.createElement('div');
            err.className = 'lock-error';
            content.appendChild(err);
        }

        const VIDEO_POOL = [
            { id: '0e3GPea1Tyg', title: '$456,000 Squid Game In Real Life!', duration: '25:42', views: '946M', channel: 'MrBeast' },
            { id: 'gHzuabZUd6c', title: 'Survive 100 Days In Circle, Win $500,000', duration: '17:10', views: '426M', channel: 'MrBeast' },
            { id: 'iogcY_4xGjo', title: '$1 vs $1,000,000 Hotel Room!', duration: '15:41', views: '462M', channel: 'MrBeast' },
            { id: '1WEAJ-DFkHE', title: '$1 vs $500,000 Plane Ticket!', duration: '12:20', views: '575M', channel: 'MrBeast' },
            { id: 'FM7Z-Xq8Drc', title: 'Ages 1 - 100 Fight For $500,000', duration: '25:36', views: '468M', channel: 'MrBeast' },
            { id: 'zxYjTTXc-J8', title: 'Last To Leave Circle Wins $500,000', duration: '17:44', views: '561M', channel: 'MrBeast' },
            { id: 'Hwybp38GnZw', title: "I Built Willy Wonka's Chocolate Factory!", duration: '16:11', views: '381M', channel: 'MrBeast' },
            { id: '9bqk6ZUsKyA', title: 'I Spent 50 Hours Buried Alive', duration: '12:40', views: '345M', channel: 'MrBeast' },
            { id: 'r7zJ8srwwjk', title: 'I Spent 50 Hours In Solitary Confinement', duration: '15:52', views: '344M', channel: 'MrBeast' },
            { id: 'fMfipiV_17o', title: 'Would You Sit In Snakes For $10,000?', duration: '14:07', views: '414M', channel: 'MrBeast' },
            { id: 'YLt73w6criQ', title: 'I Paid A Real Assassin To Try To Kill Me', duration: '12:17', views: '340M', channel: 'MrBeast' },
            { id: 'AaMdXZMvT3w', title: 'Survive 30 Days On An Island With Your Ex, Win $250,000', duration: '39:09', views: '180M', channel: 'MrBeast' },
            { id: 'dQw4w9WgXcQ', title: 'Never Gonna Give You Up', duration: '3:33', views: '1.6B', channel: 'Rick Astley' },
            { id: '9bZkp7q19f0', title: 'Gangnam Style', duration: '4:13', views: '5.1B', channel: 'PSY' },
            { id: 'kJQP7kiw5Fk', title: 'Despacito', duration: '4:42', views: '8.4B', channel: 'Luis Fonsi' },
            { id: 'JGwWNGJdvx8', title: 'Shape of You', duration: '4:24', views: '6.1B', channel: 'Ed Sheeran' },
            { id: 'fJ9rUzIMcZQ', title: 'Bohemian Rhapsody', duration: '5:59', views: '1.9B', channel: 'Queen' },
            { id: 'OPf0YbXqDm0', title: 'Uptown Funk', duration: '4:31', views: '5.2B', channel: 'Mark Ronson ft. Bruno Mars' },
            { id: 'RgKAFK5djSk', title: 'See You Again', duration: '3:58', views: '6.3B', channel: 'Wiz Khalifa ft. Charlie Puth' },
            { id: 'hT_nvWreIhg', title: 'Counting Stars', duration: '4:17', views: '3.6B', channel: 'OneRepublic' }
        ];

        let currentVideoPlaylist = [];
        let currentVideoIndex = 0;

        function getFavorites() {
            try { return JSON.parse(localStorage.getItem('teperaVideoFavorites') || '[]'); } catch(e) { return []; }
        }
        function setFavorites(arr) {
            localStorage.setItem('teperaVideoFavorites', JSON.stringify(arr));
        }
        function isFavorite(videoId) {
            return getFavorites().indexOf(videoId) !== -1;
        }
        function toggleFavorite(videoId) {
            let favs = getFavorites();
            const idx = favs.indexOf(videoId);
            if (idx === -1) favs.push(videoId);
            else favs.splice(idx, 1);
            setFavorites(favs);
            return idx === -1;
        }

        function shuffleArray(arr) {
            const copy = arr.slice();
            for (let i = copy.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [copy[i], copy[j]] = [copy[j], copy[i]];
            }
            return copy;
        }

        function renderVideosList() {
            const list = document.getElementById('videosList');
            if (!list) return;
            list.innerHTML = '';

            currentVideoPlaylist = shuffleArray(VIDEO_POOL).slice(0, Math.min(10, VIDEO_POOL.length));

            currentVideoPlaylist.forEach((v, idx) => {
                const card = document.createElement('div');
                card.className = 'video-card';
                card.onclick = function() { openVideoPlayer(idx); };

                const thumbUrl = 'https://i.ytimg.com/vi/' + v.id + '/hqdefault.jpg';

                card.innerHTML = \`
                    <div class="video-thumb-wrap">
                        <img src="\${thumbUrl}" alt="\${v.title}" loading="lazy" onerror="this.src='https://i.ytimg.com/vi/\${v.id}/mqdefault.jpg'"/>
                        <span class="video-duration">\${v.duration}</span>
                    </div>
                    <div class="video-info">
                        <div class="video-title">\${v.title}</div>
                        <div class="video-meta">\${v.channel} · \${v.views} مشاهدة</div>
                    </div>
                \`;
                list.appendChild(card);
            });
        }

        let ytApiInjected = false;
        let ytApiReady = false;
        let ytPlayer = null;
        let autoplayNextEnabled = true;
        let currentPlaybackRate = 1;

        function ensureYouTubeAPI(callback) {
            if (ytApiReady && window.YT && window.YT.Player) {
                callback();
                return;
            }
            window.__ytApiCallbacks = window.__ytApiCallbacks || [];
            window.__ytApiCallbacks.push(callback);
            if (!ytApiInjected) {
                ytApiInjected = true;
                const tag = document.createElement('script');
                tag.src = 'https://www.youtube.com/iframe_api';
                document.body.appendChild(tag);
            }
        }

        window.onYouTubeIframeAPIReady = function() {
            ytApiReady = true;
            (window.__ytApiCallbacks || []).forEach(cb => cb());
            window.__ytApiCallbacks = [];
        };

        function openVideoPlayer(index) {
            currentVideoIndex = index;
            const video = currentVideoPlaylist[index];
            if (!video) return;

            const ov = document.getElementById('videoPlayerOverlay');
            const titleEl = document.getElementById('playerVideoTitle');
            const headerTitle = document.getElementById('playerHeaderTitle');
            const countEl = document.getElementById('nowPlayingCount');

            headerTitle.textContent = video.title;
            titleEl.textContent = video.title;
            if (countEl) countEl.textContent = 'الفيديو ' + (index + 1) + ' من ' + currentVideoPlaylist.length;

            updateFavoriteButton(video.id);
            updatePlayerThemeToggleUI();
            currentPlaybackRate = 1;
            updateSpeedButtonsUI(1);

            const iframeWrap = document.getElementById('playerIframeWrap');
            if (!document.getElementById('ytPlayerContainer')) {
                iframeWrap.innerHTML = '<div id="ytPlayerContainer"></div>';
            }

            ensureYouTubeAPI(function() {
                if (ytPlayer && typeof ytPlayer.loadVideoById === 'function') {
                    ytPlayer.loadVideoById(video.id);
                    if (currentPlaybackRate !== 1 && typeof ytPlayer.setPlaybackRate === 'function') {
                        ytPlayer.setPlaybackRate(currentPlaybackRate);
                    }
                } else {
                    ytPlayer = new YT.Player('ytPlayerContainer', {
                        videoId: video.id,
                        playerVars: { autoplay: 1, rel: 0 },
                        events: {
                            onStateChange: onPlayerStateChange
                        }
                    });
                }
            });

            ov.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function onPlayerStateChange(event) {
            if (event.data === YT.PlayerState.ENDED && autoplayNextEnabled) {
                playNextVideo();
            }
        }

        function playNextVideo() {
            if (!currentVideoPlaylist.length) return;
            const nextIndex = (currentVideoIndex + 1) % currentVideoPlaylist.length;
            openVideoPlayer(nextIndex);
        }

        function playPrevVideo() {
            if (!currentVideoPlaylist.length) return;
            const prevIndex = (currentVideoIndex - 1 + currentVideoPlaylist.length) % currentVideoPlaylist.length;
            openVideoPlayer(prevIndex);
        }

        function setVideoSpeed(rate) {
            currentPlaybackRate = rate;
            if (ytPlayer && typeof ytPlayer.setPlaybackRate === 'function') {
                ytPlayer.setPlaybackRate(rate);
            }
            updateSpeedButtonsUI(rate);
        }

        function updateSpeedButtonsUI(rate) {
            document.querySelectorAll('.speed-btn').forEach(btn => {
                btn.classList.toggle('active', parseFloat(btn.dataset.speed) === rate);
            });
        }

        function toggleAutoplayNext() {
            autoplayNextEnabled = !autoplayNextEnabled;
            const t = document.getElementById('autoplayToggle');
            if (t) t.classList.toggle('on', autoplayNextEnabled);
        }

        function updatePlayerThemeToggleUI() {
            const t = document.getElementById('playerThemeToggle');
            if (!t) return;
            const isLight = document.body.getAttribute('data-theme') === 'light';
            t.classList.toggle('on', isLight);
        }

        function updateFavoriteButton(videoId) {
            const actionsEl = document.getElementById('playerActions');
            if (!actionsEl) return;
            const video = currentVideoPlaylist[currentVideoIndex];
            const isFav = isFavorite(videoId);
            const safeTitle = ((video && video.title) || '').replace(/'/g, "\\\\'");
            actionsEl.innerHTML = \`
                <button class="player-action-btn \${isFav ? 'saved' : ''}" id="favBtn" onclick="onToggleFavorite('\${videoId}')">
                    <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                    <span>\${isFav ? 'محفوظ في المفضلة' : 'حفظ في المفضلة'}</span>
                </button>
                <button class="player-action-btn" onclick="window.open('https://www.youtube.com/watch?v=\${videoId}', '_blank')">
                    <svg viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></svg>
                    <span>فتح في يوتيوب</span>
                </button>
                <button class="player-action-btn" onclick="shareVideo('\${videoId}', '\${safeTitle}')">
                    <svg viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path></svg>
                    <span>مشاركة</span>
                </button>
            \`;
        }

        function closeVideoPlayer() {
            const ov = document.getElementById('videoPlayerOverlay');
            ov.classList.remove('active');
            if (ytPlayer && typeof ytPlayer.stopVideo === 'function') {
                try { ytPlayer.stopVideo(); } catch(e) {}
            }
            document.body.style.overflow = '';
        }

        function onToggleFavorite(videoId) {
            const nowFav = toggleFavorite(videoId);
            const btn = document.getElementById('favBtn');
            if (btn) {
                btn.classList.toggle('saved', nowFav);
                btn.querySelector('span').textContent = nowFav ? 'محفوظ في المفضلة' : 'حفظ في المفضلة';
            }
        }

        function shareVideo(id, title) {
            const url = 'https://www.youtube.com/watch?v=' + id;
            if (navigator.share) {
                navigator.share({ title: title, url: url }).catch(() => {});
            } else {
                navigator.clipboard.writeText(url).then(() => alert('تم نسخ الرابط!')).catch(() => prompt('انسخ الرابط:', url));
            }
        }

        let currentAppsTab = 'games';
        let cachedApps = { games: null, apps: null };

        const GAME_TERMS = ['action game', 'puzzle game', 'racing game', 'adventure game', 'sports game', 'arcade game', 'strategy game', 'casual game', 'multiplayer game', 'offline game'];
        const APP_TERMS = ['photo editor', 'video editor', 'music player', 'notes app', 'productivity', 'social app', 'education app', 'health fitness', 'weather app', 'file manager', 'browser app', 'translator'];

        function formatBytes(bytes) {
            if (!bytes || bytes <= 0) return 'غير معروف';
            const mb = bytes / (1024 * 1024);
            if (mb >= 1024) return (mb / 1024).toFixed(1) + ' GB';
            return mb.toFixed(1) + ' MB';
        }

        function formatCount(n) {
            if (!n) return '—';
            if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
            if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
            return String(n);
        }

        function pickRandom(arr, count) {
            const copy = arr.slice();
            for (let i = copy.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [copy[i], copy[j]] = [copy[j], copy[i]];
            }
            return copy.slice(0, count);
        }

        async function fetchFromiTunes(type) {
            const terms = type === 'games' ? GAME_TERMS : APP_TERMS;
            const term = terms[Math.floor(Math.random() * terms.length)];
            let url = 'https://itunes.apple.com/search?term=' + encodeURIComponent(term) +
                      '&entity=software&limit=30&country=us';
            if (type === 'games') {
                url += '&genreId=6014';
            }

            try {
                const res = await fetch(url);
                const data = await res.json();
                let results = (data.results || []).filter(r => r.artworkUrl100 && r.trackName);
                results = pickRandom(results, 8);
                return results;
            } catch (err) {
                console.error('iTunes fetch error', err);
                return [];
            }
        }

        async function loadAppsList(type, forceRefresh) {
            const grid = document.getElementById('appsGrid');
            if (!grid) return;

            if (!forceRefresh && cachedApps[type] && cachedApps[type].length) {
                renderAppsGrid(cachedApps[type]);
                return;
            }

            grid.innerHTML = '<div class="apps-loading">جاري التحميل من iTunes...</div>';

            const items = await fetchFromiTunes(type);
            cachedApps[type] = items;

            if (!items.length) {
                grid.innerHTML = '<div class="apps-loading">تعذر تحميل البيانات. حاول مرة أخرى لاحقاً.</div>';
                return;
            }
            renderAppsGrid(items);
        }

        function renderAppsGrid(items) {
            const grid = document.getElementById('appsGrid');
            grid.innerHTML = '';
            items.forEach(app => {
                const card = document.createElement('div');
                card.className = 'app-card';
                const icon = (app.artworkUrl512 || app.artworkUrl100 || '').replace('100x100', '200x200');
                const rating = app.averageUserRating ? app.averageUserRating.toFixed(1) : '—';
                card.innerHTML = \`
                    <img class="app-icon" src="\${icon}" alt="" loading="lazy" onerror="this.style.opacity=0.3"/>
                    <div class="app-name">\${app.trackName || 'بدون اسم'}</div>
                    <div class="app-rating">⭐ \${rating}</div>
                \`;
                card.onclick = function() { openAppDetail(app); };
                grid.appendChild(card);
            });
        }

        function switchAppsTab(type) {
            currentAppsTab = type;
            document.getElementById('tabGames').classList.toggle('active', type === 'games');
            document.getElementById('tabApps').classList.toggle('active', type === 'apps');
            loadAppsList(type, false);
        }

        function openAppDetail(app) {
            const ov = document.getElementById('appDetailOverlay');
            const body = document.getElementById('appDetailBody');
            const headerTitle = document.getElementById('appDetailHeaderTitle');

            headerTitle.textContent = app.trackName || 'التطبيق';

            const icon = (app.artworkUrl512 || app.artworkUrl100 || '').replace('100x100', '512x512');
            const rating = app.averageUserRating ? app.averageUserRating.toFixed(1) : '—';
            const ratingCount = formatCount(app.userRatingCount);
            const size = formatBytes(app.fileSizeBytes);
            const age = app.contentAdvisoryRating || app.trackContentRating || '—';
            const developer = app.artistName || app.sellerName || '—';
            const desc = (app.description || 'لا يوجد وصف.').substring(0, 800);
            const screenshots = (app.screenshotUrls || app.ipadScreenshotUrls || []).slice(0, 6);
            const playSearch = 'https://play.google.com/store/apps/search?q=' + encodeURIComponent(app.trackName || '');

            let shotsHtml = '';
            if (screenshots.length) {
                shotsHtml = '<div class="app-screenshots">' +
                    screenshots.map(s => \`<img src="\${s}" alt="screenshot" loading="lazy"/>\`).join('') +
                    '</div>';
            } else {
                shotsHtml = '<p style="color:var(--snippet-color);font-size:13px;margin:12px 0;">لا توجد لقطات شاشة متاحة</p>';
            }

            body.innerHTML = \`
                <div class="app-detail-top">
                    <img class="app-detail-icon" src="\${icon}" alt=""/>
                    <div class="app-detail-info">
                        <h1>\${app.trackName || ''}</h1>
                        <div class="developer">\${developer}</div>
                        <div class="app-detail-meta">
                            <span>⭐ \${rating} (\${ratingCount})</span>
                            <span>📦 \${size}</span>
                            <span>🔞 \${age}</span>
                        </div>
                    </div>
                </div>
                \${shotsHtml}
                <div class="app-description" id="appDesc">\${desc}</div>
                <a class="install-btn" href="\${playSearch}" target="_blank" rel="noopener">
                    Install — فتح في Google Play
                </a>
            \`;

            ov.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeAppDetail() {
            const ov = document.getElementById('appDetailOverlay');
            ov.classList.remove('active');
            document.body.style.overflow = '';
        }

        document.addEventListener('DOMContentLoaded', function() {
            loadCustomShortcuts();
            checkAppLockOnLoad();
            renderVideosList();
            loadAppsList('games', true);
        });
`;

document.documentElement.lang = 'ar';
document.documentElement.dir = 'rtl';

const appContainer = document.getElementById('app');
if (appContainer) {
    appContainer.innerHTML = appHTML;
} else {
    document.body.innerHTML = appHTML;
}

const script = document.createElement('script');
script.textContent = appJS;
document.body.appendChild(script);
