// Cookieを保存する関数
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Cookieを取得する関数
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

document.addEventListener('DOMContentLoaded', function () {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptButton = document.getElementById('accept-all');
  const necessaryButton = document.getElementById('accept-necessary');

  // 閉じるアイコンのクリックでバナーを非表示
  const closeIcon = cookieBanner.querySelector('img[alt="閉じる"]');
  if (closeIcon) {
    closeIcon.style.cursor = 'pointer';
    closeIcon.addEventListener('click', function () {
      cookieBanner.style.display = 'none';
    });
  }

  // Cookieが設定されているかチェックし、なければバナー表示
  if (!getCookie('cookieConsent')) {
    cookieBanner.style.display = 'block';
  }

  // すべて許可ボタンの処理
  acceptButton.addEventListener('click', function () {
    setCookie('cookieConsent', 'all', 365); // 365日有効
    cookieBanner.style.display = 'none';
    console.log("すべてのCookieを許可しました。");
  });

  // 必要なCookieのみボタンの処理
  necessaryButton.addEventListener('click', function () {
    setCookie('cookieConsent', 'necessary', 365); // 365日有効
    cookieBanner.style.display = 'none';
    console.log("必要なCookieのみ許可しました。");
  });
});