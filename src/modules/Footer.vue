<template>
    <footer class="footer">
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
                <p>服務專線 : 0932 750 108</p>
                <p>聯絡我們 : hc336688@gmail.com</p>
            </div>

            <!-- 時內地圖 -->
            <div class="footer-column">
                <h3>營業時間</h3>
                <a href="#" class="farm-link">🌾 農場 1 - 查看資訊</a>
                <br />
                <a href="#" class="farm-link">🌾 農場 2 - 查看資訊</a>
                <br />
                <a href="#" class="farm-link">🌾 農場 3 - 查看資訊</a>
                <br />
            </div>

            <!-- QR Code -->
            <div class="footer-column">
                <h3>QR CODE</h3>
                <img src="" alt="QR Code" class="qrcode" />
            </div>

            <!-- FB 粉絲專頁 -->
            <div class="footer-column">
                <h3>粉絲專頁</h3>
                <a
                    href="https://www.facebook.com/DaWuFram?locale=zh_TW"
                    target="_blank"
                    class="fb-link"
                >
                    🌍 FB 粉絲專頁
                </a>
                <br />
                <a
                    href="https://www.facebook.com/ChienKunFarm/?locale=zh_TW"
                    target="_blank"
                    class="fb-link"
                >
                    📸 IG 粉絲專頁
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
    border-top: 3px solid #26f645;
    padding: 40px 0;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

/* Footer 內容容器 */
.footer-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    padding: 0 30px;
}

/* 單個欄位樣式 */
.footer-column {
    flex: 1;
    text-align: left;
}

/* 欄場標題 */
.footer-column h3 {
    font-size: 20px;
    font-weight: 600;
    color: #2e7d32;
    margin-bottom: 15px;
    border-bottom: 2px solid #81c784;
    padding-bottom: 8px;
    font-family: 'Georgia', serif;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

/* 欄位文字 */
.footer-column p {
    font-size: 14px;
    line-height: 1.8;
    color: #388e3c;
    font-family: 'Georgia', serif;
}

/* 農場連結樣式 */
.farm-link {
    font-size: 13px;
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
    width: 100px;
    height: 100px;
    margin-top: 10px;
    border: 1px solid #81c784;
    border-radius: 8px;
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1));
}

/* FB 連結樣式 */
.fb-link {
    font-size: 14px;
    color: #2e7d32;
    text-decoration: none;
    line-height: 2;
    display: inline-block;
    transition:
        color 0.3s ease,
        transform 0.3s ease;
    font-family: 'Georgia', serif;
}

/* 懸停效果 */
.fb-link:hover {
    color: #66bb6a;
    transform: translateX(5px);
}

/* 響應式設計 */
@media (max-width: 768px) {
    .footer-content {
        flex-direction: column;
        align-items: center;
        gap: 40px;
        padding: 0 20px;
    }
    .footer-column {
        text-align: center;
    }
    .footer-column h3 {
        font-size: 18px;
    }
    .footer-column p,
    .farm-link,
    .fb-link {
        font-size: 12px;
    }
    .qrcode {
        width: 80px;
        height: 80px;
    }
}
</style>
