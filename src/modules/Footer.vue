<template>
    <footer class="footer" role="contentinfo">
        <div class="footer-content">
            <!-- 服務條款 -->
            <div class="footer-column">
                <h3>服務條款</h3>
                <p>
                    農場位置位於屏東大武山下的水源保護區園區
                    <br />
                    自湧灌溉水都是享用大武山賜予的資源
                    <br />
                    土壤與水源全都通過ＳＧＳ認證
                    <br />
                    經層層檢驗，通過有機認證
                    <br />
                    是有身分證的保證產品!
                </p>
            </div>

            <!-- 店家資訊 -->
            <div class="footer-column">
                <h3>店家資訊</h3>
                <p>
                    服務專線:
                    <a href="tel:0932750108" aria-label="撥打服務專線">0932 750 108</a>
                </p>
                <p>
                    聯絡我們:
                    <a href="mailto:hc336688@gmail.com" aria-label="發送電子郵件">
                        hc336688@gmail.com
                    </a>
                </p>
            </div>

            <!-- 營業時間 (取消註解並優化) -->
            <div class="footer-column">
                <h3>營業時間</h3>
                <ul class="farm-links">
                    <li>
                        <a href="#" class="farm-link" aria-label="查看農場1資訊">
                            🌾 農場 1 - 查看資訊
                        </a>
                    </li>
                    <li>
                        <a href="#" class="farm-link" aria-label="查看農場2資訊">
                            🌾 農場 2 - 查看資訊
                        </a>
                    </li>
                    <li>
                        <a href="#" class="farm-link" aria-label="查看農場3資訊">
                            🌾 農場 3 - 查看資訊
                        </a>
                    </li>
                </ul>
            </div>

            <!-- QR Code -->
            <div class="footer-column">
                <h3>QR CODE</h3>
                <img src="/farms/QRcode.jpg" alt="掃描QR碼以了解更多" class="qrcode" />
            </div>

            <!-- FB 粉絲專頁 -->
            <div class="footer-column">
                <h3>粉絲專頁</h3>
                <a
                    href="https://www.facebook.com/DaWuFram?locale=zh_TW"
                    target="_blank"
                    class="fb-link"
                    aria-label="前往我們的Facebook粉絲專頁"
                >
                    🌍 FB 粉絲專頁
                </a>
            </div>
        </div>
    </footer>
</template>

<script setup>
// Footer 組件目前不需要額外的邏輯
</script>

<style scoped>
/* Footer 樣式 */
.footer {
    width: 100%;
    background-color: #e8f5e9;
    border-top: 3px solid #66bb6a;
    padding: 2.5rem 0;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

/* Footer 內容容器 */
.footer-content {
    max-width: 1200px; /* 限制最大寬度，避免在大螢幕上過於分散 */
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap; /* 允許欄位換行 */
    justify-content: space-between;
    gap: 2rem;
    padding: 0 1.5rem;
}

/* 單個欄位樣式 */
.footer-column {
    flex: 1;
    min-width: 200px; /* 確保欄位不會過窄 */
    text-align: left;
}

/* 欄場標題 */
.footer-column h3 {
    font-size: clamp(1.125rem, 2vw, 1.25rem); /* 響應式字體大小 */
    font-weight: 600;
    color: #2e7d32;
    margin-bottom: 1rem;
    border-bottom: 2px solid #81c784;
    padding-bottom: 0.5rem;
    font-family: 'Georgia', serif;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

/* 欄位文字 */
.footer-column p {
    font-size: clamp(0.875rem, 1.5vw, 1rem);
    line-height: 1.8;
    color: #388e3c;
    font-family: 'Georgia', serif;
}

/* 農場連結清單 */
.farm-links {
    list-style: none;
    padding: 0;
}

/* 農場連結樣式 */
.farm-link {
    font-size: clamp(0.8125rem, 1.5vw, 0.875rem);
    color: #2e7d32;
    text-decoration: none;
    line-height: 2;
    display: inline-block;
    transition:
        color 0.3s ease,
        transform 0.3s ease;
}

.farm-link:hover {
    color: #66bb6a;
    transform: translateX(5px);
}

/* QR Code 圖片樣式 */
.qrcode {
    width: min(100px, 25vw); /* 響應式寬度 */
    height: auto;
    margin-top: 0.625rem;
    border: 1px solid #81c784;
    border-radius: 8px;
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1));
}

/* FB 連結樣式 */
.fb-link {
    font-size: clamp(0.875rem, 1.5vw, 1rem);
    color: #2e7d32;
    text-decoration: none;
    line-height: 2;
    display: inline-block;
    transition:
        color 0.3s ease,
        transform 0.3s ease;
    font-family: 'Georgia', serif;
}

.fb-link:hover {
    color: #66bb6a;
    transform: translateX(5px);
}

/* 響應式設計 */
@media (max-width: 1024px) {
    .footer-content {
        gap: 1.5rem;
        padding: 0 1rem;
    }
    .footer-column {
        flex: 1 1 45%; /* 兩欄佈局 */
    }
}

@media (max-width: 768px) {
    .footer-content {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        padding: 0 1rem;
    }
    .footer-column {
        text-align: center;
        flex: 1 1 100%; /* 單欄佈局 */
    }
}

@media (max-width: 480px) {
    .footer {
        padding: 1.5rem 0;
    }
    .footer-column h3 {
        font-size: 1rem;
    }
    .footer-column p,
    .farm-link,
    .fb-link {
        font-size: 0.75rem;
    }
    .qrcode {
        width: min(80px, 20vw);
    }
}
</style>
